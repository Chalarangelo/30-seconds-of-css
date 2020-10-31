---
title: Custom scrollbar
tags: visual,advanced
---

Customizes the scrollbar style for the document and elements with scrollable overflow, on WebKit platforms.

- `::-webkit-scrollbar` targets the whole scrollbar element.
- `::-webkit-scrollbar-track` targets only the scrollbar track.
- `::-webkit-scrollbar-thumb` targets the scrollbar thumb.
- Apply the same selectors and styles without `.custom-scrollbar` to style the document scrollbar.
- Scrollbar styling doesn't appear to be on any standards track. There are many other pseudo-elements that you can use to style scrollbars. For more info, visit the [WebKit Blog](https://webkit.org/blog/363/styling-scrollbars/).

Gecko platform browsers(Firefox) follow the [CSS Scrollbar Level 1](https://drafts.csswg.org/css-scrollbars-1) specification(currently in draft) and provide 2 properties for customizing the scrollbar:

- `scrollbar-width` sets scrollbar width, `auto`, `thin` or `none`.
- `scrollbar-color` sets the color of the scrollbar track and thumb.

 For more info, visit the MDN page [CSS Scrollbars](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars).

```html
<div class="custom-scrollbar">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
    Iure id exercitationem nulla qui repellat laborum vitae, <br />
    molestias tempora velit natus. Quas, assumenda nisi. <br />
    Quisquam enim qui iure, consequatur velit sit?
  </p>
</div>
```

```css
.custom-scrollbar {
  height: 70px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #1E3F20 #4A7856;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1E3F20;
  border-radius: 12px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #4A7856;
  border-radius: 12px;
}
```
