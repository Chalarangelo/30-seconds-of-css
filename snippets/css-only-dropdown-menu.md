---
title: css-only-dropdown-menu
tags: Layout,intermediate
---

A css only lightweight, dropdown menu.

- Position the dropdown relative as an anchor point for the dropdown menu.
- Position the dropdown menu absolute, **top: 100%** relative to the dropdown to appear directly below it.
- The dropwdown menu display should be **none** and **block** on hover.

```html
<div class="dropdown">
  <button class="menu-hover">Menu</button>
  <div class="dropdown-menu">
    <a href="#">Item 1</a>
    <a href="#">Item 2</a>
    <a href="#">Item 3</a>
    <a href="#">Item 4</a>
  </div>
</div>
```

```css
.dropdown {
  position: relative;
  display: inline-block;
  z-index: 1;
}

.menu-hover {
  display: inline-block;
  padding: 10px;
  border: none;
  background: #eee;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  display: none;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: #a9a9a9;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu a {
  display: block;
  padding: 10px;
  text-decoration: none;
  border: none;
  border-top: dotted 1px #fff
  color: #3d405b;
}

.dropdown-menu a:hover {
  background: #264653;
  color: #fff;
}
```

