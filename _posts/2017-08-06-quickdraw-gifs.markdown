---
layout: post
title:  "Quickdraw Gifs"
date:   2017-07-25 15:00:00 -0400
author: George Zhang
categories: sketch tensorflow 
custom_css: quickdraw
---

<!--
{% if page.custom_css %}
  {% for stylesheet in page.custom_css %}
  <link rel="stylesheet" href="/css/{{ stylesheet }}.css" media="screen" type="text/css">
  {% endfor %}
{% endif %}
-->

<!--http://mattgemmell.com/page-specific-assets-with-jekyll/-->
<!--https://stackoverflow.com/questions/19331362/using-an-image-caption-in-markdown-jekyll-->

*Disclaimer: I'm new to machine learning, so there could be inaccuracies in here! I hope to learn more in the future.

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/esT7CSe.gif">
    <img src="http://i.imgur.com/qmBzM3w.gif">
    <img src="http://i.imgur.com/RwSc7sx.gif">
</span>

A few months back, Google introduced their new project [Quickdraw][quickdraw], aimed at mass-collecting the doodles of internet users worldwide in order to train a neural network to recognize them. These days, I only seem to get hard-to-draw objects and the NN is never able to recognize my poor drawings. Anyway, they've made their dataset publicly availible and others have already used the data to do things such as [analyze how different cultures draw geometric figures][quickdraw-circle], and [use deep learning to create original images][quickdraw-circle]. In particular, the latter is able to use vector images and interpolate between drawings; I couldn't do anything so advanced myself, but I thought it would be fun to see if a simple NN is able to draw doodles better than I can.

