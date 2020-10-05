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
<div class="center grid-container">
	<div class="one">Div One</div>
	<div class="two">Div Two</div>
	<div class="three">Div Three</div>
	<div class="four">Div Four</div>
</div>
```

```css
.center {
	position: absolute;
	margin: auto;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

.grid-container div {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	width: 100%;
}

.grid-container {
	display: grid;
	height: 300px;
	width: 500px;
	gap: 10px 10px;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas:
		"one two four"
		"one three four";
}

.one {
	grid-area: one;
	background-color: #ff006e;
}

.two {
	grid-area: two;
	background-color: #3a86ff;
}

.three {
	grid-area: three;
	background-color: #8338ec;
}

.four {
	grid-area: four;
	background-color: #fb5607;
}
```
