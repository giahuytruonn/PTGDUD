import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    age: 25,
    email: "a@example.com",
    avatar:
      "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/480496622_2768612389967459_8581805903290317168_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvjdo8bt--0mrEj0653NQjff06shXzsGx9_TqyFfOwbJOrmEY7_ZdE-fcconuNY8z8ppDNd20MtWuaede2Z-vF&_nc_ohc=ZrUpNjrmjowQ7kNvgGrdG_s&_nc_oc=Adgv6J7C-ox1UvPqhjaSf65VQp_W4ZphSFnTVsVfQCsNp_c5-nyYBW9R_pTFih3imec&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=AQCRPxnBwuyDfRx-Ph4cvvg&oh=00_AYBJnVbEF9a3opq7KHsuobZJsZ1iS8IVA9jTf0uF8-R7Xg&oe=67CC895A",
  },
  {
    id: 2,
    name: "Trần Thị B",
    age: 30,
    email: "b@example.com",
    avatar:
      "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/480496622_2768612389967459_8581805903290317168_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvjdo8bt--0mrEj0653NQjff06shXzsGx9_TqyFfOwbJOrmEY7_ZdE-fcconuNY8z8ppDNd20MtWuaede2Z-vF&_nc_ohc=ZrUpNjrmjowQ7kNvgGrdG_s&_nc_oc=Adgv6J7C-ox1UvPqhjaSf65VQp_W4ZphSFnTVsVfQCsNp_c5-nyYBW9R_pTFih3imec&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=AQCRPxnBwuyDfRx-Ph4cvvg&oh=00_AYBJnVbEF9a3opq7KHsuobZJsZ1iS8IVA9jTf0uF8-R7Xg&oe=67CC895A",
  },
  {
    id: 3,
    name: "Lê Văn C",
    age: 28,
    email: "c@example.com",
    avatar:
      "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/480496622_2768612389967459_8581805903290317168_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvjdo8bt--0mrEj0653NQjff06shXzsGx9_TqyFfOwbJOrmEY7_ZdE-fcconuNY8z8ppDNd20MtWuaede2Z-vF&_nc_ohc=ZrUpNjrmjowQ7kNvgGrdG_s&_nc_oc=Adgv6J7C-ox1UvPqhjaSf65VQp_W4ZphSFnTVsVfQCsNp_c5-nyYBW9R_pTFih3imec&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=AQCRPxnBwuyDfRx-Ph4cvvg&oh=00_AYBJnVbEF9a3opq7KHsuobZJsZ1iS8IVA9jTf0uF8-R7Xg&oe=67CC895A",
  },
  {
    id: 4,
    name: "Trương Văn D",
    age: 28,
    email: "d@example.com",
    avatar:
      "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/480496622_2768612389967459_8581805903290317168_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvjdo8bt--0mrEj0653NQjff06shXzsGx9_TqyFfOwbJOrmEY7_ZdE-fcconuNY8z8ppDNd20MtWuaede2Z-vF&_nc_ohc=ZrUpNjrmjowQ7kNvgGrdG_s&_nc_oc=Adgv6J7C-ox1UvPqhjaSf65VQp_W4ZphSFnTVsVfQCsNp_c5-nyYBW9R_pTFih3imec&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=AQCRPxnBwuyDfRx-Ph4cvvg&oh=00_AYBJnVbEF9a3opq7KHsuobZJsZ1iS8IVA9jTf0uF8-R7Xg&oe=67CC895A",
  },
  {
    id: 5,
    name: "Võ Thái E",
    age: 28,
    email: "e@example.com",
    avatar:
      "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/480496622_2768612389967459_8581805903290317168_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvjdo8bt--0mrEj0653NQjff06shXzsGx9_TqyFfOwbJOrmEY7_ZdE-fcconuNY8z8ppDNd20MtWuaede2Z-vF&_nc_ohc=ZrUpNjrmjowQ7kNvgGrdG_s&_nc_oc=Adgv6J7C-ox1UvPqhjaSf65VQp_W4ZphSFnTVsVfQCsNp_c5-nyYBW9R_pTFih3imec&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=AQCRPxnBwuyDfRx-Ph4cvvg&oh=00_AYBJnVbEF9a3opq7KHsuobZJsZ1iS8IVA9jTf0uF8-R7Xg&oe=67CC895A",
  },
  {
    id: 6,
    name: "Trần Nhật F",
    age: 28,
    email: "f@example.com",
    avatar:
      "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/480496622_2768612389967459_8581805903290317168_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvjdo8bt--0mrEj0653NQjff06shXzsGx9_TqyFfOwbJOrmEY7_ZdE-fcconuNY8z8ppDNd20MtWuaede2Z-vF&_nc_ohc=ZrUpNjrmjowQ7kNvgGrdG_s&_nc_oc=Adgv6J7C-ox1UvPqhjaSf65VQp_W4ZphSFnTVsVfQCsNp_c5-nyYBW9R_pTFih3imec&_nc_zt=23&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=AQCRPxnBwuyDfRx-Ph4cvvg&oh=00_AYBJnVbEF9a3opq7KHsuobZJsZ1iS8IVA9jTf0uF8-R7Xg&oe=67CC895A",
  },
];
function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">Người dùng không tồn tại</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card shadow-lg p-3 mb-5 bg-white rounded"
        style={{ maxWidth: "450px" }}
      >
        <div className="card-header bg-primary text-white text-center">
          <h3 className="mb-0">Thông tin người dùng</h3>
        </div>
        <div className="card-body text-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="rounded-circle border border-primary p-1"
            style={{ width: "150px", height: "150px" }}
          />
          <h4 className="card-title mt-3 text-primary">{user.name}</h4>
          <hr />
          <p className="card-text text-muted">
            <strong className="text-dark">Tuổi:</strong> {user.age}
          </p>
          <p className="card-text text-muted">
            <strong className="text-dark">Email:</strong> {user.email}
          </p>
        </div>
        <div className="card-footer text-center">
          <a href="/" className="btn btn-outline-primary">
            Quay về danh sách
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
