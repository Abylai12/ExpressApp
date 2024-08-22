import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const UserCard = ({ name, jobTitle, email, imgUrl, id, getUsersData }) => {
  const [sent, useSent] = useState(false);

  const delelteEmployee = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("User deleted successfully");
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    useSent(!sent);
  };
  useEffect(() => {
    getUsersData();
  }, [sent]);

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
              <img
                src={
                  imgUrl
                    ? "https://img.daisyui.com/images/profile/demo/2@94.webp"
                    : ""
                }
                alt="Avatar Tailwind CSS Component"
              />
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
        <button
          className="btn btn-circle btn-outline"
          onClick={() => {
            editEmployee(id);
          }}
        >
          <MdEdit className="h-6 w-6" />
        </button>
        <button
          className="btn btn-circle btn-outline"
          onClick={() => {
            delelteEmployee(id);
          }}
        >
          <MdOutlineDelete className="h-6 w-6" />
        </button>
      </th>
    </tr>
  );
};

export default UserCard;
