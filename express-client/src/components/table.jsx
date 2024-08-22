import React, { useEffect, useState } from "react";

import UserCard from "./user-card";
import HeaderCard from "./header-card";
import Modal from "./modal";

const Table = () => {
  const [users, setUsers] = useState();
  const [taskId, setTaskId] = useState(-1);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    imgUrl: "",
    jobTitle: "",
  });

  const showModal = () => {
    setForm({
      name: "",
      email: "",
      imgUrl: "",
      jobTitle: "",
    });
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

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
        <Modal
          open={open}
          showModal={showModal}
          closeModal={closeModal}
          getUsersData={getUsersData}
          form={form}
          setForm={setForm}
          taskId={taskId}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <HeaderCard />
          </thead>
          <tbody>
            <UserCard
              showModal={showModal}
              getUsersData={getUsersData}
              users={users}
              setForm={setForm}
              setTaskId={setTaskId}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
