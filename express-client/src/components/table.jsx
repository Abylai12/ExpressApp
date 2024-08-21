import React, { useEffect, useState } from "react";

import UserCard from "./user-card";
import HeaderCard from "./header-card";

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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <HeaderCard />
          </thead>
          <tbody>
            {/* row 1 */}
            {user?.map(({ name, jobTitle, email, imgUrl }) => (
              <UserCard
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
