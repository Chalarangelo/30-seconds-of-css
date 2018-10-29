### Zebra Striped List

Creates a zebra striped style.

#### HTML

```html
<ul>
  <li>Item 01</li>
  <li>Item 02</li>
  <li>Item 03</li>
  <li>Item 04</li>
  <li>Item 05</li>
</ul>
```

#### CSS

```css
li:nth-child(odd) {
  background-color: #eee;
}
```

#### Demo


#### Explanation

1. Use `:nth-child(odd)` or `:nth-child(even)` CSS pseudo-class to apply different background color that match elements based on their position in a group of siblings.

Note that you can use it to apply different styles to other HTML elements like div, tr, p, ol, etc.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

https://caniuse.com/#feat=css-sel3

<!-- tags: visual -->