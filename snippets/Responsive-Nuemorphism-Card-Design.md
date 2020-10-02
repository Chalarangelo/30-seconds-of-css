---
title: Responsive Nuemorphism Card Design
tags: interactivity,layout
---

Creates an awesome nuemorphism effect with cool interactivity to the users. 

- Uses `display: flex` property along with `justify-content: center; align-items: center;` to make the snippet responsive.
- Creates Nuemorphism effect by using nuemorphism colors like `rgba(255, 255, 255, 0.1)` or `rgba(0, 0, 0, 0.6)` and using nuemorphism shadows. 
- Uses `:hover` pseudo-selector to make the transitions and interactivity.

```html
<div class="cont flex">
    <div class="container flex">
        <div class="card">
            <div class="box flex">
                <div class="content">
                    <h2>01</h2>
                    <h3>Card Title</h3>
                    <p>Lorem ipsum dolor sit amet constetur, adipisicing elit. Soluta, atque!</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
</div>
```

```css
.cont {
  height: 100vh;
  width: 100%;
  font-family: "Comic Sans MS", cursive, sans-serif;
  background: #232427;
  color: #fff;
  text-align: center;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  position: relative;
  padding: 210px 150px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
}
.box {
  position: absolute;
  transition: 0.5s;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #2a2b2f;
}
.box:hover {
  transform: translateY(-50px);
}
h2 {
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 8rem;
  color: #ffffff1a;
}
h3 {
  font-size: 1.8rem;
  margin-bottom: -10px;
}
a {
  padding: 8px 20px;
  background: #fff;
  text-decoration: none;
  border-radius: 5px;
}
```
