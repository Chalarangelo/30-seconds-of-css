---
title: Four section split screen
tags: layout
---

Use the float command to accurately place div spacing the 4 sections on the screen. 

```html
<div class="container">
  <div id="topLeft">Div1</div>
  <div id="topRight">Div2</div>
  <div id="bottomLeft">Div3</div>
  <div id="bottomRight">Div4</div>
</div>
```

```css
html,
body {
  margin: 0;
  padding: 0;
}

.container {
  height: 300px;
  width: 100%;
}

#topLeft, #topRight, #bottomLeft, #bottomRight {   
  width: 50%; 
  height: 50%; 
  float: left; 
  text-align: center; 
}

#topLeft { background: #FDFEFE; }
#topRight { background: #CD5C5C; }
#bottomLeft { background: #424949; }
#bottomRight { background: #17202A; }

```

#### Explanation

1. `height: 300px` sets a specific height for the container. Can be changed to height: vh; to have the container span the entire window. 
2. `width: 50%, height: 50%` sets each div size to be 1/4th of the container height and width. Can be changed to width 25% to have 4 section split in a row. 
3. `float: left` floats div to the left. Elements after the floats (div3 and div4) will flow around it (What makes it go under the first two divs).


#### Browser support

<span class="snippet__support-note"> Support unknown for Opera Mini, UC Browser for Android, Samsung Internet (pre 9.2), QQ Browser, Baidu Browser, and KaiOS Browser. </span>

- https://www.caniuse.com/#feat=mdn-css_properties_float
