### Sibling fade

Fade out siblings around a hovered item

#### HTML

```html
<div class="sibling-fade">
    <a href="#">Lorem</a>
    <a href="#">Dolor</a>
    <a href="#">Repellat</a>
</div>
```

#### CSS

```css
    html { display: flex; height: 100%; }
    body {
        background: #f05555;
        padding: 10px;
        max-width: 40em;
        margin: auto;
    }

    .sibling-fade {
        display: flex;
        flex-wrap: wrap;
    }

    .sibling-fade > * {
        background: white;
        padding: 1em;
        flex: auto;
        margin: 0.3em;
        text-align: center;
        color: #f05555;
        font-size: 1.5em;
        text-decoration: none;
    }

    .sibling-fade { visibility: hidden; }
    .sibling-fade > * { visibility: visible; }
    .sibling-fade > * { transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms; }
    .sibling-fade:hover > * { opacity: 0.4; transform: scale(0.9); }
    .sibling-fade > *:hover { opacity: 1; transform: scale(1); transition-delay: 0ms, 0ms; }
```

#### Demo

#### Explanation

1. `.sibling-fade { visibility: hidden; }` Prevents :hover from triggering in the gaps between items.
2. `.sibling-fade > * { visibility: visible; }` Brings the child items back in, even though the parent is hidden.
3. `.sibling-fade > * { transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms; }` Makes the fades smooth with a slight delay to prevent jumps as the mouse moves between items.
4. `.sibling-fade:hover > * { opacity: 0.4; transform: scale(0.9); }` Fade out all items when the parent is hovered.
5. `.sibling-fade > *:hover { opacity: 1; transform: scale(1); transition-delay: 0ms, 0ms; }` Fade in the currently hovered item.

#### Browser support

#### Made by: @shshaw

