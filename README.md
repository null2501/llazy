# Minimal LazyLoad $llazy
Yet Another Minimal LazyLoad

Supports: IntersectionObserver, src, srcset, CSS background and vintage browsers fallback.

1KB- minified.

Pen: https://codepen.io/null2501/pen/jOEzmbe

Example:

&lt;img src="dummy.png" class="llazy" data-src="real_image.jpg"&gt;

&lt;div class="llazy" data-bg="real_image.jpg"&gt;&lt;/div&gt;

&lt;img src="dummy.png" class="llazy" data-srcset="real_image_320.jpg 320w, real_image_480.jpg 480w"&gt;

&lt;script src="llazy.min.js" async&gt;&lt;/script&gt;


Public methods:

$llazy.update(elm) - searches the document for new images to manage (or inside elm, if specified)

$llazy.load(elm) - explicitly processes/loads the specified element
