---
title: underline-animation
tags: visual,interactivity,beginner
---

Adds a smooth underline animation to any element with CSS only.

- Use `position: relative` on the element to be animated, so that the underline can be positioned `absolute`.
- Use the psuedo-element `::before` to create the line.
- Give the psuedo-element full width as its parent and a little height (3px in this case) and add a transition to make the animation smooth.
- Use `transform` property to `scale` the underline to 0 in the x-direction.
- Use the psuedo-class `:hover` to scale the underline back to its original size when the parent is hovered.

```html
<div class="underline-animation"></div>
```

```css
div{
  width: 80px;
  height: 35px;
  background-color: rgb(5, 102, 60);
  border-radius: 5px;
  margin: 0 auto;
}

.underline-animation {
  position: relative;
}

.underline-animation::before{
  position: absolute;
  content: '';
  width: 100%;
  height: 3px;
  background-color: inherit;
  top: calc( 100% + 2px );
  border-radius: inherit;
  transition: transform 250ms ease-in-out;
  transform: scaleX(0);
}

.underline-animation:hover::before{
  transform: scaleX(1);
}
```