---
layout: post
title:  "Sketchify: Binary to Sketch Draft"
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

On the other hand, we can use **local** thresholding to determine the best cutoff value on an (nxn) patch of the image. This is roughly what an adaptive thresholding filter does - it scans the whole image and performs local thresholding on each patch. The rightmost image was generated in this way and preserves most of the text readability. For our application of "mangification", this generally translates to preserving all the edges and finer image details, which greatly increases the information the network has to work with.

Well, this is the idea, at least. The actual algorithms can become more complex.

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

In essence, we create an image then blur the image to create a mask, and do point-wise division of the image with the mask to create a sketch. The sketch effect is in that the mask will have blurred edges (which reduces their intensity), hence increasing their values (relative to the other pixels) when the original edges are divided by the blurred edges; colored patches won't be affected much by the blur so they will all divide to the same constant (white). In the author's post, he explains the process in greater depth.

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

The fact that the training images only contain the two possible RGB values (black, white) seems like it would pose a serious challenge for the network, since it has to interpolate this into a full-greyscale image. Though the author of *deepcolor* was faced with this issue as well, he proposes that the user can give the network "hints" by coloring portions of the image and using that as a separate input layer. As far as I can tell, there is no such convenient way for me to provide "hints" to my network, as any use of colors in the sketch are situated very close to the surfaces of the curves and not deep between them.

![](http://i.imgur.com/RYfrBvW.png){: .center-image }

<center class="center-image">Left: Original non-training set image. Middle-Left: Sketch filter. <br>Middle-Right: Adaptive thresholding filter to form binary image. Right: Preview of Sketchify recreation from binary image.</center><br>

So my goal is to *transform* an image, rather than *create* a new image from scratch. This is more-or-less in line with U-Net's ability to preserve high-level features, which will be discussed below.

<!--Binary best approximates mangas?-->

### Building and Training The Network

(See [this][u-net-diagram] figure to get an overview or the U-Net Architecture, or refer back to the [paper][u-net])

The idea is that, we start with our original image then repeatedly downsample (half the dimesions of the image) through learned convolution filters, while doubling the number of "filtered features" (a third dimension stacking filtered variations of the image at each step) during each downsample. At each downsampling step the resultant image/features are cached for the next phase. 

Then, to recreate an image with the same initial dimensions as the input, we start with our final downsampled image and upsample it using learned transposed convolution filters applied to all the features sitting along our third dimension. 

After our first upsample, we concatenate the cached image/features with the same dimensions from our corresponding downsample step and use this new tensor as the set of features for the next upsample step. The number of remaining features is successively halved at each step. This is repeated until the result has the same dimensions of the original image (in the last step, all the extra feature layers are used to determine the last [one if greyscale, or three if RGB] layer of the image).

To be honest, you should probably just read the original paper's explanation.

| ![](http://i.imgur.com/caFUzrH.gif) | ![](http://i.imgur.com/ViJHtPF.gif) |

<center class="center-image">Left: 2D image convolution on a 7x7 image. Right: 2D image deconvolution (also known as transposed convolution) on a 3x3 image.</center><br>

(See [here][conv-gif] for source of above images)

This represents the generative portion of the network. As usual, the results from the discriminator are back-propogated to train and improve the weights of each convolutional layer. 

The process of concatenating the features between corresponding up/down steps - forming residual connections - seems to be the factor that gives this net it's amazing high-level feature preservation ability. Along each step of the restoration upsampling the network must consider the results from a previous downsampling step, and the further down along the upsampling process it gets the farther back along the downsampling process it has to look - almost like a reversed actualization of [Cloud Atlas][cloud-atlas].

For the actual training of the network, I collected roughly 5800 anime images from my favorite source (reddit), more specifically the SFW anime art sub [/r/awwnime][awwnime]. They were almost all used as training data, whereas my validation and testing sets came from various other sources like other anime-themed subs or pixiv.net. All of the collected images were within the date range [2016/01/01, 2017/08/20-ish] so the art style is relatively up to date. 

The images were all cropped/resized to (256x256); for landscape images, I selected the middle square portion whereas for portrait images I selected the topmost square portion, as I believe they would contain the most useful information.

I then trained on this dataset with a minibatch size of 16 for about 80 epoches on a TITAN X. (I had originally planned for 216 epoches, but the program crashed 5 hours in and I called it a day). The memory usage was quite heavy; with the rather small minibatch of 16 (256x256) images, I was using nearly 8 GB of RAM already! Though I could have still used a slightly larger minibatch, I have a feeling that the computer would have crashed even sooner had I done so.

### Results

The results weren't great. But they weren't too bad in most cases, either - I'm no expert in image processing but I think they are better than any traditional techniques. Though to be fair this is quite a contrived scenario and I seriously doubt many people have worked on conversion of binary/manga images to sketches ... Anyway.<br>

![](http://i.imgur.com/3lYCnEa.png)
<center class="center-image">Originals.</center><br>

![](http://i.imgur.com/hn6tUjs.png)
<center class="center-image">Sketch filter.</center><br>

![](http://i.imgur.com/XQ2IEtb.png)
<center class="center-image">Adaptive thresholded binaries. (Note that they may not appear binary due to image resizing)</center><br>

![](http://i.imgur.com/ZeqMX1z.png)
<center class="center-image">Sketchify recreation from binaries.</center><br>

I think some of these testing examples were bound to be particularily difficult for the network. For example, images 3 and 4 contain a *prominent* background portion which very few training images would have, while image 1 is purely a background!

Also, it seems that eyes are either a hit-or-miss: the network either detects then darkens them (see the example before this section), or misses them completely and fades them out. Image 2 is definitely the best result, mostly for this reason. I think collecting more diverse training data and increasing the number of epoches would still improve performance. 

### Final Note

TBA

[gan]: https://en.wikipedia.org/wiki/Generative_adversarial_networks
[draw]: https://arxiv.org/pdf/1502.04623.pdf
[gardner-architect]: https://taraeast.wordpress.com/2015/01/30/architect-vs-gardener/
[v-ae]: https://arxiv.org/pdf/1606.05908.pdf
[rnn]: https://en.wikipedia.org/wiki/Recurrent_neural_network
[cnn]: https://en.wikipedia.org/wiki/Convolutional_neural_network
[u-net]: https://arxiv.org/pdf/1505.04597.pdf
[u-net-diagram]: https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/u-net-architecture.png
[deepcolor]: https://github.com/kvfrans/deepcolor
[sketch]: http://www.askaswiss.com/2016/01/how-to-create-pencil-sketch-opencv-python.html
[dodge]: https://en.wikipedia.org/wiki/Blend_modes#Dodge_and_burn
[sketch-2]: https://github.com/mbeyeler/opencv-python-blueprints/blob/master/chapter1/filters.py
[conv-gif]: http://deeplearning.net/software/theano/tutorial/conv_arithmetic.html
[cloud-atlas]: https://en.wikipedia.org/wiki/Cloud_Atlas_(novel)
[awwnime]: https://reddit.com/r/awwnime