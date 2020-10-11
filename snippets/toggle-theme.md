---
title: Switch Theme
tags: variables,intermediate
---

Toggle the entire theme of the web page.

- Uses element-scoped CSS variables.
- Uses JavaScript to toggle classes.

```html
<div class="container">
  <button class="item" onclick="toggle()">Toggle</button>
</div>
```

```css
:root {
  --color-background: #cccccc;
  --color-item-background: #eeeeee;
  --color-text: #202020;
}

.dark {
  --color-background: #202020;
  --color-item-background: #2e2e2e;
  --color-text: #ffffff;
}

* {
  margin: 0;
}

.container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
}

.item {
  width: 200px;
  height: 50px;
  border: none;
  color: var(--color-text);
  background-color: var(--color-item-background);
}

.item:focus {
  outline: none;
}
```

```js
function toggle(){
  document.body.classList.toggle("dark");
}
```
