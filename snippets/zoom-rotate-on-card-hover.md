---
title: Card Image zoom & Rotate on hover
tags: animation,beginner
firstSeen: 2021-08-14T05:00:00-04:00
---

Creates a basic zoom & rotate animation on hover over the card.

- In this snnipet `hover` selector is used only on the card elements with `rotate-zoom-hover`. Where `scale` & `rotate` are used to transform the card image to zoom out and rotate at an angle of 10 degrees.
- The container which wraps the image `img-section` is given `overflow: hidden` to prevent the image borders poping out of the card on hovering.

```html
<div class="card rotate-zoom-hover">
  <div class="img-section">
    <img src="https://picsum.photos/200" />
  </div>
  <div class="card-details">
    <h3>Card Title</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime debitis
      commodi, distinctio beatae fuga sapiente blanditiis veniam dolorum sit
      doloremque quos eveniet corrupti ipsum harum ratione minus odio totam
      minima.
    </p>
  </div>
</div>
```

```css
.card {
  font-family: sans-serif;
  width: 15rem;
  padding: 1.2rem;
  background: rgba(10, 34, 20, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}
.card img {
  transition: ease-in-out 0.4s;
  width: 100%;
}
.card .img-section {
  overflow: hidden;
  border-radius: 15px;
}
.card.rotate-zoom-hover:hover img {
  transform: scale(1.3) rotate(10deg);
}
```
