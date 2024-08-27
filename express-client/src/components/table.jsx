import React, { useEffect, useState } from "react";

import UserCard from "./user-card";
import HeaderCard from "./header-card";
import Modal from "./modal";

const Table = () => {
  const [type, useType] = useState(false); // edit bolon submit buttong yalgahad ashiglasan
  const [refresh, setRefresh] = useState(false); //page refresh hiihed ashiglasan
  const [users, setUsers] = useState(); // get huselt deh data avhad ashiglasan
  const [taskId, setTaskId] = useState(-1); // uptadeUserData function deer hereglesen state
  const [openModal, setModalOpen] = useState(false); // modaliig open attr ashiglaj gargah ued ashiglasan
  const [form, setForm] = useState({
    name: "",
    email: "",
    imgUrl: "",
    jobTitle: "",
  });
  const editModal = (user) => {
    showModal();
    setForm((preForm) => ({ ...preForm, ...user }));
    setTaskId(user.id);
    useType(false);
  };

  const showModal = () => {
    setForm({
      name: "",
      email: "",
      imgUrl: "",
      jobTitle: "",
    });
    setModalOpen(true);
    useType(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const deleteEmployerData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setRefresh(!refresh);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getUsersData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { objectUsers } = await res.json();

    setUsers(objectUsers);
  };

  /// post

  const postEmployerData = async () => {
    const { name, email, imgUrl, jobTitle } = form;

    if (!name || !email || !imgUrl || !jobTitle) {
      return; // Stop the function if any field is empty
    }

    const newEmployee = {
      name,
      email,
      imgUrl,
      jobTitle,
    };

    try {
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });
    } catch (error) {
      console.error("Error:", error);
    }
    closeModal();
    setRefresh(!refresh);
  };
  //edit

  const updateEmployerData = async () => {
    const { name, email, imgUrl, jobTitle } = form;

    if (!name || !email || !imgUrl || !jobTitle) {
      console.log(error);
      return; // Stop the function if any field is empty
    }

    try {
      const response = await fetch(`http://localhost:8000/users/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.error("Error:", error);
    }
    closeModal();
    setRefresh(!refresh);
  };
  const submitValue = () => {
    type ? postEmployerData() : updateEmployerData();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    getUsersData();
  }, [refresh]);

  return (
    <div className="p-4">
      <div className=" w-full flex justify-end">
        <Modal
          handleChange={handleChange}
          openModal={openModal}
          showModal={showModal}
          closeModal={closeModal}
          form={form}
          setForm={setForm}
          submitValue={submitValue}
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
              editModal={editModal}
              deleteEmployerData={deleteEmployerData}
              users={users}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
