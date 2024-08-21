import React from "react";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const UserCard = ({ name, jobTitle, email, imgUrl }) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={imgUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="">{jobTitle}</span>
      </td>
      <td>{email}</td>
      <th className="flex gap-4">
        <button className="btn btn-circle btn-outline">
          <MdEdit className="h-6 w-6" />
        </button>
        <button className="btn btn-circle btn-outline">
          <MdOutlineDelete className="h-6 w-6" />
        </button>
      </th>
    </tr>
  );
};

export default UserCard;
