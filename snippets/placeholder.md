### Change placeholder

Change the style of placeholder.

#### HTML

```html
<input type="text" name="" placeholder="hello">
```

#### CSS

```css
input {
	padding: 10px;
}
input::-webkit-input-placeholder{
    color: blue;
    font-size: 20px;
}
input::-moz-placeholder{   
    color: blue;
    font-size: 20px;
}
input:-moz-placeholder{   
    color: blue;
    font-size: 20px;
}
input:-ms-input-placeholder{  
    color: blue;
    font-size: 20px;
}
```

#### Demo

<div class="snippet-demo">
  <input type="text" name="" placeholder="hello">
</div>

<style>
input {
	padding: 10px;
}
input::placeholder{
    color: blue;
    font-size: 20px;
}
</style>


#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#search=%3A%3Aplaceholder
