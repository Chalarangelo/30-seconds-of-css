---
title: Text 3d
tags: Visual, Beginner
---

# Displays a text with a 3d effect, fully CSS-generated.

```html
<h1 class="text-3d">Sample Text</h1>
<h2 class="text-3d">Sample Text</h2>
<h2 class="text-3d">Sample Text</h2>
<h3 class="text-3d">Sample Text</h3>
<h4 class="text-3d">Sample Text</h4>
<h5 class="text-3d">Sample Text</h5>
<h6 class="text-3d">Sample Text</h6>
<p class="text-3d">Sample Text</p>
<pre class="text-3d">Sample Text</pre>
```

```css
.text-3d {
  --shadow-color: #444;
  font-family: comic sans MS;
  color: #eee;
  font-style: italic;
  letter-spacing: 2px;
  transform: rotate(-5deg);
  text-shadow: 0 0 5px var(--shadow-color),
               1px 1px var(--shadow-color),
               2px 2px var(--shadow-color),
               3px 3px var(--shadow-color),
               4px 4px var(--shadow-color),
               5px 5px var(--shadow-color),
               6px 6px var(--shadow-color),
               7px 7px var(--shadow-color),
               8px 8px var(--shadow-color),
               9px 9px var(--shadow-color),
               10px 10px var(--shadow-color);
}
```

#### Explanation

- Use any text tag, like `h1`, `h5`, `p`, `pre`, etc with the class `text-3d`.
- Change the color of the shadow by changing the property `--shadow-color`.
- Change the rotation degrees with the property `transform: rotate()`.


#### Browser support

- https://caniuse.com/#feat=css-textshadow
- https://caniuse.com/#feat=css-transitions
- https://caniuse.com/#feat=css-variables