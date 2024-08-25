import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const UserCard = ({ deleteEmployerData, users, editModal }) => {
  return (
    <>
      {users?.map((user) => (
        <tr key={user.id}>
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
                      user.imgUrl
                        ? "https://img.daisyui.com/images/profile/demo/2@94.webp"
                        : ""
                    }
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{user.name}</div>
              </div>
            </div>
          </td>
          <td>
            <span className="">{user.jobTitle}</span>
          </td>
          <td>{user.email}</td>
          <th className="flex gap-4">
            <button
              className="btn btn-circle btn-outline"
              onClick={() => {
                editModal(user);
              }}
            >
              <MdEdit className="h-6 w-6" />
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => {
                deleteEmployerData(user.id);
              }}
            >
              <MdOutlineDelete className="h-6 w-6" />
            </button>
          </th>
        </tr>
      ))}
    </>
  );
};

export default UserCard;
