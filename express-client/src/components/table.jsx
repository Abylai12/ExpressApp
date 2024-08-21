import React, { useEffect, useState } from "react";

import UserCard from "./user-card";
import HeaderCard from "./header-card";
import Modal from "./modal";

const Table = () => {
  const [user, setUsers] = useState();
  const getUsersData = async () => {
    const res = await fetch("http://localhost:8000/users");

    const { users } = await res.json();
    setUsers(users);
  };
  useEffect(() => {
    getUsersData();
  }, []);
  console.log(user);
  return (
    <div className="p-4">
      <div className=" w-full flex justify-end">
        {/* <button className="btn btn-info">Add Employee</button> */}
        <Modal />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <HeaderCard />
          </thead>
          <tbody>
            {/* row 1 */}
            {user?.map(({ name, jobTitle, email, imgUrl, eid }) => (
              <UserCard
                key={eid}
                name={name}
                jobTitle={jobTitle}
                email={email}
                imgUrl={imgUrl}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
