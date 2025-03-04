import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const users = [
  { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com" },
  { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com" },
  { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com" },
  { id: 4, name: "Trương Văn D", age: 27, email: "d@example.com" },
  { id: 5, name: "Võ Thái E", age: 13, email: "e@example.com" },
  { id: 6, name: "Trần Nhật F", age: 98, email: "f@example.com" },
];

function UserList() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Danh sách người dùng</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Email</th>
              <th>Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/user/${user.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Xem chi tiết
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
