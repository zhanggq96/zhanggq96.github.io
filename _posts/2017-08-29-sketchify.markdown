---
layout: post
title:  "Sketchify: Binary to Sketch"
date:   2017-08-28 21:00:00 -0400
author: George Zhang
categories: sketch tensorflow 
custom_css: none
---

In my last post on [*draw*][draw], I explored the use of a [GAN][gan] to generate a set of figures that is alike in appearance to the training dataset. The [(R)NN][rnn] used by *draw* is known as a [variational auto-encoder][v-ae], which via a *decoder* draws a generated scene one part at a time, spacially building upon its previous renderings (similar to what writers would describe as a "gardner"). It is good at locally refining a drawing but has the weakness of lacking context. The consequence of this is that the generated images are usually of a similar style and low-level form to the training set data but they will differ in high-level form (see the introduction bit on variational auto-encoders).

<!--
<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/TTWv5kb.png">
</span>
-->
![ ](http://i.imgur.com/TTWv5kb.png){: .center-image }

Depending on situation, this could be very a very desired trait: I suspect it could even be used to augment sets of training data for other deep learning tasks if the principle components of the data are in the complex varieties of high-level form. However, this behaviour would be rather useless for a task such as image processing, where the primary concern is to preserve the recognition of the high level structure while modifying something like luminance or contrast.

<!--
<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/D1chvP2.png">
</span>
-->
![ ](http://i.imgur.com/D1chvP2.png){: .center-image }
<br>

There is an alternative network architecture that appears to be able to do the opposite, however! In this post, I'll explore the use of U-Net, a context-aware network which relies solely on the use of [(C)NNs][cnn] to generate an image that preserves high-level structure while recomposing the underlying style. Rather than organically creating a new image, this net repeatedly references (modified) instances of the original feed image in its entirety and builds upon it by slowly refining the new details (not a perfect analogy, but this is what writers would call an "[architect][gardner-architect]".)

U-Net was originally used for [biomedical image segmentation][u-net]. I was inspired by [this][deepcolor] application of U-Net for coloring manga-style pictures (something which requires structural preservation of edges) and wanted to try something of a similar flavor. For the creation of his training set of black-and-white manga images, the author used an adaptive thresholding technique; however, there are many more options for generating training data out there, like "sketchifying" filters (the advantages and realism of which will be discussed shortly). Off this tangent, I decided to see if I could use U-Net to generate sketch-like images from those noisy binary thresholded images - that will be the main focus of this post.

### Generating Training / "Ground Truth" Data

The author of *deepcolor* applied onto full-colored images an adaptive thresholding technique to generate his "manga-style" training images. The idea of "thresholding" is based in that usually published manga is binary - a pixel is either fully black, or fully white - so we need to find a method which takes in a rgb pixel as input and purposefully maps it to either "black" or "white". However, **global** thresholding - thresholding the whole image at once - would not be a good conversion technique for this purpose. In the image below, the middle two images were generated using two different global conversion thresholds. Due to the uneven luminance, we have to sacrifice readability in one region for another.

![Left: Original. Middle: Two different global thresholding results. Right: Adaptive thresholding.](http://i.imgur.com/fkrE9J4.png){: .center-image }

<center class="center-image">Left: Original. Middle: Two different global thresholding results. Right: Adaptive thresholding.</center><br>

On the other hand, we can use **local** thresholding to determine the best cutoff value on an (nxn) patch of the image. This is precisely what an adaptive thresholding filter does - it scans the whole image and performs local thresholding on each patch. The rightmost image was generated in this way and preserves most of the text readability. For our application of "mangification", this generally translates to preserving all the edges and finer image details, which greatly increases the information the network has to work with.

The code for adaptive thresholding using OpenCV is given below, with some additional settings applied.

{% highlight python %}
import cv2
...
# From Deepcolor repository
# Converts image to binary greyscale using adaptive thresholding.
def filter_contour(img_rgb):
    img_contour = cv2.adaptiveThreshold(cv2.cvtColor(img_rgb, cv2.COLOR_BGR2GRAY), 255,
                  cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, blockSize=9, C=2)
    img_denoise = cv2.medianBlur(img_contour, 3)

    return img_denoise
{% endhighlight %}

Now, for generating the sketch-like "ground truth" images I made use of a technique known as [dodging][dodge]. This was traditionally a photography technique which changed the lightness of an image (back when they used physical photographs, "negatives"). I will simulate it with OpenCV using [a technique I found online][sketch].

In essence, we create an image then blur the image to create a mask, and do point-wise division of the image with the mask to create a sketch. This works because the mask will have blurred edges (which reduces their intensity), hence increasing their values (relative to the other pixels) when the original edges are divided by the blurred edges. The sketch effect is in the fact that colored patches won't be affected much by the blur so they will all divide to the same constant (white). In the author's post, he explains the process in greater depth.

One thing I found while going through the technique was that performing the inversion (or "negative") portion was actually unnecessary. The author himself also seems to be aware that this part of the process is a vestigial relic from the old days of photography ([at least, the source code that he linked to seems to think so][sketch-2] - though please correct me if I'm wrong on any account).

![](http://i.imgur.com/q4KqIRI.png){: .center-image }

<center class="center-image">Left: Original. Middle-Left: Greyscale. Middle-Right: Greyscale Blurred (exaggerated for effect). Right: Greyscale ./ Greyscale Blurred</center><br>

It's far from perfect, but it's workable. Code from source provided below.

{% highlight python %}
import cv2
...
# From http://www.askaswiss.com/2016/01/how-to-create-pencil-sketch-opencv-python.html
# Converts image to a sketch-like appearance.
def image_to_sketch(img):
    def dodge(image, mask):
        return cv2.divide(image, mask, scale=256)
	
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    img_blur = cv2.GaussianBlur(img_gray, ksize=(21, 21),
                                sigmaX=0, sigmaY=0)
    img_blend = dodge(img_gray, img_blur)
    
    return img_blend
{% endhighlight %}

The fact that our training images only contain the two possible RGB values (black, white) seems like it would pose a serious challenge for the network, since it has to interpolate this into a full-greyscale image. Though the author of *deepcolor* was faced with this issue as well, he proposes that the user can give the network "hints" by coloring portions of the image and using that as a separate input layer. As far as I can tell, there is no such convenient way for me to provide "hints" to my network, as any colors in the sketch are situated very close to the surfaces of the curves and not deep between them.

![](http://i.imgur.com/RYfrBvW.png){: .center-image }

<center class="center-image">Left: Original non-training set image. Middle-Left: Sketch Filter. Middle-Right: Adaptive Thresholding Filter. Right: Preview of Sketchify Recreation.</center><br>

<!--Binary best approximates mangas?-->

### Training the Network

TBA

[gan]: https://en.wikipedia.org/wiki/Generative_adversarial_networks
[draw]: https://arxiv.org/pdf/1502.04623.pdf
[gardner-architect]: https://taraeast.wordpress.com/2015/01/30/architect-vs-gardener/
[v-ae]: https://arxiv.org/pdf/1606.05908.pdf
[rnn]: https://en.wikipedia.org/wiki/Recurrent_neural_network
[cnn]: https://en.wikipedia.org/wiki/Convolutional_neural_network
[u-net]: https://arxiv.org/pdf/1505.04597.pdf
[deepcolor]: https://github.com/kvfrans/deepcolor
[sketch]: http://www.askaswiss.com/2016/01/how-to-create-pencil-sketch-opencv-python.html
[dodge]: https://en.wikipedia.org/wiki/Blend_modes#Dodge_and_burn
[sketch-2]: https://github.com/mbeyeler/opencv-python-blueprints/blob/master/chapter1/filters.py