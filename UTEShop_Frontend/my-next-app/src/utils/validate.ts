export const validateRegisterForm = (form: any) => {
  const errors: any = {};

  if (!form.fullName?.trim()) {
    errors.fullName = 'Vui lòng nhập họ và tên';
  }

  if (!form.username?.trim()) {
    errors.username = 'Vui lòng nhập tên đăng nhập';
  }

  if (!form.email?.trim()) {
    errors.email = 'Vui lòng nhập email';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email không hợp lệ';
  }

  if (!form.phone?.trim()) {
    errors.phone = 'Vui lòng nhập số điện thoại';
  } else if (!/^[0-9]{10,11}$/.test(form.phone)) {
    errors.phone = 'Số điện thoại không hợp lệ';
  }

  if (!form.dob) {
    errors.dob = 'Vui lòng nhập ngày sinh';
  }

  if (!form.password) {
    errors.password = 'Vui lòng nhập mật khẩu';
  } else if (form.password.length < 8) {
    errors.password = 'Mật khẩu phải ít nhất 8 ký tự';
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = 'Vui lòng xác nhận mật khẩu';
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Mật khẩu xác nhận không khớp';
  }

  return errors;
};
