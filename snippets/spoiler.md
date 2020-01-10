---
title: Spoiler Alert
tags: other,intermediate
---

Creates a spoiler alert using pure HTML and CSS.

```html
<a href="#spoiler-open-1" id="spoiler-open-1" class="spoiler-trigger open">Open spoiler 1</a>
<a href="#spoiler-close-1" id="spoiler-close-1" class="spoiler-trigger close">Close spoiler 1</a>
<div class="spoiler-content">
  Showing what's inside 1!
</div>

<a href="#spoiler-open-2" id="spoiler-open-2" class="spoiler-trigger open">Open spoiler 2</a>
<a href="#spoiler-close-2" id="spoiler-close-2" class="spoiler-trigger close">Close spoiler 2</a>
<div class="spoiler-content">
  Showing what's inside 2!
</div>
```

```css
/* Functional code */
.spoiler-content,
.spoiler-trigger.close,
.spoiler-trigger.open:target {
  display: none;
}

.spoiler-trigger.open:target+.spoiler-trigger.close,
.spoiler-trigger.open:target+.spoiler-trigger.close+.spoiler-content {
  display: block;
}


/* Design enhancements, just to make it look a bit better */
body {
  font-family: sans-serif; /* Firefox defaults to serif */
}

.spoiler-trigger, .spoiler-content {
  margin: 1em 0;
}

.spoiler-trigger {
  color: royalblue;
  text-decoration: none;
  display: block;
}
```

#### Explanation

- `a.spoiler-trigger` has `display: block` to make sure it functions as a block-level element and behaves like a button instead of inline text.
- By default, `a.spoiler-trigger.close` and `.spoiler-content` are hidden.
- Once you click on the trigger `a.spoiler-trigger.open`, it becomes a `:target` 
-  `a.spoiler-trigger.open:target` makes `a.spoiler-trigger.close` and `.spoiler-content` visible.
- Clicking on `.spoiler-trigger.close` sets the target to a different element, thus resets the appearance to the initial state again.

#### Browser support

- https://www.caniuse.com/#feat=mdn-css_selectors_adjacent_sibling
- https://www.caniuse.com/#feat=mdn-css_selectors_target
