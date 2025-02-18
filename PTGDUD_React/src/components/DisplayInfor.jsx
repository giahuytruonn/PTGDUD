import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUser } = this.props;
    return (
      <div>
        <ul className="flex flex-col justify-center items-center">
          {listUser.map((user) => (
            <li key={user.id} className="bg-red-300 w-50 my-5 rounded text-center text-white font-semibold p-3">
              {user.Name} - {user.Age} years old
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DisplayInfor;