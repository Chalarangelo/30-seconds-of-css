### Back to top button

Creates a button to scroll on top of the page

### HTML 
```html
<div class="back-to-top">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10v8h6v-8h5l-8-8-8 8h5z" /></svg>
</div>
```

### CSS

```css
.back-to-top {
  position: fixed;
  bottom: 10px; 
  right: 10px;
  background: #333;
  cursor: pointer;
  padding: 1rem;
}
```

### JAVASCRIPT

```javascript
document.getElementsByClassName('back-to-top')[0].addEventListener('click', function() {
  window.scrollTo(0, 0);
});
```

#### Demo

<div class="back-to-top">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10v8h6v-8h5l-8-8-8 8h5z" /></svg>
</div>

<style>
.back-to-top {
  position: fixed;
  bottom: 10px; 
  right: 10px;
  background: #333;
  cursor: pointer;
  padding: 1rem;
}
</style>

<script>
(function () {
  document.getElementsByClassName('back-to-top')[0].addEventListener('click', function() {
    window.scrollTo(0, 0);
  });
})()
</script>

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>