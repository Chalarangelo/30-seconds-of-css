---
title: Grid Template Areas
tags: grid,layout,intermediate
---

Create a grid of items by assigning each item to a specific area.

- Use `grid-template-rows` & `grid-template-columns` to determine the number of rows and columns inside your grid
- Use `grid-template-areas` to create template names of each area where the div will go
- Example `grid-template-areas: "one two" "three four"` displays a layout of two rows and two columns where `"one two"` represents row 1 and `"one" "three"` represents column 1
- Assign divs to each area with `grid-area` and place them using the template names as the value

```html
<div class="grid-container">
	<div class="one"></div>
	<div class="two"></div>
	<div class="three"></div>
	<div class="four"></div>
</div>
```

```css
.grid-container {
	display: grid;
	grid-template-rows: 300px 300px;
	grid-template-columns: 300px 300px;
	grid-template-areas:
		"one two"
		"three four";
}

.one {
	grid-area: one;
}

.two {
	grid-area: two;
}

.three {
	grid-area: three;
}

.four {
	grid-area: four;
}
```
