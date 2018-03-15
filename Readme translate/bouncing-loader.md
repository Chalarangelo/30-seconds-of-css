### Tạo loader nhấp nhô

Tạo hiệu ứng loader nhấp nhô

#### HTML

```html
<div class="bouncing-loader">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
@keyframes bouncing-loader {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
}
.bouncing-loader {
  display: flex;
  justify-content: center;
}
.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}
.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__bouncing-loader">
  	<div></div>
    <div></div>
    <div></div>
  </div>
</div>

<style>
@keyframes bouncing-loader {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
}
.snippet-demo__bouncing-loader {
  display: flex;
  justify-content: center;
}
.snippet-demo__bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}
.snippet-demo__bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
.snippet-demo__bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
</style>

#### Giải thích

Chú ý: thông thường `1rem` bằng `16px`.

1. `@keyframes` quy định 1 hiệu ứng gồm 2 trạng thái, một là khi element thay đổi giá trị `opacity` và di chuyển lên trên sử dụng `transform: translateY()`.

2. `.bouncing-loader` là container cha bao ngoài các hình tròn, có sử dụng `display: flex` và `justify-content: center` để sắp xếp các hình tròn chính giữa. 

3. `.bouncing-loader > div`, là 3 thẻ `div` con sẽ được gán style. Các thẻ `div` được gán giá trị width và height là `1rem`, sử dụng `border-radius: 50%` để biến đổi chúng từ hình vuông sang hình tròn.

4. `margin: 3rem 0.2rem` thiêt lập mỗi vòng tròn sẽ có giá trị margin top/margin bottom là `3rem` và margin left/ margin right có giá trị là `0.2rem`, do đó ta không càn phải thiết lập giá trị cho từng vòng tròn một


4. `margin: 3rem 0.2rem` specifies that each circle has a top/bottom margin of `3rem` and left/right margin
   of `0.2rem` so that they do not directly touch each other, giving them some breathing room.

5. `animation` là một thuộc tính dạng rút gọn của các thuộc tính animation được sử dụng: `animation-name`, `animation-duration`, `animation-iteration-count`, `animation-direction`  

6. `nth-child(n)` chỉ tới các element mà nó là thành phần con thứ n của thành phần cha chứa nó.

7. `animation-delay` được áp dụng tuần tự trên thẻ `div` thứ 2 và thứ 3 nên 2 thẻ div này sẽ không bắt đầu hiệu ứng cùng lúc. 

#### Hỗ trợ trình duyệt

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css-animation

<!-- tags: animation -->


