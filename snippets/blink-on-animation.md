---
title: Blink on animation
tags: animation,beginner
---

Gives turn-on effect after blinking several times

- Works best at duration between 4s~8s.
- Avoid using ease-in-out for timing function for best performance. Other animation functions works fine.
- Ease-out fits the best.

```html
<div class="blinkOn">Text or Image</div>
```

```css
.blinkOn{
  animation: 5s blinkingOn ease-out;
}

@keyframes blinkingOn {
  0% {
    opacity: 0;
  }
  26% {
    opacity: 0;
  }
  26.3% {
    opacity: 1;
  }
  26.6% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  40.3% {
    opacity: 0.5;
  }
  40.6% {
    opacity: 0;
  }
  41% {
    opacity: 0.5;
  }
  42% {
    opacity: 0;
  }
  43% {
    opacity: 0;
  }
  44% {
    opacity: 0.5;
  }
  45% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  61% {
    opacity: 0.5;
  }
  68% {
    opacity: 0;
  }
  78% {
    opacity: 0;
  }
  95% {
    opacity: 1;
  }
}
```
