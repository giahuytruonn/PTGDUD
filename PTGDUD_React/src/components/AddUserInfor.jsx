import React, { Component, useState } from "react";

const AddUserInfor = ({ handleAddnewUser, isFull }) => {
  const [userInfo, setUserInfo] = useState({
    Name: "",
    Age: "",
  });

  // Cập nhật state khi nhập dữ liệu
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // Xử lý submit form
  const handleOnSubmit = (event) => {
    event.preventDefault();
    
    if (isFull) {
      alert("Không thể thêm, danh sách đã đầy!");
      return;
    }

    handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "user",
      Name: userInfo.Name,
      Age: userInfo.Age,
    });

    setUserInfo({ Name: "", Age: "" });
  };

  return (
    <form className="flex flex-col justify-center items-center" onSubmit={handleOnSubmit}>
      <label className="font-semibold mx-1">
        Tên:
        <input
          className="m-1 border border-gray-400 rounded py-1 w-90"
          type="text"
          name="Name"
          value={userInfo.Name}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label className="font-semibold mx-1">
        Tuổi:
        <input
          className="m-1 border border-gray-400 rounded py-1 w-90"
          type="number"
          name="Age"
          value={userInfo.Age}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <button 
        type="submit" 
        className="bg-green-700 text-white font-semibold my-2 p-2 rounded cursor-pointer"
        disabled={isFull}
      >
        {isFull ? "Danh sách đầy" : "Thêm người dùng"}
      </button>
    </form>
  );
};

export default AddUserInfor;