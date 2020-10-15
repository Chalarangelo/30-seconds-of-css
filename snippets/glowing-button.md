---
title: Glowing button
tags: button,beginner
---

Add glow to a button on hover (and can be extended to other elements as well!)

- The glow effect can be created by `box-shadow` property.
- The box-shadow's first 2 properties should be 0 since we want the shadow to be centered and not offsetted.
- The third property is the blur radius which creates the "glow". The fourth property is the color of the shadow.

```html
<div class="root">
  <button class="btn">Hover to see the change</button>
</div>
```

```css
.btn{
  background: inherit;
  border: 1px solid #27fb6b;
  padding: 7px 14px;
  color: #27fb6b;
}

.btn:hover{
  background-color: #27fb6b;
  color: #000;
  box-shadow: 0 0 50px #27fb6b; /* this creates the glow effect */
}

.root{
  background: #1f2b3b;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
