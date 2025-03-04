function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-danger">404 - Trang không tồn tại!</h1>
      <p className="lead">Xin lỗi, trang bạn đang tìm kiếm không khả dụng.</p>
      <a href="/" className="btn btn-primary mt-3">
        Quay về trang chủ
      </a>
    </div>
  );
}

export default NotFound;
