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

### Rest Box-sizing

Thiết lập lại box-model để các thông số `width` và `height` không bị chịu tác động của `border` và `padding`

#### CSS

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__box-sizing-reset">Demo</div>
</div>

<style>
.snippet-demo__box-sizing-reset {
  box-sizing: border-box;
  width: 200px;
  padding: 1.5em;
  color: #7983ff;
  font-family: sans-serif;
  background-color: white;
  border: 5px solid;
}
</style>

#### Giải thích
1. `box-sizing: border-box` để khi thêm `padding` hay `border` sẽ không tác động đến `width` và `height` của element

2. `box-sizing: inherit` để tạo 1 element luôn tuân theo quy tác `box-sizing` của thành phần cha nó đã quy định.


#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css3-boxsizing

<!-- tags: layout -->

### Vòng tròn

Tạo hình tròn chỉ với CSS.

#### HTML

```html
<div class="circle"></div>
```

#### CSS

```css
.circle {
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #333;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__circle"></div>
</div>

<style>
.snippet-demo__circle {
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #333;
}
</style>

#### Explanation

`border-radius: 50%` làm cong border của 1 element để tạo ra vòng tròn.

Vì một vòng tròn có cùng giá trị radius tại bất kỳ điểm nào, nên `width` và `height` phải bằng nhau. Giá trị khác nhau sẽ tạo ra hình ellipse.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=border-radius

<!-- tags: visual -->

### Clearfix

Đảm bảo 1 element tự xóa các element con của nó.

###### Chú ý: Điều này chỉ hữu dụng khi ta vẫn sử dụng float để tạo layout. Hãy xem xét sử dụng một phương pháp hiện đại với flexbox layout hoặc grid layout.

#### HTML

```html
<div class="clearfix">
  <div class="floated">float a</div>
  <div class="floated">float b</div>
  <div class="floated">float c</div>
</div>
```

#### CSS

```css
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}

