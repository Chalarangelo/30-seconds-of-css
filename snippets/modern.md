---
title: Classic Holy Grail Layout
tags: layout,beginner
---

Create a quick template  

- Use `display: grid` generates a block-level grid.
- Use `grid-template: auto 1fr auto / auto 1fr auto` = grid-template-rows/grid-template-columns.
- Use `grid-column`  is the line where the item begins, the line where the item ends.

```html
<div class="parent">
    <header>Header</header>
    <div class="left-sidebar" >Left Sidebar</div>
    <main>Content</main>
    <div class="right-sidebar">Right Sidebar</div>
    <footer>Footer</footer>
</div>
  
```

```css
.parent {
    display: grid;
    height: 100vh;
    grid-template: auto 1fr auto / auto 1fr auto;
}
  
header {
    background: lightpink;
    padding: 2rem;
    grid-column: 1 / 4;
}

.left-sidebar {
    background: lightblue;
    grid-column: 1 / 2;
}

main {
    background: coral;
    grid-column: 2 / 3;
}
.right-sidebar {
    background: yellow;
    grid-column: 3 / 4;
  }

footer {
    background: wheat;
    padding: 2rem;
    text-align: center;
    grid-column: 1 / 4;
}
```

