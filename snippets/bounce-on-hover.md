---
title: Bounce on Hover
tags: animation,beginner
firstSeen: 2021-07-13T05:00:00-04:00
---

Creates a bouncy animation on hover.

- Use of `@keyframes` to make the bounce animation. Where `scale` & `translateY` are used to transform the object which has to act like it's bouncing on hover.
- `:hover` selector is used on the `bounce` class, on hover the bounce class is given animation name `bounce` and a animation delay of `0.8s`.

```html
<div>
  <img class="bounce" src="https://picsum.photos/200"/>
</div>
```

```css
@keyframes bounce{
   0% {
        transform: scale(1, 1) translateY(0);
    }

    10% {
        transform: scale(1.2, .8) translateY(0);
    }

    30% {
        transform: scale(0.8, 1.2) translateY(-50px);
    }

    50% {
        transform: scale(1, 1) translateY(0);
    }

    100% {
        transform: scale(1, 1) translateY(0);
    }
}
.bounce{
  margin : 2rem;
}
.bounce:hover{
  animation : bounce 0.8s;
}
```