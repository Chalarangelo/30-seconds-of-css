---
title: Description box and positioning
tags: visual,beginner
---

Creates a description box and set its position relate to the container height

#### HTML

```html
<div class="container">
  <img class="image" src="http://placekitten.com/g/500/700" />
  <div class="description">description box</div>
</div>
```

```css
.container {
  width: 300px;
  height: 400px;
  border: 1px solid #000;
  overflow: hidden;
  position: relative;
}

.image {
  position: static;
}

.description {
  background: rgba(94, 94, 94, 0.5);
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px;
  color: #fff;
}
```

#### Explanation

- set `position: absolute` to description box to off flow
- set `position: static;` to .image. it avoids overflow issues
- set `position: relative;` to .container to make the `.description` relate to the container height

#### Browser support
