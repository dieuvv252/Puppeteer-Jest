# Giới thiệu về Puppeeter

## Puppeteer là gì ?

1. Puppeteer là một thư viện đuợc xây dựng bằng Node.JS cung cấp một high-level API control Chrome và Chromium thông qua DevsTool protocol

## Puppeteer có thể làm gì

1. Tạo ảnh chụp màn hình trang web và xuất PDFs
2. Thu thập dữ liệu và tạo nội dung trang web 1 cách tự động
3. Tự động gửi form , test cho giao diện , tương tác với trang web 1 cách tự động
4. Tạo môi trường test 1 các tự động bằng cách sử dụng trình duyệt và Javascript mới nhất
5. Theo dõi hiệu suất của 1 trang web

# Một số phương thức sử dụng Puppeteer trong việc testing

Dưới đây là một số API phổ biến trong thư viện Puppeteer mà thường được sử dụng cho việc kiểm thử (testing) giao diện người dùng (UI testing) trên trang web và ứng dụng web:

```
puppeteer.launch(): Khởi tạo một phiên làm việc với trình duyệt.

browser.newPage(): Tạo một trang web mới.

page.goto(): Điều hướng đến một URL cụ thể.

page.waitForSelector(): Chờ đợi cho đến khi một phần tử hoặc selector trên trang web xuất hiện.

page.click(): Nhấp chuột vào một phần tử hoặc vị trí trên trang web.

page.type(): Gửi dữ liệu vào các ô nhập liệu trên trang.

page.evaluate(): Thực thi mã JavaScript trong ngữ cảnh của trang web.

page.screenshot(): Chụp ảnh màn hình của trang web.

page.waitForNavigation(): Chờ đợi cho đến khi trang được tải lại hoặc điều hướng đến trang khác.

page.waitForFunction(): Chờ đợi cho đến khi một hàm JavaScript trả về true.

page.goBack(): Quay lại trang trước đó.

page.goForward(): Điều hướng đến trang tiếp theo.

page.reload(): Tải lại trang web hiện tại.

page.waitFor(): Chờ đợi một khoảng thời gian cụ thể.

page.hover(): Di chuột qua một phần tử.

page.focus(): Lấy trọng tâm vào một phần tử.

page.select(): Chọn giá trị trong một dropdown.

page.waitForResponse(): Chờ đợi cho đến khi có response từ server.

page.waitForRequest(): Chờ đợi cho đến khi có request được gửi đi từ trang.

page.evaluateHandle(): Thực thi mã JavaScript và trả về một handle của đối tượng DOM.

page.$(): Chọn phần tử đầu tiên phù hợp với selector.

page.$$(): Chọn tất cả các phần tử phù hợp với selector.

page.$eval(): Chọn phần tử và thực thi một hàm trên nó.

page.$$eval(): Chọn tất cả các phần tử và thực thi một hàm trên chúng.

page.setViewport(): Thiết lập kích thước viewport của trang.

page.authenticate(): Xác thực trang web bằng cách cung cấp tên người dùng và mật khẩu.

page.setCookie(): Đặt cookie cho trang.

page.deleteCookie(): Xóa cookie.

page.cookies(): Truy xuất danh sách các cookie của trang.

page.waitForXPath(): Chờ đợi cho đến khi một phần tử dựa trên XPath xuất hiện.

page.waitForFileChooser(): Chờ đợi cho đến khi một hộp thoại chọn tệp xuất hiện.

page.emulate(): Mô phỏng các thiết bị di động và mạng.

page.keyboard.press(): Gửi sự kiện phím như Enter, Tab, hoặc Arrow keys.

page.mouse.down(): Giữ chuột ở vị trí cụ thể.

page.mouse.up(): Nhả chuột từ vị trí đã giữ.

page.mouse.move(): Di chuyển chuột đến vị trí cụ thể.

page.waitForFunction(): Chờ đợi cho đến khi một hàm JavaScript trả về true.

page.waitForTimeout(): Chờ đợi cho đến khi một khoảng thời gian cụ thể trôi qua.

page.evaluateOnNewDocument(): Thêm mã JavaScript sẽ được thực thi trên mỗi trang mới tạo.

page.on(): Xử lý sự kiện trình duyệt.

page.close(): Đóng trang.

browser.close(): Đóng trình duyệt.

browser.newContext(): Tạo một ngữ cảnh mới cho trình duyệt.

browser.newPage(): Tạo một trang web mới.

browser.pages(): Truy xuất danh sách các trang hiện đang mở trong trình duyệt.

browser.defaultBrowserContext(): Truy xuất ngữ cảnh trình duyệt mặc định.

browser.isConnected(): Kiểm tra xem trình duyệt có đang kết nối hay không.

browser.target(): Truy xuất danh sách các target (cửa sổ hoặc tab).

browser.version(): Truy xuất phiên bản trình duyệt.

browser.userAgent(): Truy xuất User-Agent của trình duyệt.
```
