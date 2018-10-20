### :not selector

You can filter selected elements with multiple `:not` pseudo selectors.

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li class="exclude">Three</li>
  <li>Four</li>
</ul>
```

#### CSS

```css
li:not(:last-child):not(.exclude) {
  background: #0ff;
}
```

#### Explanation

`li:not(:last-child):not(.exclude)` specifies that the styles should apply to all `li` elements except
the `:last-child` or `.exclude` applied.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

- https://caniuse.com/#feat=css-sel3

<!-- tags: visual -->
