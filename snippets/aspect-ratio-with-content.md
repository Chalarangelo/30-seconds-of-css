### Keep aspect ratio

Responsive aspect ratio based on element width.

#### HTML

```html
<div class="item">
    <div class="aspect-ratio aspect-ratio--1-1">
        <div class="aspect-ratio__content">1:1</div>
    </div>
</div>
<div class="item">
    <div class="aspect-ratio aspect-ratio--4-3">
        <div class="aspect-ratio__content">4:3</div>
    </div>
</div>
<div class="item">
    <div class="aspect-ratio aspect-ratio--16-9">
        <div class="aspect-ratio__content">16:9</div>
    </div>
</div>
<div class="item">
    <div class="aspect-ratio aspect-ratio--9-16">
        <div class="aspect-ratio__content">9:16</div>
    </div>
</div>
```

#### CSS

```css
.item {
    width: 25%;
    float: left;
}

.aspect-ratio {
    position: relative;
}

.aspect-ratio--1-1 {
    padding-top: 100%;
    background: #0ff;
}

.aspect-ratio--4-3 {
    padding-top: 75%;
    background: #f0f;
}

.aspect-ratio--16-9 {
    padding-top: 56.25%;
    background: #ff0;
}

.aspect-ratio--9-16 {
    padding-top: 177.77778%;
    background: #f00;
}

.aspect-ratio__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

#### Demo

#### Explanation

Padding-top value will be calculated from width of element.  

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

<!-- tags: layout -->