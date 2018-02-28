### Parallax

Background-image with scroll parallax.


#### HTML

```html
<div class="hero"></div>
```

#### CSS

```css
.hero {
  width: 100%;
  height: 200px;
  background-image: url(https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
}
```

#### Demo

<div class="snippet-demo">
<div class="hero"></div>
</div>

<style>
.hero {
  width: 100%;
  height: 200px;
  background-image: url(https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
}
</style>

#### Explanation

1. Defined `background-attachment` with `fixed`

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=background-attachment