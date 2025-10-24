# Quản lý sản phẩm - UTEShop Admin

## Tính năng đã hoàn thành

### 1. Chức năng ẩn sản phẩm
- **Ẩn sản phẩm**: Sản phẩm bị ẩn sẽ không hiển thị cho khách hàng nhưng vẫn tồn tại trong database
- **Hiển thị sản phẩm**: Có thể hiển thị lại sản phẩm đã bị ẩn
- **Trạng thái**: Hiển thị trạng thái "Đã ẩn" hoặc "Còn hàng" với màu sắc tương ứng

### 2. Form thêm/sửa sản phẩm
- **Modal form**: Form được hiển thị trong modal popup
- **Thêm sản phẩm**: Form trống để nhập thông tin sản phẩm mới
- **Sửa sản phẩm**: Form được điền sẵn thông tin sản phẩm hiện tại
- **Validation**: Các trường bắt buộc được validate

### 3. Modal thông báo thành công
- **Thông báo**: Hiển thị modal thông báo khi thêm/sửa/ẩn/hiện sản phẩm thành công
- **Tự động đóng**: Modal tự động đóng sau khi người dùng nhấn OK
- **Thông báo rõ ràng**: Hiển thị thông báo cụ thể cho từng hành động

### 4. Giao diện người dùng
- **Bảng sản phẩm**: Hiển thị danh sách sản phẩm với các cột:
  - Hình ảnh
  - Tên sản phẩm
  - Loại sản phẩm
  - Giá
  - Trạng thái (Còn hàng/Đã ẩn)
  - Thao tác (Sửa/Ẩn hoặc Hiện)
- **Nút thêm sản phẩm**: Nút xanh để mở form thêm sản phẩm mới
- **Responsive**: Giao diện tương thích với các kích thước màn hình khác nhau

## Cấu trúc API

### Backend Endpoints
- `GET /products` - Lấy danh sách tất cả sản phẩm
- `GET /products/:id` - Lấy thông tin sản phẩm theo ID
- `POST /products` - Tạo sản phẩm mới
- `PATCH /products/:id` - Cập nhật sản phẩm
- `PATCH /products/:id/hide` - Ẩn sản phẩm
- `PATCH /products/:id/show` - Hiển thị sản phẩm
- `DELETE /products/:id` - Xóa sản phẩm (không sử dụng trong giao diện)

### Frontend Components
- `ProductsManagement.tsx` - Component chính quản lý sản phẩm
- `AdminLayout.tsx` - Layout chung cho admin
- `api.services.ts` - Service gọi API

## Cách sử dụng

1. **Truy cập trang quản lý sản phẩm**: `/products`
2. **Thêm sản phẩm mới**: Nhấn nút "Thêm sản phẩm" và điền form
3. **Sửa sản phẩm**: Nhấn "Sửa" trong cột thao tác
4. **Ẩn sản phẩm**: Nhấn "Ẩn" trong cột thao tác
5. **Hiển thị sản phẩm**: Nhấn "Hiện" trong cột thao tác (chỉ hiển thị với sản phẩm đã ẩn)

## Lưu ý kỹ thuật

- Sử dụng trường `is_hidden` trong database để quản lý trạng thái ẩn/hiện
- Sản phẩm bị ẩn vẫn tồn tại trong database, chỉ không hiển thị cho khách hàng
- Form validation được thực hiện ở cả frontend và backend
- Sử dụng modal để tránh chuyển trang không cần thiết
- API responses có cấu trúc thống nhất với `success` và `message`
