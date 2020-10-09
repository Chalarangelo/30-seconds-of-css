---
title: countdown
tags: counter,beginner
---

This snippet countdown `days`, `hours`, `minutes` and `seconds`, untill the specified `date`.

- Replace the `finalDate` with the `date` that you want to countdown.
- The `<p>` tag will show the countdown on screen, when ends it will print `OVER`

```html
<p id="countdown"></p>
```

```css
p {
  text-align: center;
  font-size: 5rem;
}
```

```js
const finalDate = new Date("Oct 5, 2021 10:00:00").getTime();

const reset = setInterval(() =>{  
  const currentDate = new Date().getTime();
  const difference = finalDate - currentDate;
    
  
  const days = Math.floor(difference / (1000 * 3600 * 24));
  const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));
  const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
    
  if (difference < 0) {
    clearInterval(reset);
    document.getElementById("countdown").innerHTML = "OVER";
  }
}, 1000);
```