.floated {
  float: left;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__clearfix">
    <div class="snippet-demo__floated">float a</div>
    <div class="snippet-demo__floated">float b</div>
    <div class="snippet-demo__floated">float c</div>
  </div>
</div>

<style>
.snippet-demo__clearfix::after {
  content: '';
  display: block;
  clear: both;
}

.snippet-demo__floated {
  float: left;
}
</style>

#### Explanation

1. `.clearfix::after` khai báo một pseudo-element.

2. `content: ''` cho phép pseudo-element tác động tới layout

3. `clear: both` cho hay các cạnh trái, phải hoặc cả 2 cạnh của 1 element không thể được kề bên với các phần tử đã bị float trước đó trong cùng một định dạng khối.

#### Browser support

<span class="snippet__support-note">⚠️ 
Đối với snippet này để hoạt động đúng như ta muốn cần đảm báo rằng không có bất kỳ childrent nào không được float trong thành phần bao ngoài và cũng không floats theo chiều thẳng đứng trước khi thành phần bao ngoại bị clearfix nhưng trogn cùng một định dạng (ví du: các cột bị float).</span>

<!-- tags: layout -->

### Cố định tỉ lệ chiều dài và chiều rộng

Gán giá trị width cho 1 element thì nó sẽ thay đổi chiều cao tương ứng để thích hợp (ví dụ: tỉ lệ chiều dài và chiều rộng sẽ giữ nguyên).

#### HTML

```html
<div class="constant-width-to-height-ratio"></div>
```

#### CSS

```css
.constant-width-to-height-ratio {
  background: #333;
  width: 50%;
}
.constant-width-to-height-ratio::before {
  content: '';
  display: block;
  padding-top: 100%;
  float: left;
}
.constant-width-to-height-ratio::after {
  content: '';
  display: block;
  clear: both;
}
```

#### Demo

Thay đổi kích thước cửa sổ browser để xem tỉ lệ không bị đổi

<div class="snippet-demo">
  <div class="snippet-demo__constant-width-to-height-ratio"></div>
</div>

<style>
.snippet-demo__constant-width-to-height-ratio {
  background: #333;
  width: 50%;
}
.snippet-demo__constant-width-to-height-ratio::before {
  content: '';
  display: block;
  padding-top: 100%;
  float: left;
}
.snippet-demo__constant-width-to-height-ratio::after {
  content: '';
  display: block;
  clear: both;
}
</style>

#### Explanation

`padding-top` trong pseudo-element `::before` làm cho height của element bằng với giá trị phần trăm của width. `100%` có nghĩa là height của element sẽ luôn bằng `100%` width, tạo 1 hình vuông có giãn theo tỉ lệ.

Phương pháp này cũng cho phép nội dung được đặt bên trong phần tử bình thường.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

<!-- tags: layout -->

### Bộ đếm

Các bộ đếm về bản chất là các biến được tạo bởi CSS mà các giá trị của nó có thể được tăng lên bởi các nguyên tắc CSS để theo dõi chúng được sử dụng bao nhiêu lần.

#### HTML

```html
<ul>
  <li>List item</li>
  <li>List item</li>
  <li>List item</li>
</ul>
```

#### CSS

```css
ul {
  counter-reset: counter;
}
li::before {
  counter-increment: counter;
  content: counters(counter, '.') ' ';
}
```

#### Demo

<div class="snippet-demo"> <div class="snippet-demo__countable-section"> <ul> <li>List item</li> <li>List item</li> <li> List item <ul> <li>List item</li> <li>List item</li> <li>List item</li> </ul> </li> </ul> </div> </div>

#### Explanation

Bạn có thể tạo 1 danh sách có thứ tự theo bất kỳ style HTML nào.

1. `counter-reset` khởi tạo 1 bộ đếm, giá trị chính là tên của bộ đếm. Mặc định, bộ đếm bắt đầu từ 0. Thuộc tính này có thể được sử dụng để thay đổi giá chị của nó thành bất kỳ giá trị cụ thể nào.

2. `counter-increment` được sử dụng trong element có thể đếm được. Một khi `counter-reset` được khởi tạo thì giá trị của 1 counter có thể bị tăng hoặc giảm đi.

3. `counter(name, style)` hiển thị giá trị của 1 bộ đếm thành phần. Nhìn chung được sử dụng trong 1 thuộc tính `content`. Function này có thể nhận 2 tham số, tham số thứ nhất là tên của counter và tham số thứ 2 có thể là `decimal` hoặc `upper-roman` (mặc định `decimal`).  

4. `counters(counter, string, style)` hiển thị giá trị của 1 bộ đếm thành phần. Nhìn chung,được sử dụng trong 1 thuộc tính `content`. Function này có thể nhận 3 tham số, tham số thứ nhất là tên của counter, tham số thứ 2 có thể là một string và đi theo sau counter và tham số thứ 3 có thể là `decimal` hoặc `upper-roman` (mặc định `decimal`).  

5. Một bộ đếm CSS có thể cực kỳ hữu ích để tạo các danh sách ouline, bởi vì một thể hiện mói của counter sẽ được tạo tự động trong element con. Việc sử dụng function `counters`, việc phân biệt các text được thêm vào trong các level khác nhau của các bộ đếm nồng nhau.

#### Browser support


### Tùy chuyển scrollbar

Tùy chỉnh style cho scrollbar đối với các document và element có thể bị tràn nội dùng, trên nền tảng WebKit.

#### HTML

```html
<div class="custom-scrollbar">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?</p>
</div>
```

#### CSS

```css
/* Document scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

/* Scrollable element */
.some-element::webkit-scrollbar {
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__custom-scrollbar">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?
    </p>
  </div>
</div>

<style>
.snippet-demo__custom-scrollbar {
  height: 100px;
  overflow: auto;
}

.snippet-demo__custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.snippet-demo__custom-scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.snippet-demo__custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>

#### Explanation

1. `::-webkit-scrollbar` là toàn bộ element scrollbar.

2. `::-webkit-scrollbar-track` là con chạy của scrollbar.

3. `::-webkit-scrollbar-thumb` là chỉ lớp ngoài của scrollbar.

Có nhiều pseudo-element khác mà ta có thể sử dụng để style cho scrollbar. Để xem thêm hãy truy cập [WebKit Blog](https://webkit.org/blog/363/styling-scrollbars/)

#### Browser support

<span class="snippet__support-note">⚠️
 Việc áp dụng Scollbar style không hiển thị trong taatsacar các track* https://caniuse.com/#feat=css-scrollbar

<!-- tags: visual -->

### Tùy chỉnh vùng chọn text

Thay đổi style của vùng chọn text

#### HTML

```html
<p class="custom-text-selection">Select some of this text.</p>
```

#### CSS

```css
::selection {
  background: aquamarine;
  color: black;
}
.custom-text-selection::selection {
  background: deeppink;
  color: white;
}
```

#### Demo

<div class="snippet-demo">
  <p class="snippet-demo__custom-text-selection">Select some of this text.</p>
</div>

<style>
.snippet-demo__custom-text-selection::selection {
  background: deeppink;
  color: white;
}
.snippet-demo__custom-text-selection::-moz-selection {
  background: deeppink;
  color: white;
}
</style>

#### Explanation

`::selection` định nghĩa một pseudo selector trên một element để định style cho text bên trong khi được select. Lưu ý là nếu bạn không kết hợp bất kỳ selector nào khác thì style sẽ áp dụng cho từ cấp độ root của document tới bất kỳ element nào có thể lựa chọn., 

#### Browser support

<span class="snippet__support-note">⚠️ Yêu cầu thêm các prefix đẻ hỗ trợ tất cả     </span>

* https://caniuse.com/#feat=css-selection

<!-- tags: visual -->

### Tùy chỉnh các biến

Các biến CSs sẽ có các giá trị cụ thể tái sử dụng trong 1 tài liệu

#### HTML

```html
<p class="custom-variables">CSS is awesome!</p>
```

#### CSS

```css
:root {
  --some-color: #da7800;
  --some-keyword: italic;
  --some-size: 1.25em;
  --some-complex-value: 1px 1px 2px whitesmoke, 0 0 1em slategray, 0 0 0.2em slategray;
}

.custom-variables {
  color: var(--some-color);
  font-size: var(--some-size);
  font-style: var(--some-keyword);
  text-shadow: var(--some-complex-value);
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__custom-variables">
    <p>CSS is awesome!</p>
  </div>
</div>

<style>
.snippet-demo__custom-variables {
  --some-color: #686868;
  --some-keyword: italic;
  --some-size: 1.25em;
  --some-complex-value: 1px 1px 2px whitesmoke, 0 0 1em slategray , 0 0 0.2em slategray;
}

.snippet-demo__custom-variables p {
  color: var(--some-color);
  font-size: var(--some-size);
  font-style: var(--some-keyword);
  text-shadow: var(--some-complex-value);
}
</style>

#### Explanation

Các biến được khai báo global bên trong pseudo-class `:root` sẽ match với element root của 1 mô hình cây đại diện cho toàn bộ document. Các biến cũng có thể bị giới hạn phạm vi tới 1 selector nếu được định nghĩa trong 1 block.

Hãy khai báo 1 biến với `--variable-name:`.

Sử dụng lại các biến trong document bằng cách dùng hàm `var(--variable-name)` 

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css-variables

<!-- tags: other -->

### Các vùng chọn bị vô hiệu hóa

Làm cho nội dung không được chọn

#### HTML

```html
<p>You can select me.</p>
<p class="unselectable">You can't select me!</p>
```

#### CSS

```css
.unselectable {
  user-select: none;
}
```

#### Demo

<div class="snippet-demo">
  <p>You can select me.</p>
  <p class="snippet-demo__disable-selection">You can't select me!</p>
</div>

<style>
.snippet-demo__disable-selection {
  user-select: none;
}
</style>

#### Explanation

`user-select: none` chỉ ra phần text này không thể chọn được

#### Browser support

<span class="snippet__support-note">⚠️Yêu cầu các prefix để hỗ trợ đầy đủ.</span>
<span class="snippet__support-note">⚠️ Đây không phải là cách an toàn để ngăn cản người dùng sao chép nội dung.</span>

* https://caniuse.com/#feat=user-select-none

<!-- tags: interactivity -->

### Con quay

Tạo một con quay có thể được sử dụng để biểu thị đang tải nội dung

#### HTML

```html
<div class="donut"></div>
```

#### CSS

```css
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.donut {
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: donut-spin 1.2s linear infinite;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__donut-spinner"></div>
</div>

<style>
@keyframes snippet-demo__donut-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg);}
}
.snippet-demo__donut-spinner {
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: snippet-demo__donut-spin 1.2s linear infinite;
}
</style>

#### Explanation

Sử dụng một `border` bán trong suốt cho toàn bộ element, ngoại trừ một bên sẽ đóng vai trò là chỉ số tải cho con quay. Dùng `animation` để xoay elenment

#### Browser support

<span class="snippet__support-note">⚠️ Yêu cầu các prefix để hỗ trợ đầy đủ.</span>

* https://caniuse.com/#feat=css-animation
* https://caniuse.com/#feat=transforms2d

<!-- tags: animation -->

### Bóng động

Tạo một bóng tương tự như tạo `box-shadow` nhung dựa vào các màu sắc của chính element.

#### HTML

```html
<div class="dynamic-shadow-parent">
  <div class="dynamic-shadow"></div>
</div>
```

#### CSS

```css
.dynamic-shadow-parent {
  position: relative;
  z-index: 1;
}
.dynamic-shadow {
  position: relative;
  width: 10rem;
  height: 10rem;
  background: linear-gradient(75deg, #6d78ff, #00ffb8);
}
.dynamic-shadow::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background: inherit;
  top: 0.5rem;
  filter: blur(0.4rem);
  opacity: 0.7;
  z-index: -1;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__dynamic-shadow-parent">
    <div class="snippet-demo__dynamic-shadow"></div>
  </div>
</div>

<style>
.snippet-demo__dynamic-shadow-parent {
  position: relative;
  z-index: 1;
}
.snippet-demo__dynamic-shadow {
  position: relative;
  width: 10rem;
  height: 10rem;
  background: linear-gradient(75deg, #6d78ff, #00ffb8);
}
.snippet-demo__dynamic-shadow::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  top: 0.5rem;
  filter: blur(0.4rem);
  opacity: 0.7;
  z-index: -1;
}
</style>

#### Explanation

Đoạn mã đòi hỏi một trường hợp phức tạp của ngữ cảnh xếp chồng lên để có được như mong muốn, như vậy pseudo-element sẽ được đặt bên dưới chính nó trong khi vẫn tiếp tục có thể hiển thị.

1. `position: relative` trong thành phần cha thiết lập 1 ngữ cảnh định vị Cartesian cho các element con.

2. `z-index: 1` thiết lập 1 ngữ cảnh xếp chồng mới.

3. `position: relative` trong thành phần con thiết lập 1 ngữ cảnh định vị cho pseudo-element.

4. `::after` định nghĩa 1 pseudo-element. 

5. `position: absolute` lấy ra phần từ pseudo của document và xác định vị trí của nó so với thành phần cha.

6. `width: 100%` và `height: 100%` chỉnh size của pseudo-element để cho nó vừa khít với kích thước của thành phần cha.

7. `background: inherit` khiến các pseudo-element thừa kế linear gradient trên một element cụ thể

8. `top: 0.5rem` vị trí của pseudo-element thụt xuống phía dưới so với thành phần cha của nó.

9. `filter: blur(0.4rem)` sẽ làm mờ phần tử pseudo để tạo ra 1 bóng xuất hiện phía dưới.

10. `opacity: 0.7` làm cho phần từ pseudo trong suốt một phần.

11. `z-index: -1` đặt vị trí của pseudo nằm phía dưới phần tử cha.

#### Browser support

<span class="snippet__support-note">⚠️ Yêu cầu các prefix để hỗ trợ đầy đủ.</span>

* https://caniuse.com/#feat=css-filters

<!-- tags: visual -->

### Các biến dễ dạng việc sử dụng
Các biến có thể được tái sử dụng cho các thuộc tính `transition-timing-function`, nó mạnh mẽ hơn khi đi kèm với `ease`, `ease-in`, `ease-out` và `ease-in-out`.

#### HTML

```html
<div class="easing-variables"></div>
```

#### CSS

```css
:root {
  --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  --ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  --ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  --ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.335);

  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
  --ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);

  --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);
  --ease-in-out-expo: cubic-bezier(1, 0, 0, 1);
  --ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.easing-variables {
  width: 50px;
  height: 50px;
  background: #333;
  transition: transform 1s var(--ease-out-quart);
}

.easing-variables:hover {
  transform: rotate(45deg);
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__easing-variables">Hover</div>
</div>

<style>
:root {
  --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  --ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
  --ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  --ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.335);

  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
  --ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);

  --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);
  --ease-in-out-expo: cubic-bezier(1, 0, 0, 1);
  --ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.snippet-demo__easing-variables {
  width: 75px;
  height: 75px;
  background: #333;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1s var(--ease-out-quart);
}

.snippet-demo__easing-variables:hover {
  transform: rotate(45deg);
}
</style>

#### Explanation
Các biến có thể dược định nghĩa toàn cục bên trong pseudo-class CSS `:root` mà nó gắn kèm với root element của mô hình cây tài liệu. Trong HTML, `:root` đại diện cho thể `<html>` và nó cũng tương đương với selector
`html`, ngoại từ nó rõ ràng cụ thể hơn.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css-variables

<!-- tags: animation -->

### Chữ bị chìm xuống

Tạo ra một hiệu ứng, mà text xuất hiện để được "khắc" hoặc khắc vào nền

#### HTML

```html
<p class="etched-text">I appear etched into the background.</p>
```

#### CSS

```css
.etched-text {
  text-shadow: 0 2px white;
  font-size: 1.5rem;
  font-weight: bold;
  color: #b8bec5;
}
```

#### Demo

<div class="snippet-demo">
  <p class="snippet-demo__etched-text">I appear etched into the background.</p>
</div>

<style>
.snippet-demo__etched-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #b8bec5;
  text-shadow: 0 2px 0 white;
}
</style>

#### Explanation

`text-shadow: 0 2px white` tạo ra bóng màu trắng với lệch `0px` theo chiều ngang và `2px` theo chiều dọc so với vị trí ban đầu

Nền phải tối hơn bóng tối để hiệu ứng có thể hiển thị.

Màu text nên hơi nhạt dần để làm cho nó trông giống như nó được khắc / khắc ra nền

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css-textshadow

<!-- tags: visual -->

### Các thành phần con được phân chia bằng nhau

Các thành phần con được phân bổ đồng đều bên trong thành phần cha.

#### HTML

```html
<div class="evenly-distributed-children">
  <p>Item1</p>
  <p>Item2</p>
  <p>Item3</p>
</div>
```

#### CSS

```css
.evenly-distributed-children {
  display: flex;
  justify-content: space-between;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__evenly-distributed-children">
    <p>Item1</p>
    <p>Item2</p>
    <p>Item3</p>
  </div>
</div>

<style>
.snippet-demo__evenly-distributed-children {
  display: flex;
  width: 100%;  
  justify-content: space-between;
}
</style>

#### Explanation

1. `display: flex` khởi tạo flexbox.

2. `justify-content: space-between` phân bố đều các phần tử con theo chiều ngang. Phần tử đầu tiên được đặt ở cạnh trái, trong khi cài cuối cùng được đặt ở cạnh bên phải.

Cách khác, sử dụng `justify-content: space-around` để phân bổ cac thành phần con chi đều khoảng cách 2 bên của chúng chứ không phải là khoảng cách giữa chúng.

#### Browser support

<span class="snippet__support-note">⚠️ Yêu cầu các prefix để hỗ trợ đầy đủ.</span>

* https://caniuse.com/#feat=flexbox

<!-- tags: layout -->

### Flexbox centering

Căn giữa theo chiều ngang và chiều dọc 1 thành phần con bên trong thành phần cha sử dụng `flexbox`.

#### HTML

```html
<div class="flexbox-centering">
  <div class="child">Centered content.</div>
</div>
```

#### CSS

```css
.flexbox-centering {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__flexbox-centering">
    <p class="snippet-demo__flexbox-centering__child">Centered content.</p>
  </div>
</div>

<style>
.snippet-demo__flexbox-centering {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>

#### Explanation

1. `display: flex` để sử dụng flexbox.
2. `justify-content: center` căn giữa thành phần con theo chiều ngang.
3. `align-items: center` căn giữa thành phần con theo chiều dọc.

#### Browser support

<span class="snippet__support-note">⚠️ Yêu cầu các prefix để hỗ trợ đầy đủ.</span>

* https://caniuse.com/#feat=flexbox

<!-- tags: layout -->

### Gradient text

Tạo text có màu gradient.

#### HTML

```html
<p class="gradient-text">Gradient text</p>
```

#### CSS

```css
.gradient-text {
  background: -webkit-linear-gradient(pink, red);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
```

#### Demo

<div class="snippet-demo">
  <p class="snippet-demo__gradient-text">
    Gradient text
  </p>
</div>

<style>
.snippet-demo__gradient-text {
  background: -webkit-linear-gradient(pink, red);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}
</style>

#### Explanation

1. `background: -webkit-linear-gradient(...)` sét text với 1 background gradient.

2. `webkit-text-fill-color: transparent` điền vào đoạn text có màu trong suốt.

3. `webkit-background-clip: text` **clips the background with the text, filling the text with the gradient background as the color.**

#### Browser support

<span class="snippet__support-note">⚠️ Sử dụng các thuộc tính không tiêu chuẩn.</span>

* https://caniuse.com/#feat=text-stroke

<!-- tags: visual -->

### Grid centering

Căn giữa theo chiều ngang và chiều dọc 1 thành phần con bên trong thành phần cha sử dụng  `grid`.

#### HTML

```html
<div class="grid-centering">
  <div class="child">Centered content.</div>
</div>
```

#### CSS

```css
.grid-centering {
  display: grid;
  justify-content: center;
  align-items: center;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__grid-centering">
    <p class="snippet-demo__grid-centering__child">Centered content.</p>
  </div>
</div>

<style>
.snippet-demo__grid-centering {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 200px;
}
</style>

#### Explanation

1. `display: grid` hiển thị grid.
2. `justify-content: center` căn giữa thành phần con theo chiều ngang.
3. `align-items: center` căn giữa thành phần con theo chiều ngang.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css-grid

<!-- tags: layout -->

### Grid layout

Thiết lập layout website cơ bản dùng `grid`.

#### HTML

```html
<div class="grid-layout">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">
    Content
    <br>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </div>
  <div class="footer">Footer</div>
</div>
```

#### CSS

```css
.grid-layout {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'sidebar header header'
    'sidebar content content'
    'sidebar footer  footer';
  color: white;
}
.grid-layout > div {
  background: #333;
  padding: 10px;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.header {
  grid-area: header;
}
.footer {
  grid-area: footer;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__grid-layout">
    <div class="box snippet-demo__grid-layout__header">Header</div>
    <div class="box snippet-demo__grid-layout__sidebar">Sidebar</div>
    <div class="box snippet-demo__grid-layout__content">Content
      <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
    <div class="box snippet-demo__grid-layout__footer">Footer</div>
  </div>
</div>

<style>
.snippet-demo__grid-layout {
  margin: 1em;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "sidebar header header"
    "sidebar content content"
    "sidebar  footer  footer";
  background-color: #fff;
  color: white;
}
.snippet-demo__grid-layout > div {
  background: #333;
  padding: 10px;
}
.snippet-demo__grid-layout__sidebar {
    grid-area: sidebar;
}
.snippet-demo__grid-layout__content {
    grid-area: content;
}
.snippet-demo__grid-layout__header {
    grid-area: header;
}
.snippet-demo__grid-layout__footer {
    grid-area: footer;
}
</style>

#### Explanation

1. `display: grid` sử dụng grid.
2. `grid-gap: 10px` định nghĩa khoảng cách giữa các thành phần.
3. `grid-template-columns: repeat(3, 1fr)` khai bóa 3 cột với cùng kích thước.
4. `grid-template-areas` định nghĩa tên của các vùng grid.
5. `grid-area: sidebar` tạo đối tượng sử dụng area với tên `sidebar`.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css-grid

<!-- tags: layout -->


### Đường kẻ border

Tại 1 element có 1 border bằng với 1px của thiết bị hiển thị theo chiều rộng, nó có thể trông rất nhọn và sắc bén.

#### HTML

```html
<div class="hairline-border">text</div>
```

#### CSS

```css
.hairline-border {
  box-shadow: 0 0 0 1px;
}

@media (min-resolution: 2dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.5px;
  }
}

@media (min-resolution: 3dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.33333333px;
  }
}

@media (min-resolution: 4dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.25px;
  }
}
```

#### Demo

<div class="snippet-demo">
  <p class="snippet-demo__hairline-border">Text with a hairline border around it.</p>
</div>

<style>
.snippet-demo__hairline-border {
  box-shadow: 0 0 0 1px;
}

@media (min-resolution: 2dppx) {
  .snippet-demo__hairline-border {
    box-shadow: 0 0 0 0.5px;
  }
}

@media (min-resolution: 3dppx) {
  .snippet-demo__hairline-border {
    box-shadow: 0 0 0 0.33333333px;
  }
}

@media (min-resolution: 4dppx) {
  .snippet-demo__hairline-border {
    box-shadow: 0 0 0 0.25px;
  }
}
</style>

#### Explanation

1. `box-shadow`, when only using spread, adds a pseudo-border which can use subpixels\*.

2. Use `@media (min-resolution: ...)` to check the device pixel ratio (`1dppx` equals 96 DPI), thiết lập diện tích của `box-shadow` bằng với `1 / dppx`.

#### Browser Support

<span class="snippet__support-note">⚠️ Cần cú pháp thay thế và kiểm tra các tác nhân người dùng JavaScript để được hỗ trợ đầy đủ.</span>

* https://caniuse.com/#feat=css-boxshadow
* https://caniuse.com/#feat=css-media-resolution

<hr>

\*Chrome không hỗ trợ giá trị subpixel trên `border`. Safari không hỗ trợ giá trị subpixel trên `box-shadow`. Firefox  không hỗ trợ cả 2.

<!-- tags: visual -->

### Hiệu ứng gạch chân khi hover

Tạo ra một hiệu ứng gạch chân động khi văn bản được hover qua.

<small>**Credit:** https://flatuicolors.com/</small>

#### HTML

```html
<p class="hover-underline-animation">Hover this text to see the effect!</p>
```

#### CSS

```css
.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #0087ca;
}
.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
```

#### Demo

<div class="snippet-demo">
  <p class="snippet-demo__hover-underline-animation">Hover this text to see the effect!</p>
</div>

<style>
.snippet-demo__hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #0087ca;
}
.snippet-demo__hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.snippet-demo__hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>

#### Explanation
1. `display: inline-block` chuyển thẻ `p` từ hiển thị `block` sang `inline-block` để ngăn cản gạch chân kéo dài toàn bọ chiều rộng của thành phần cha chứ không phải chỉ phần nội dung.

2. `position: relative` trên phần tử thiết lập một ngữ cảnh định vị Descartes cho các phần tử pseudo

3. `::after` định nghĩa môt thành phần pseudo.

4. `position: absolute` đặt phần tử pseudo ra khỏi document và định vị tí phụ thuộc vào thành phần cha của nó.

5. `width: 100%` đảm bảo thành phần pseudo kéo dài toàn bộ chiều rộng của khối text.

6. `transform: scaleX(0)` thiết lập tỉ lệ ban đầu của pseudo thành 0, nên sẽ sẽ không có widht và không thể nhìn thấy.

7. `bottom: 0` and `left: 0` đặt nó tại vị trí phía dưới bên trái của khối.

8. `transition: transform 0.25s ease-out` có nghĩa là `transform` sẽ thay đổi trong vòng 0.25 giây với hàm `ease-out`.
   
9. `transform-origin: bottom right` có nghĩa là điểm chuyển đổi neo được đặt ở góc dưới bên phải của khối.

10. `:hover::after` sau đó sử dụng `scaleX(1)` để chuyển chiều rộng thành 100%, sau đó thay đổi `transform-origin` thành `bottom left` nên để điểm neo được đảo ngược, cho phép nó chuyển tiếp theo hướng khác khi lơ lửng
    

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=transforms2d
* https://caniuse.com/#feat=css-transitions

<!-- tags: animation -->

### Theo dõi gradient con trỏ chuột

Một hiệu ứng hover có gradient đi theo vị trí con trỏ chuột

<small class="snippet__credit">**Credit:** [Tobias Reich](https://codepen.io/electerious/pen/MQrRxX)</small>

#### HTML

```html
<button class="mouse-cursor-gradient-tracking">
  <span>Hover me</span>
</button>
```

#### CSS

```css
.mouse-cursor-gradient-tracking {
  position: relative;
  background: #7983ff;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  overflow: hidden;
}

.mouse-cursor-gradient-tracking span {
  position: relative;
}

.mouse-cursor-gradient-tracking::before {
  --size: 0;
  content: '';
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, pink, transparent);
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease;
}

.mouse-cursor-gradient-tracking:hover::before {
  --size: 200px;
}
```

#### JavaScript

```js
var btn = document.querySelector('.mouse-cursor-gradient-tracking')
btn.onmousemove = function(e) {
  var x = e.pageX - btn.offsetLeft
  var y = e.pageY - btn.offsetTop
  btn.style.setProperty('--x', x + 'px')
  btn.style.setProperty('--y', y + 'px')
}
```

#### Demo

<div class="snippet-demo">
  <button class="snippet-demo__mouse-cursor-gradient-tracking">
    <span>Hover me</span>
  </button>
</div>

<style>
.snippet-demo__mouse-cursor-gradient-tracking {
  position: relative;
  background: #7983ff;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  overflow: hidden;
}

.snippet-demo__mouse-cursor-gradient-tracking span {
  position: relative;
}

.snippet-demo__mouse-cursor-gradient-tracking::before {
  --size: 0;
  content: '';
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, aqua, rgba(0,255,255,0.0001));
  transform: translate(-50%, -50%);
  transition: width .2s ease, height .2s ease;
}

.snippet-demo__mouse-cursor-gradient-tracking:hover::before {
  --size: 200px;
}
</style>

<script>
(function () {
  var btn = document.querySelector('.snippet-demo__mouse-cursor-gradient-tracking')
  btn.onmousemove = function (e) {
    var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
    var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
    btn.style.setProperty('--x', x + 'px')
    btn.style.setProperty('--y', y + 'px')
  }
})()
</script>

#### Explanation

_TODO_

**Chú ý!**

Nếu thành phần cha được gnas vị trí `position: relative` thì bạn cần phải bớt đi offset của nó tương ứng.

```js
var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
```

#### Browser support

<div class="snippet__requires-javascript">Requires JavaScript</div>
<span class="snippet__support-note">⚠️ Requires JavaScript.</span>

* https://caniuse.com/#feat=css-variables

<!-- tags: visual, interactivity -->

### :not selector

Psuedo selector `:not` hữu dụng trong việc định style cho một nhóm các element, đồng thời không áp cụng style cho element cuối cùng.

#### HTML

```html
<ul class="css-not-selector-shortcut">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
    .css-not-selector-shortcut {
      display: flex;
    }
    li {
      list-style-type: none;
      margin: 0;
      padding: 0 0.75rem;
    }
    li:not(:last-child) {
      border-right: 2px solid #d2d5e4;
    }
```

### Demo

<ul class="css-not-selector-shortcut">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>

<style>
    .css-not-selector-shortcut {
      display: flex;
    }
    li {
      list-style-type: none;
      margin: 0;
      padding: 0 0.75rem;
    }
    li:not(:last-child) {
      border-right: 2px solid #d2d5e4;
    }
</style> 

#### Explanation

`li:not(:last-child)` gán syle cho tất cả các thẻ `li` ngoại trừ `:last-child`

#### Browser support

### Overflow scroll gradient

Thêm gradient fading cho một phần tử tràn để thể hiện rõ vẫn còn nhiều nội dung chưa được cuộn

#### HTML

```html
<div class="overflow-scroll-gradient">
  <div class="overflow-scroll-gradient__scroller">
    Content to be scrolled
  </div>
</div>
```

#### CSS

```css
.overflow-scroll-gradient {
  position: relative;
}
.overflow-scroll-gradient::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 240px;
  height: 25px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.001),
    white
  ); /* transparent keyword is broken in Safari */
  pointer-events: none;
}
.overflow-scroll-gradient__scroller {
  overflow-y: scroll;
  background: white;
  width: 240px;
  height: 200px;
  padding: 15px 0;
  line-height: 1.2;
  text-align: center;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__overflow-scroll-gradient">
    <div class="snippet-demo__overflow-scroll-gradient__scroller">
      Content to be scrolled
    </div>
  </div>
</div>

<style>
.snippet-demo__overflow-scroll-gradient {
  position: relative;
}
.snippet-demo__overflow-scroll-gradient::after {
  content: '';
  background: linear-gradient(rgba(255, 255, 255, 0.001), white);
  position: absolute;
  width: 240px;
  height: 25px;
  bottom: 0;
  pointer-events: none;
}
.snippet-demo__overflow-scroll-gradient__scroller {
  overflow-y: scroll;
  background: white;
  width: 240px;
  height: 200px;
  padding: 15px 0;
  line-height: 1.2;
  text-align: center;
}
</style>

<script>
document.querySelector('.snippet-demo__overflow-scroll-gradient__scroller').innerHTML = 'content '.repeat(100)
</script>

#### Explanation

1. `position: relative` trong thành phần cha thiết lập 1 vị Cartesian cho pseudo-element
2. `::after` định nghĩa 1 thành phần pseudo.
3. `background-image: linear-gradient(...)` thêm một gradient tuyến tính mà phai màu dần từ trong suốt thành màu trắng (chiều từ trên xuống dưới).
4. `position: absolute` lấy ra phần từ pseudo của document và xác định vị trí của nó so với thành phần cha..
5. `width: 240px` gán cho size thanhf phần đang được cuộn (là 1 thành phần con của cha mà không có pseudo element).
6. `height: 25px` là chiều cao của phần tử pseudo đang mờ đi, cần được giữ ở mức tương đối nhỏ.
7. `bottom: 0` vị trí của phần tử pseudo nằm ở phía dưới cùng của phần tử cha.
8. `pointer-events: none` xác định rằng phần tử pseudo không thể là một mục tiêu của sự kiện chuột, cho phép văn bản phía dưới nó vẫn có thể được lựa chọn / tương tác.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css-gradients

<!-- tags: visual -->


### Menu bật ra

Hiển thị một menu bật ra khi hover vào.

#### HTML

```html
<div class="reference">
  <div class="popout-menu">
    Popout menu
  </div>
</div>
```

#### CSS

```css
.reference {
  position: relative;
}
.popout-menu {
  position: absolute;
  visibility: hidden;
  left: 100%;
}
.reference:hover > .popout-menu {
  visibility: visible;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__reference">
    <div class="snippet-demo__popout-menu">
      Popout menu
    </div>
  </div>
</div>

<style>
.snippet-demo__reference {
  background: linear-gradient(135deg, #ff4c9f, #ff7b74);
  height: 75px;
  width: 75px;
  position: relative;
  will-change: transform;
}
.snippet-demo__popout-menu {
  position: absolute;
  visibility: hidden;
  left: 100%;
  background: #333;
  color: white;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  width: 100px;
  text-align: center;
}
.snippet-demo__reference:hover > .snippet-demo__popout-menu {
  visibility: visible;
}
</style>

#### Explanation

1. `position: relative`  trong thành phần cha thiết lập 1 ngữ cảnh định vị Cartesian cho các element con.
2. `position: absolute` lấy ra phần từ pseudo của document và xác định vị trí của nó so với thành phần cha.
3. `left: 100%` di chuyển menu bật ra lệnh 100% so với chiều rộng của thành phần cha tính từ bên trái.
4. `visibility: hidden` ẩn menu lúc ban đàu và cho phép thay đổi (không giống như `display: none`).
5. `.reference:hover > .popout-menu` có nghĩa là khi `.reference` được hover lên thì thành phần con gần nhất có thuộc tính class là `.popout-menu` được lựa chọn và thay đổi giá trị của `visibility` thành `visible`, cho phép phần hiển thị bật ra.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

<!-- tags: interactivity -->

### Gạch chân text.

Một cách thay thế hiệu quả cho ``text-decoration: underline`` khi mà các dấu chấm câu không được gạch chân. Bổ sung thêm `text-decoration-skip-ink: auto` nhưng nó có ít sự kiểm soat hơn là underline.

#### HTML

```html
<p class="pretty-text-underline">Pretty text underline without clipping descending letters.</p>
```

#### CSS

```css
.pretty-text-underline {
  font-family: Arial, sans-serif;
  display: inline;
  font-size: 18px;
  text-shadow: 1px 1px 0 #f5f6f9, -1px 1px 0 #f5f6f9, -1px -1px 0 #f5f6f9, 1px -1px 0 #f5f6f9;
  background-image: linear-gradient(90deg, currentColor 100%, transparent 100%);
  background-position: 0 0.98em;
  background-repeat: repeat-x;
  background-size: 1px 1px;
}
.pretty-text-underline::-moz-selection {
  background-color: rgba(0, 150, 255, 0.3);
  text-shadow: none;
}
.pretty-text-underline::selection {
  background-color: rgba(0, 150, 255, 0.3);
  text-shadow: none;
}
```

#### Demo

<div class="snippet-demo">
  <p class="snippet-demo__pretty-text-underline">Pretty text underline without clipping descending letters.</p>
</div>

<style>
.snippet-demo__pretty-text-underline {
  font-family: Arial, sans-serif;
  display: inline;
  font-size: 18px !important;
  text-shadow: 1px 1px 0 #f5f6f9,
    -1px 1px 0 #f5f6f9,
    -1px -1px 0 #f5f6f9,
    1px -1px 0 #f5f6f9;
  background-image: linear-gradient(90deg, currentColor 100%, transparent 100%);
  background-position: 0 0.98em;
  background-repeat: repeat-x;
  background-size: 1px 1px;
}

.snippet-demo__pretty-text-underline::-moz-selection {
  background-color: rgba(0, 150, 255, 0.3);
  text-shadow: none;
}

.snippet-demo__pretty-text-underline::selection {
  background-color: rgba(0, 150, 255, 0.3);
  text-shadow: none;
}
</style>

#### Explanation

1. `text-shadow: ...` có 4 giá trị với các offset nó bao quanh 1 khu vực kích thước 4 * 4 để chắc chắn gạch chân có 1 bóng `thick` bao cả dấu chấm câu. Sử dụng một màu giống với background. Đối với những font lớn hơn sử dụng kicks thước `px` lớn hơn
2. `background-image: linear-gradient(...)` tạo ra một gradient 90 độ so với màu chữ hiện tại(`currentColor`).
3. Thuộc tính `background-*` chỉnh kích thước gradient thành 1x1px ở phía dưới và lặp lại theo trục x.
4. Phần tử `::selection` đảm bảo rằng bóng văn bản không tác động vào vùng chọn text.

#### Browser support

<span class="snippet__support-note">⚠️ Khoảng cách gạch dưới của văn bản phụ thuộc vào số liệu nội bộ của phông chữ, do đó bạn phải đảm bảo mọi người đều thấy cùng một phông chữ (tức là không có phông chữ hệ thống thay đổi dựa trên hệ điều hành).</span>

* https://caniuse.com/#feat=css-textshadow
* https://caniuse.com/#feat=css-gradients

<!-- tags: visual -->

### Reset tất cả các style

Resets all styles to default values with one property. This will not affect `direction` and `unicode-bidi` properties.

Thiết lâp lại style về các giá trị mặc định bằng 1 thuộc tính. Nó sẽ không có tác dụng với các thuộc tính `direction` và `unicode-bidi`

#### HTML

```html
<div class="reset-all-styles">
  <h4>Title</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?</p>
</div>
```

#### CSS

```css
.reset-all-styles {
  all: initial;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__reset-all-styles">
    <h3>Title</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?</p>
  </div>
</div>

<style>
.snippet-demo__reset-all-styles {
  all: initial;
}
</style>

#### Explanation

Thuộc tính `all` cho phép bạn reset tất cả style (được thừa kế hay không) về giá trị mặc định

#### Browser support

<span class="snippet__support-note">⚠️ MS Edge status is under consideration.</span>

* https://caniuse.com/#feat=css-all

<!-- tags: visual -->

### Shape separator

Sử dụng một hình dạng SVG để tách hai khối khác nhau để tạo ra một hình ảnh thú vị hơn so với sự phân chia ngang theo tiêu chuẩn.

#### HTML

```html
<div class="shape-separator"></div>
```

#### CSS

```css
.shape-separator {
  position: relative;
  height: 48px;
  background: #333;
}
.shape-separator::after {
  content: '';
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEyIDEybDEyIDEySDBsMTItMTJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
  position: absolute;
  width: 100%;
  height: 24px;
  bottom: 0;
}
```

#### Demo

<div class="snippet-demo is-distinct">
  <div class="snippet-demo__shape-separator"></div>
</div>

<style>
.snippet-demo__shape-separator {
  position: relative;
  height: 48px;
  margin: -0.75rem -1.25rem;
}
.snippet-demo__shape-separator::after {
  content: '';
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEyIDEybDEyIDEySDBsMTItMTJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
  position: absolute;
  width: 100%;
  height: 24px;
  bottom: 0;
}
</style>

#### Explanation
1. `position: relative` trong thành phần cha thiết lập 1 ngữ cảnh định vị Cartesian cho các element con.
2. `::after` định nghĩa một phần từ pseudo.
3. `background-image: url(...)` thêm hình SVG (hình tam giác 24x24 ở định dạng base64) làm hình nền của phần tử pseudo, mặc định sẽ lặp lại. Nó phải có màu sắc tương tự như khối đang được tách ra.
5. `position: absolute` lấy ra phần từ pseudo của document và xác định vị trí của nó so với thành phần cha.
5. `width: 100%` đảm bảo phần tử trải dài toàn bộ chiều rộng của phần tử cha.
6. `height: 24px` cùng chiều cao với hình.
7. `bottom: 0` phần từ pseudo ở phía dưới cùng của phần tử cha.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=svg

<!-- tags: visual -->

### Sibling fade

Làm mở các phần tử khác khi hover 1 phần tử

#### HTML

```html
<div class="sibling-fade">
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
  <span>Item 4</span>
  <span>Item 5</span>
  <span>Item 6</span>
</div>
```

#### CSS

```css
span {
  padding: 0 1rem;
  transition: opacity 0.2s;
}

.sibling-fade:hover span:not(:hover) {
  opacity: 0.5;
}
```

#### Demo

<div class="snippet-demo">
  <nav class="snippet-demo__sibling-fade">
    <span>Item 1</span>
    <span>Item 2</span>
    <span>Item 3</span>
    <span>Item 4</span>
    <span>Item 5</span>
    <span>Item 6</span>
  </nav>
</div>

<style>
.snippet-demo__sibling-fade {
  cursor: default;
  line-height: 2;
  vertical-align: middle;
}

.snippet-demo__sibling-fade span {
  padding: 1rem;
  transition: opacity 0.2s;
}

.snippet-demo__sibling-fade:hover span:not(:hover) {
  opacity: 0.5;
}
</style>

#### Explanation

1. `transition: opacity 0.2s` chỉ định rằng thay đổi độ mờ đục sẽ được chuyển đổi trong khoảng 0.2 giây.
2. `.sibling-fade:hover span:not(:hover)` xác định rằng khi phần tử cha được hovered, chọn bất kỳ phần tử con mà không được hovered sẽ thay đổi độ mờ của chúng đến`0.5`.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

* https://caniuse.com/#feat=css-sel3
* https://caniuse.com/#feat=css-transitions

<!-- tags: interactivity -->

### Ngăn xếp phông chữ hệ thống

Sử dụng phông chữ của hệ điều hành để có được cảm nhận gần giống với ứng dụng thực sự.

#### HTML

```html
<p class="system-font-stack">This text uses the system font.</p>
```

#### CSS

```css
.system-font-stack {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```

#### Demo

<div class="snippet-demo">
  <p class="snippet-demo__system-font-stack">This text uses the system font.</p>
</div>

<style>
.snippet-demo__system-font-stack {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>

#### Explanation
Trình duyệt tìm kiếm lần lượt từng phông chữ , chọn cái đầu tiên tìm thấy và chuyển tiếp nếu không tìm thầy font (trên hệ diều hành haowcsj được định nghĩa trong CSS).

1. `-apple-system` là San Francisco, dùng trên iOS and macOS (tuy nhiên không phải trên Chrome)
2. `BlinkMacSystemFont` laf San Francisco, dùng trên macOS Chrome
3. `Segoe UI` dùng trên Windows 10
4. `Roboto` dùng trên Android
5. `Oxygen-Sans` dùng trên GNU+Linux
6. `Ubuntu` dùng trên Linux
7. `"Helvetica Neue"` và `Helvetica` dùng trên macOS 10.10 và các phiên bản thấp hơn (được bao bọc bởi dấu ngoặc kép bởi vì nó có một khoảng trắng).
8. `Arial` là font được hộ trợ nhiều trên tất cả các hệ điều hành.
9. `sans-serif` là phông chữ sans-serif dự phòng nếu không có phông chữ nào được hỗ trợ.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

<!-- tags: visual -->

### Tam giác

Tạo một hình tam giác chỉ với CSS

#### HTML

```html
<div class="triangle"></div>
```

#### CSS

```css
.triangle {
  width: 0;
  height: 0;
  border-top: 20px solid #333;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
```

#### Demo

<div class="snippet-demo">
  <div class="snippet-demo__triangles">
    <div class="snippet-demo__triangle snippet-demo__triangle-1"></div>
    <div class="snippet-demo__triangle snippet-demo__triangle-2"></div>
    <div class="snippet-demo__triangle snippet-demo__triangle-3"></div>
    <div class="snippet-demo__triangle snippet-demo__triangle-4"></div>
    <div class="snippet-demo__triangle snippet-demo__triangle-5"></div>
  </div>
</div>

<style>
.snippet-demo__triangles {
  display: flex;
  align-items: center;
}

.snippet-demo__triangle {
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 0.25rem;
}

.snippet-demo__triangle-1 {
  border-top: 20px solid #333;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}

.snippet-demo__triangle-2 {
  border-bottom: 20px solid #333;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}

.snippet-demo__triangle-3 {
  border-left: 20px solid #333;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}

.snippet-demo__triangle-4 {
  border-right: 20px solid #333;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}

.snippet-demo__triangle-5 {
  border-top: 40px solid #333;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
}
</style>

#### Explanation

[Xem link sau để giải thích chi tiết.](https://stackoverflow.com/q/7073484)
Màu của border là màu của tam giác. Phía điểm đỉnh tam giác tương ứng với thuộc tính `border-*` đối diện. Ví dụ: màu trên đường `border-top` tương ứng với mũi tên xuống.

Thử nghiệm với các giá trị `px` để thay đổi tỷ lệ tam giác.

#### Browser support

<span class="snippet__support-note">✅ No caveats.</span>

<!-- tags: visual -->

### Lược bỏ text

Nếu văn bản dài hơn một dòng, nó sẽ được cắt ngắn và kết thúc bằng một dấu chấm lửng

#### HTML

```html
<p class="truncate-text">If I exceed one line's width, I will be truncated.</p>
```

#### CSS

```css
.truncate-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 200px;
}
```

#### Demo

<div class="snippet-demo">
  <p class="snippet-demo__truncate-text">
    This text will be truncated if it exceeds 200px in width.
  </p>
</div>

<style>
.snippet-demo__truncate-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 200px;
  margin: 0;
}
</style>

#### Explanation

1. `overflow: hidden`ngăn văn bản tràn ra kích thước của nó (đối với khối, 100% chiều rộng và chiều cao tự động).
2. `white-space: nowrap` ngăn văn bản vượt quá một chiều cao một dòng.
3. `text-overflow: ellipsis` nếu văn bản vượt quá kích thước của nó, nó sẽ kết thúc với một dấu chấm lửng
4. `width: 200px;` đảm bảo rằng phần tử có kích thước, để biết khi nào có dấu chấm lửng

#### Browser support

<span class="snippet__support-note">⚠️ chỉ làm việc đối với thành phần 1 dòng đơn.</span>

* https://caniuse.com/#feat=text-overflow

<!-- tags: layout -->

















