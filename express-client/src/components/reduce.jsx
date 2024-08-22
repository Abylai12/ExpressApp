import React from "react";

const Reduce = () => {
  const arr = [
    { id: 1, name: "Alice" },
    { id: 5, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 10, name: "David" },
  ];

  const maxId = arr.reduce((max, user) => {
    console.log(`Current max: ${max}, Current user ID: ${user}`);
    return user.id > max ? user.id : max;
  }, 0);

  console.log("Final max ID:", maxId);

  return <div>hi</div>;
};

export default Reduce;
