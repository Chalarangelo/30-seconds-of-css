### Position image

Position and change size of image from an `<img>` tag

#### HTML

```html
<img class="image image-contain" src="https://picsum.photos/600/200">
<img class="image image-cover" src="https://picsum.photos/600/200">
```

#### CSS

```css
.image {
	background: #34495e;
	border: 1px solid #34495e;
	width: 200px;
	height: 200px;
}

.image-contain {
	object-fit: contain;
	object-position: center;
}

.image-cover {
	object-fit: cover;
	object-position: right top;
}
```

#### Demo

#### Explanation

- Use `object-fit:` `contain` (to fit, respecting aspect ratio), `cover` (to fill, respecting aspect ratio) or `fill` (to fill, ignoring aspect ratio).
- Use `object-position:` `[value for x] [value for y]`. Percentage, `top`, `left`, `bottom`, `right` and `center` are accepted.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

- https://caniuse.com/#feat=object-fit

<!-- tags: visual -->
