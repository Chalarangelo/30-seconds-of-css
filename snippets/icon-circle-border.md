### Icon Circle Border animation

Creates a border animation on hover.

#### HTML

```html
<a href="#" class="button ion-ios-home-outline"></a>
```

#### CSS

```css
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
.button {
  position: relative;
  font-size: 40px;
  color: #e6e6e6;
  width: 75px;
  margin: 40px;
  height: 75px;
  line-height: 75px;
  display: inline-block;
  text-align: center;
  -webkit-perspective: 50em;
  perspective: 50em;
  text-decoration: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.button:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 2px solid #e6e6e6;
  content: '';
  z-index: -1;
  border-radius: 50%;
}
.button:before {
  color: #fff;
}
.button:before,
.button:after {
  -webkit-transition: all 0.45s ease-in-out;
  transition: all 0.45s ease-in-out;
}
.button:hover,
.button:active,
.button.hover {
  color: #c0392b;
}
.button:hover:after,
.button:active:after,
.button.hover:after {
  border-color: transparent #c0392b;
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
```

#### Demo

#### Explanation

This effect is uses before and after selectors to make the border full width on hover.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

<!-- tags: visual, interactivity -->
<!-- date: 2018-10-30 -->
