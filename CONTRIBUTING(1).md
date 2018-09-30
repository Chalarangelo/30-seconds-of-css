### Snippet name

Image hover name and link to it

#### HTML

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<a href="https://images4.alphacoders.com/876/876898.jpg">
<img border="0" alt="Sky" src="src/img/sky.jpg" width="100" height="100" class="image">

<div class="container">
<a href="https://images4.alphacoders.com/876/876898.jpg">
  <img src="src/img/sky.jpg" alt="Sky" class="image" style="width:100%">
  <div class="middle">
    <div class="text"><a href="https://images4.alphacoders.com/876/876898.jpg">Sky</div>
  </div>
</div>
```

#### CSS

```css

```

#### Demo

<!-- You must create a `snippet-demo` parent block and use it as a namespace with BEM syntax. -->

<div class="snippet-demo">
  <some-element class="snippet-demo__snippet-name"></some-element>
</div>

<!-- Add your style rules here. -->

<style>
.container {
    position: relative;
    width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
</style>

#### Explanation

<!-- Use a step-by-step (ordered) list if possible. Keep it concise. -->
<h4>In this example, we create a image with the link inside which also hover the name of the image and lead to the website of the image that can be downloaded.</h4>
#### Browser support

<!-- Use the checkmark or the warning emoji, see the existing snippets. -->

<span class="snippet__support-note">✅ No caveats.</span>

<!-- Whenever possible, link a `caniuse` feature which allows the browser support percentage to be displayed.
If no link is provided, it defaults to 99+%. -->

* https://caniuse.com/#feat=some-feature

<!-- tags: (separate each by a comma) -->
