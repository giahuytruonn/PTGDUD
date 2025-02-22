import React, { useState } from "react";

// class DisplayInfor extends React.Component {
//   render() {
//     const { listUser } = this.props;
//     return (
//       <div>
//         <ul className="flex flex-col justify-center items-center">
//           {listUser.map((user) => (
//             <li key={user.id} className="bg-red-300 w-50 my-5 rounded text-center text-white font-semibold p-3">
//               {user.Name} - {user.Age} years old
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
const DisplayInfor = ({ listUser, handleDeleteUser }) => {
  return (
    <div className="flex flex-col items-center">
      {listUser.length === 0 ? (
        <p className="text-gray-500 font-semibold">Không có người dùng nào!</p>
      ) : (
        <ul className="flex flex-col justify-center items-center">
          {listUser.map((user) => (
            <li 
              key={user.id} 
              className="bg-red-300 w-60 my-3 rounded text-center text-white font-semibold p-3 flex justify-between items-center"
            >
              <span>{user.Name} - {user.Age} tuổi</span>
              <button 
                className="ml-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                onClick={() => handleDeleteUser(user.id)}
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayInfor;
