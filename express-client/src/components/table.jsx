import React, { useEffect, useState } from "react";

import UserCard from "./user-card";
import HeaderCard from "./header-card";
import Modal from "./modal";

const Table = () => {
  const [users, setUsers] = useState();

  const getUsersData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { objectUsers } = await res.json();

    setUsers(objectUsers);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div className="p-4">
      <div className=" w-full flex justify-end">
        <Modal getUsersData={getUsersData} />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <HeaderCard />
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map(({ name, jobTitle, email, imgUrl, id }, idx) => (
              <UserCard
                getUsersData={getUsersData}
                key={idx}
                name={name}
                jobTitle={jobTitle}
                email={email}
                imgUrl={imgUrl}
                id={id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
