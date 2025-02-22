import { useState, useEffect } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const MyComponents = () => {
  const [listUser, setListUser] = useState([
    { id: 1, Name: "Gia Huy", Age: 49 },
    { id: 2, Name: "Hoang", Age: 34 },
    { id: 3, Name: "Chien", Age: 32 },
  ]);

  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    setIsFull(listUser.length >= 10);
  }, [listUser]);

  const handleAddnewUser = (userObject) => {
    if (listUser.length >= 10) {
      alert("Không thể thêm, danh sách đã đầy!");
      return;
    }
    setListUser([userObject, ...listUser]);
  };

  const handleDeleteUser = (userID) => {
    setListUser(listUser.filter(item => item.id !== userID));
  };

  // Hàm xóa toàn bộ danh sách
  const handleClearAllUsers = () => {
    if (listUser.length === 0) {
      alert("Danh sách đã rỗng!");
      return;
    }
    if (window.confirm("Bạn có chắc muốn xóa tất cả người dùng?")) {
      setListUser([]);
    }
  };

  return (
    <div>
      <AddUserInfor handleAddnewUser={handleAddnewUser} isFull={isFull} />
      {isFull && <p className="text-red-500 font-semibold"> Danh sách đã đạt tối đa 10 người!</p>}
      <hr />
      <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} />

      
      <button 
        className="bg-red-600 text-white font-semibold mt-3 p-2 rounded cursor-pointer"
        onClick={handleClearAllUsers}
      >
        Xóa tất cả
      </button>
    </div>
  );
};

export default MyComponents;
