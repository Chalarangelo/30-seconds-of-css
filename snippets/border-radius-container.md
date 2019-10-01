---
title: Border radius container
tags: visual, beginner
---

Creates a bouncing loader animation.

```html
<div class="container">
  <div class="content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna ipsum, suscipit in odio sit amet, feugiat dignissim tellus.
    </p>
  </div>
</div>
```

```css
.container {
  background: tomato;
  border-radius: 5px;
  border: 1px solid transparent;
  overflow: hidden; //prevent the bleed through.
}

.content {
  padding: 10px;
  background: hotpink;
}

```

#### Explanation

1. Set a `border-radius: 5px` on container 
2. `padding: 10px` on the content will expend the content box
3. `overflow: hidden` will cover the `padding` in order to show the `border-radius: 5px` on the `.container`

#### Browser support
Requires prefixes for full support.
- https://caniuse.com/#search=border-radius
- https://caniuse.com/#search=overflow
