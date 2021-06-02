---
title: Blink off animation
tags: animation,beginner
---

Gives turn-off effect after blinking several times

- Works best at duration between 4s~8s.
- Avoid using ease-in-out for timing function for best performance. Other animation functions works fine.
- Ease-out fits the best.

```html
<div class="blinkOff">Text or Image</div>
```

```css
.blinkOff{
  animation: 5s blinkingOff ease-out;
}

@keyframes blinkingOff {
  0% {
    opacity: 1;
  }
  26% {
    opacity: 1;
  }
  26.3% {
    opacity: 0.2;
  }
  26.6% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  40.3% {
    opacity: 0.2;
  }
  40.6% {
    opacity: 1;
  }
  41% {
    opacity: 0.2;
  }
  42% {
    opacity: 0.7;
  }
  43% {
    opacity: 0.7;
  }
  44% {
    opacity: 0;
  }
  45% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  61% {
    opacity: 0.8;
  }
  63% {
    opacity: 0.2;
  }
  65% {
    opacity: 0.8;
  }
  80%{
    opacity: 0.8;
  }
  98%{
    opacity: 0.1;
  }
  99.5%{
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
```
