---
title: Image as a cursor
tags: visual, beginner
---

Use an image as a cursor.

- Use `cursor` property to change cursor.
- Set `cursor` property to the url of image.

```html
<div class="cursor">Hover Me!</div>
```

```css
.cursor {
  cursor: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png'),
    auto;
  padding: 4px 8px;
  background-color: pink;
  width: fit-content;
}
```
