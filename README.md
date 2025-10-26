# UTEShop Admin Panel

## Thành viên nhóm
- Phương Thiện Nhân - 22110387
- Trần Thanh Nhã - 22110386
- Nguyễn Đức Công Anh - 22110281
- Nguyễn Thị Ngọc Trâm - 22110439

## Tổng quan
UTEShop Admin Panel là hệ thống quản lý admin cho cửa hàng đồ uống UTEShop, được xây dựng với Next.js (Frontend) và NestJS (Backend). Hệ thống cung cấp đầy đủ các chức năng quản lý từ xác thực người dùng đến quản lý sản phẩm, đơn hàng, voucher và đánh giá.

## Công nghệ sử dụng

### Backend (NestJS)
- Framework: NestJS với TypeScript
- Database: MySQL (sử dụng chung database với UTEShop)
- ORM: Sequelize
- Authentication: JWT + bcrypt
- Email: Nodemailer cho OTP
- Port: 3001

### Frontend (Next.js)
- Framework: Next.js 16 với TypeScript
- Styling: Tailwind CSS
- Icons: Font Awesome
- HTTP Client: Axios
- Port: 3002

## Cài đặt và Chạy

### Yêu cầu hệ thống
- Node.js (phiên bản 16 trở lên)
- MySQL Server
- Git

### Backend (NestJS)

1. Cài đặt dependencies:
```bash
cd UTEShop_Backend/backend
npm install
```

2. Cấu hình environment:
Tạo file `.env` trong thư mục `UTEShop_Backend/backend/`:
```env
# Database
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=123456
MYSQL_DB=uteshop

# JWT
JWT_SECRET=dev_jwt_secret_change_me

# Email (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Server
PORT=3001
FRONTEND_ORIGIN=http://localhost:3002
```

3. Chạy backend:
```bash
npm run start:dev
```

### Frontend (Next.js)

1. Cài đặt dependencies:
```bash
cd UTEShop_Frontend/my-next-app
npm install
```

2. Cấu hình environment:
Tạo file `.env.local` trong thư mục `UTEShop_Frontend/my-next-app/`:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

3. Chạy frontend:
```bash
npm run dev
```

## Chức năng đã triển khai

### Authentication
- Login: Đăng nhập với username/password
- Register: Đăng ký với OTP xác thực qua email
- Forgot Password: Quên mật khẩu với OTP qua email
- Validation: Validation đầy đủ cho tất cả forms
- JWT: Sử dụng JWT cho authentication

### Quản lý Dashboard
- Thống kê tổng quan về đơn hàng, sản phẩm, người dùng
- Biểu đồ doanh thu và phân tích dữ liệu

### Quản lý Sản phẩm
- Thêm, sửa, xóa sản phẩm
- Upload hình ảnh sản phẩm
- Quản lý danh mục sản phẩm
- Tự động tạo slug từ tên sản phẩm
- Phân trang sản phẩm (10 sản phẩm/trang)

### Quản lý Đơn hàng
- Xem danh sách đơn hàng
- Cập nhật trạng thái đơn hàng
- Chi tiết đơn hàng

### Quản lý Người dùng
- Xem danh sách người dùng
- Chỉnh sửa thông tin người dùng
- Quản lý trạng thái tài khoản

### Quản lý Voucher
- Tạo, sửa, xóa voucher
- Quản lý mã giảm giá theo phần trăm hoặc số tiền cố định
- Thiết lập điều kiện sử dụng voucher

### Quản lý Đánh giá
- Xem đánh giá sản phẩm từ khách hàng
- Quản lý trạng thái đánh giá

### Quản lý Danh mục
- Thêm, sửa, xóa danh mục sản phẩm
- Tự động tạo slug cho danh mục

## API Endpoints

### Auth Endpoints
- `POST /auth/login` - Đăng nhập
- `GET /auth/check-username?username=xxx` - Kiểm tra username có sẵn
- `GET /auth/check-email?email=xxx` - Kiểm tra email có sẵn
- `POST /auth/register/request-otp` - Gửi OTP đăng ký
- `POST /auth/register/confirm` - Xác nhận OTP đăng ký
- `POST /auth/forgot-password` - Gửi OTP quên mật khẩu
- `POST /auth/reset-password` - Đặt lại mật khẩu

### Products Endpoints
- `GET /products?page=1&limit=10` - Lấy danh sách sản phẩm có phân trang
- `POST /products` - Tạo sản phẩm mới
- `PUT /products/:id` - Cập nhật sản phẩm
- `DELETE /products/:id` - Xóa sản phẩm

### Categories Endpoints
- `GET /categories` - Lấy danh sách danh mục
- `POST /categories` - Tạo danh mục mới
- `PUT /categories/:id` - Cập nhật danh mục
- `DELETE /categories/:id` - Xóa danh mục

### Vouchers Endpoints
- `GET /vouchers` - Lấy danh sách voucher
- `POST /vouchers` - Tạo voucher mới
- `PUT /vouchers/:id` - Cập nhật voucher
- `DELETE /vouchers/:id` - Xóa voucher

## Cấu hình Email

Để sử dụng chức năng OTP qua email, cần cấu hình Gmail:

1. Bật 2-Factor Authentication cho Gmail
2. Tạo App Password
3. Cập nhật `SMTP_USER` và `SMTP_PASS` trong file `.env`

## Database

Project sử dụng chung database MySQL với UTEShop project. Các bảng chính:

### Users
- `id` (Primary Key)
- `fullName`
- `username` (Unique)
- `password` (Hashed)
- `email` (Unique)
- `dob`
- `phone`
- `address`
- `loyalty_points`

### Categories
- `id` (Primary Key)
- `name`
- `slug`

### Products (Drinks)
- `id` (Primary Key)
- `name`
- `slug`
- `description`
- `price`
- `sale_price`
- `size`
- `stock`
- `views`
- `sold`
- `image_url`
- `category_id`

### Vouchers
- `id` (Primary Key)
- `code`
- `name`
- `description`
- `discount_type`
- `discount_value`
- `min_order_amount`
- `max_discount_amount`
- `usage_limit`
- `used_count`
- `start_date`
- `end_date`
- `status`

## Tính năng nổi bật

- Giao diện responsive với Tailwind CSS
- Modal với hiệu ứng blur backdrop
- Phân trang cho danh sách sản phẩm
- Upload hình ảnh sản phẩm
- Tự động tạo slug từ tên sản phẩm/danh mục
- Validation form đầy đủ
- Xác thực JWT
- Gửi OTP qua email
- Quản lý trạng thái real-time

## Lưu ý

- Backend chạy trên port 3001
- Frontend chạy trên port 3002
- Cần cấu hình CORS cho phép frontend gọi API
- Sử dụng localStorage để lưu token và user info
- OTP có thời hạn 5 phút
- JWT token có thời hạn 7 ngày
- Database được chia sẻ với project UTEShop chính