I started with [this][draw] implementation of [*draw*][draw-paper] on github, which is explained well in [the user's blog post][draw-post]. It works on the well-known MNIST dataset, which is so widely used in machine learning that some libraries like tensorflow (which is the ML library this implementation of *draw* uses) include an option to import it directly. Being unfamiliar with tensorflow, it took a while to figure out how to get it to work with other images, but it wasn't too bad once I discovered that everything is done using numpy arrays and [Google's quickdraw dataset is availible as numpy bitmaps][quickdraw-data].

{% highlight python %}
# Old code using MNIST
data_directory = os.path.join(FLAGS.data_dir, 'mnist')
if not os.path.exists(data_directory):
	os.makedirs(data_directory)
train_data = mnist.input_data.read_data_sets(data_directory, one_hot=True).train # binarized (0-1) mnist data

# New code using Quickdraw
# draw_obj is any one of the quickdraw dataset objects
data_directory = os.path.join(FLAGS.data_dir, draw_obj)
if not os.path.exists(data_directory):
    os.makedirs(data_directory)

draw_data = np.load('../quickdraw_data/%s.npy' % (draw_obj,))
draw_data = draw_data / 255 # Normalize the 8-bit values to somewhere between [0,1]
{% endhighlight %}

More conveniently, they were also the same size (28 x 28 px !) so I didn't even have to modify any of the parameters; it was just plug and play. (This is a programmer's way of saying "It took me an embarassingly long time to figure out").

The original implementation worked well with all ten digits in the dataset during training, repeatedly improving upon an unintellegible random seed until it converged to one of the ten digits. Despite this, I saw no reason to include multiple classes of objects in one training session for my purposes (though it may be something worth trying in the future).

As with all ML tasks, the performance was heavily reliant on how much data I had to train the model. Most of the quickdraw datasets contained over 100k doodles, which might have worked for 1000 iterations on simple shapes like 'hexagon' or 'octagon' but definitely would not have worked for more complex drawings like 'ambulance' or 'airplane'. So to increase the number of training iterations (epoches), I wrote a simple generator that could iterate over the same dataset multiple times once I was nearing the end. For a classification task, this may not be a good solution due to overfitting, but for this simple project overfitting really isn't that big of an issue.

I eventually did get it to work, but there are some subtleties to it I'll have to talk about later. First, let's see how the generated images look like; they will be shown below, with the only modification being the application of some sharpening filters.

{% highlight python %}
# 100k+ training images with a batch size of 100 per training iteration
split_size = n_training_images // batch_size
def get_next_batch(n=batch_size):
    k = 0 # Keeps count of where we are iterating in draw_data
    # "Reset" generator to beginning of dataset if nearing end
    while k <= split_size - 1:
        if k >= split_size - 2:
            k = randint(0, n - 1)
        else:
            k += 1
        yield draw_data[k:k + n]
{% endhighlight %}

For the hexagons, I used 10,000 iterations of training with each batch containing 100 images:

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/64tkVKJ.png">
    <img src="http://i.imgur.com/agGYk6l.png">
    <img src="http://i.imgur.com/5bwHe0Y.png">
    <img src="http://i.imgur.com/KbEo5Qb.png">
</span>

*One of these is not like the others...*

Not bad. For the more complicated figures, I trained for 25,000 - 40,000 iterations, keeping all other parameters invariant.

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/rP8iDan.png">
    <img src="http://i.imgur.com/yIwL7Ly.png">
    <img src="http://i.imgur.com/ZtkQLj0.png">
    <img src="http://i.imgur.com/8n9lauH.png">
</span>

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/t3CVUzD.png">
    <img src="http://i.imgur.com/PzE7CMq.png">
    <img src="http://i.imgur.com/pKXeR7A.png">
    <img src="http://i.imgur.com/oEYS7Jg.png">
</span>

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/HVa0AmE.png">
    <img src="http://i.imgur.com/TmC7DgR.png">
    <img src="http://i.imgur.com/SvPxcBv.png">
    <img src="http://i.imgur.com/Pu3KXrX.png">
</span>

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/NbFCNTm.png">
    <img src="http://i.imgur.com/sAGfXJl.png">
    <img src="http://i.imgur.com/puNGX5Z.png">
    <img src="http://i.imgur.com/vlVt8AZ.png">
</span>


The variation is much more apparent in these. At the very least, they all seem *plausible* as doodles of ... something. See if you can guess what the objects are before revealing the answers below.

<!--
<div class="hidden-hover">
    <div class="hidden-text">Coffee Cup</div>
</div>
<div class="hidden-hover">
    <div class="hidden-text">Whale</div>
</div>
<div class="hidden-hover">
    <div class="hidden-text"><s>Palm Tree</s> Windmill</div>
</div>

<div>Test</div>
<div class="hidden-hover">Test 2</div>
<div class="hidden-text">Test 3</div>
<div class="hidden-hover">
    <div>Test 4</div>
</div>

Test
-->

<!--https://stackoverflow.com/questions/32814161/how-to-make-spoiler-text-in-github-wiki-pages-->
<details> 
  <summary>Image Set 1</summary>
   Apple, 25k iterations
</details>
<details> 
  <summary>Image Set 2</summary>
   Coffee Cup, 25k iterations
</details>
<details> 
  <summary>Image Set 3</summary>
   Whale, 40k iterations
</details>
<details> 
  <summary>Image Set 4</summary>
   <s>Palm Tree</s> <s>Scimitars</s> <s>Biohazard</s> Windmill, 25k iterations
</details>

<!--[Conclusion]-->

Props if you managed to get them all right (I sure wouldn't have). They are of noticeably worse quality than [the][quickdraw-apple] [original][quickdraw-coffee_cup] [training][quickdraw-whale] [datasets][quickdraw-windmill], but that shoudln't come as a surprise. I should also mention that there was some selection bias in these images - let's just say not all of them turned out very well, but more on that later.

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/TTWv5kb.png" style="max-width: 350px; max-height: 350px">
    <img src="http://i.imgur.com/jVibXRT.gif" style="max-width: 350px; max-height: 350px">
</span>

Now I want to talk about the subtle catch to what I have been able to do using *draw*. In generating the images, one part of the code stands out as kind of strange:

{% highlight python %}
for xtrain in get_next_batch():
    # xtrain is a batch of 100 samples used to train the NN,
    # obtained from the generator in the previous code snippet.
    feed_dict = {x: xtrain}
    ...
...

canvases = sess.run(cs,feed_dict) # generate some examples
canvases = np.array(canvases) # T x batch x img_size
{% endhighlight %}

You'll notice that in generating the new samples, we used the feed_dict variable from the last iteration of training! So is it possible that we are somehow abusing the training images to draw our new images? (Well, in some sense, of course we are ... this is machine learning, after all. To make the question more precise, is the neural net independently drawing new images based solely off of statistical data from training images, or is it "copying" off of the training images, like a university student rewording an essay they found on the internet?)

Figure 6 of the *draw* paper I linked to earlier depicts a "most similar" comparison of generated images to training set images. So, what I worried upon in the last paragraph should not be the case. I'm not entirely sure to what extent the feed_dict influences the generated images, but just from using the NN and trying different things it seems like it is only being used as a random seed because it has the correct canvas size. To back that up, I rewrote the code to use a custom image as the seed for generating all 100 new images:

{% highlight python %}

def get_same_pic(n=batch_size, k=si, name=name):
    ...
    elif name is not None:
        from scipy.ndimage import imread
        img = imread('%s.png' % (name,), flatten=True) # Flatten greyscales the image
        print('img shape:', img.shape)
        img = img.reshape(A*B) # Reshapes the image to a 28*28 = length 784 1d vector
        batch = np.tile(img, (n, 1)) # Kind of like repmat() in MATLAB: repeats the image 100 times.
    
    return batch
...

xtrain = get_same_pic()
feed_dict = {x: xtrain}

canvases = sess.run(cs,feed_dict) # generate some examples
canvases = np.array(canvases) # T x batch x img_size

{% endhighlight %}

The custom image can be any arbitrary (28 x 28) png image read in as "name.png". I use scipy's imread method to convert it into a numpy bitmap. For example, take "triangle.png":
<!--How to get a hexagon from a triangle?-->

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/RNk0OLC.png">
</span>

Clearly, it doesn't resemble any of the other quickdraw objects I've used! Now I can use the above snippet of code along with my crooked triangle to seed new quickdraw images:

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/TtoeCaf.png">
    <img src="http://i.imgur.com/pZuJwBP.png">
    <img src="http://i.imgur.com/lDW4rbq.png">
    <img src="http://i.imgur.com/aeCyWDL.png">
</span>

... Yes, these are the same four classes of objects I used previously. While "apple" remains intelligible, the other three look like the result of monkeys splattering paint against a wall. I believe that this is because I used the triangle seed, rather than the last iteration of xtrain, but perhaps not so much as it may appear: I mentioned previously there was selection bias in the images I selected for display in my first showcase (containing images seeded from feed_dict). I think this is best explained by displaying some of the images that I decided to omit:

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/8ypBgMi.png">
    <img src="http://i.imgur.com/jNz83h0.png">
    <img src="http://i.imgur.com/DRMLUI7.png">
    <img src="http://i.imgur.com/qWlyTLi.png">
</span>

*???*

<!--*Coffee cups.*-->
<!--
*Take a guess!*
Could you figure out what they were? If you guessed fish, you're wrong, because they're supposed to be whales. Okay, okay, maybe it wasn't that hard to tell. But if you can guess what this next one is, I'd be surprised.
*Palm Tree, Scimitars or Biohazard?*
-->
<!--Let's take a look at something even more complicated, 40,000 iterations of...-->

In summary, wildly different seeding images result in wildly different resultant images. Strangely though, using a seed from the original training set images or an resembling one does seem to produce more tangible results. In the next section, I'll additionally demonstrate that similar seeds produce similar results, and use a slight amount of variation in seeding images for the basis of generating the quickdraw gifs.

<h4>Quickdraw Gif Generator</h4>

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/V9BwECF.png" style="max-width: 350px; max-height: 350px">
    <img src="http://i.imgur.com/cxsfdsR.png" style="max-width: 350px; max-height: 350px">
</span>

The image on the left shows the result of using the same seeding image "triangle.png" to repeatedly generate images of apples. Notice that even when using the same seed, there is slight variation between all of the resultants - this is because there is an element of randomness in *draw*. We can amplify this randomness just a little bit by introducing small changes to the seeding images, for example, by adding the following snippet of code at the end of the get_same_pic() method:

{% highlight python %}

# Does random & different things to the pixels of each of the 100 image seeds, 
# so that the results they produce turn out to be noticeably different.

for image in batch:
    image = image.reshape(A,B) # Reshape 1d vector to 28 x 28 2d image
    if k >= 0:
        edge_list = get_edges(image)
    else:
        edge_list = get_edges(image)
    if rand:
        for edge in edge_list:
            r = randint(0,100) # Do something random with each edge
            if r >= 98:
                image[edge[0], edge[1]] = 1
            elif r > 90:
                image[edge[0], edge[1]] = min(2*image[edge[0],edge[1]], 1)
            elif r < 5:
                image[edge[0], edge[1]] /= 2.0 # Ex. Half its greyscale value
            elif 5 <= r < 20:
                image[edge[0], edge[1]] += r / 50
            elif 20 <= r <= 25:
                image[edge[0], edge[1]] = 0

# Implement get_edges() method used above in any way you want.
# It doesn't even have to be edges. For example, method used by above:

def not_really_edges_get_edges(img):
    # https://stackoverflow.com/questions/33155316/finding-edges-in-a-image-generated-by-an-numpy-array
    img_sobel = scipy.ndimage.filters.sobel(img)
    sbl_max = np.amax(abs(img_sobel))

    edge_list = []

    for i in range(img.shape[0]):
        for j in range(img.shape[1]):
            # Get edge method
            if not rand and img_sobel[i,j] >= (sbl_max / 2.0):
                print(img_sobel[i,j], sbl_max / 2.0)
                edge_list.append((i,j))
            # Completely random method
            elif rand:
                r = randint(0,100)
                if r <= 6 and i < img.shape[0]-1 and j < img.shape[1]-1:
                    edge_list.append((i, j))
                    edge_list.append((i + 1, j)) 
                    edge_list.append((i + 1, j + 1))
                elif r <= 13 and i > 0 and j > 0:
                    edge_list.append((i, j))
                    edge_list.append((i - 1, j))
                    edge_list.append((i, j - 1))

    return edge_list

{% endhighlight %}

I set the probability threshold fairly low, so that most pixels are left unchanged. Now adding in this code produces the the new set of outputs on the right, which is noticeably less conformal than the generated output using identical seeds. Here is a demonstration of the same results:

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/V9BwECF.png" style="max-width: 350px; max-height: 350px">
    <img src="http://i.imgur.com/cxsfdsR.png" style="max-width: 350px; max-height: 350px">
</span>

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/9ayLfcr.gif" style="max-width: 350px; max-height: 350px">
    <img src="http://i.imgur.com/DkLl3ts.gif" style="max-width: 350px; max-height: 350px">
</span>

*/r/mildlyinfuriating (If you're confused, kindly ignore this text...)*

So now I have a decent set of images that are relatively homogenous but noticeably distinguishable. Wouldn't it be fun to see if I could produce some sort of animation with them? All I would have to do is layer the different images I've already generated, then convert to gif format! And so ...

{% highlight python %}
from PIL import Image
from scipy.misc import imfilter
import imageio # An image management library that can convert numpy arrays to gifs

...

def load_images(out_file):
    ...
    # Preamble to load image data from .npy file

    for i in range(batch_size):
        # Apply a sharpening and edge enhancing filter to the new image
        img = 255 - imfilter(imfilter(X[T-1, i, :, :], 'sharpen'), 'edge_enhance')
        print(img.shape)

        img = Image.fromarray(img)
        
        # Anti-alias the edges of the image
        scale = 2
        img = img.resize((A * scale, B * scale), Image.ANTIALIAS)
        img = img.resize((A, B))
        img = np.array(img.getdata()).reshape(A, B)

        print(img.shape)
        images.append(img)

    return images

...
images = load_images(out_file) # numpy bitmap with all 100 images

# Create the file directories, etc...
...

imageio.mimsave('%s/%s.gif' % (gifpath, prefix), images[:num_gif_frames], duration=0.12)
# 6 frames per gif, 12 seconds per frame
print('Saving gif file in:', '%s/%s.gif' % (gifpath, prefix))

{% endhighlight %}

Before rendering the finished product, I apply a sharpening and edge enhancing filter (to make edges less blurry), then anti-alias the result (to make sure the edges aren't *too* pixelated). And that's the end!

<span align="center" class="quickdraw-samples">
    <img src="http://i.imgur.com/2bgm0K2.gif">
<!--    <img src="http://i.imgur.com/0AEOXS7.gif">-->
    <img src="http://i.imgur.com/U7tetfM.gif">
    <img src="http://i.imgur.com/0AEOXS7.gif">
    <img src="http://i.imgur.com/TcMPFKW.gif">
    <img src="http://i.imgur.com/aeoFVFK.gif">
</span>

There are probably a million better ways to generate these animations, but it's always cool to be able to do it with machine learning.

Source code: [https://github.com/Maytide/Quickdraw-Gifs][quickdraw-gifs]

<!--This is in stark contrast to the previous demonstration, which used wildly different apple seeds.-->


<!--https://math.stackexchange.com/questions/777653/series-expansion-fourier-legendre-->

[sketch-boat]: http://sketchtoy.com/68231806
[sketch-plane]: http://sketchtoy.com/68231810
[sketch-truck]: http://sketchtoy.com/68231812
[quickdraw]: https://quickdraw.withgoogle.com/
[quickdraw-circle]: https://qz.com/994486/the-way-you-draw-circles-says-a-lot-about-you/
[quickdraw-magenta]: https://github.com/tensorflow/magenta/blob/master/magenta/models/sketch_rnn/sketch_rnn.ipynb
[draw]: https://github.com/ericjang/draw
[draw-post]: http://blog.evjang.com/2016/06/understanding-and-implementing.html
[draw-paper]: https://arxiv.org/pdf/1502.04623.pdf
[quickdraw-data]: https://console.cloud.google.com/storage/browser/quickdraw_dataset/full/numpy_bitmap
[quickdraw-windmill]: https://quickdraw.withgoogle.com/data/windmill
[quickdraw-whale]: https://quickdraw.withgoogle.com/data/whale
[quickdraw-apple]: https://quickdraw.withgoogle.com/data/apple
[quickdraw-coffee_cup]: https://quickdraw.withgoogle.com/data/coffee_cup
[quickdraw-gifs]: https://github.com/Maytide/Quickdraw-Gifs