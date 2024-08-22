const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const fs = require("fs");

// const users = [{ id: 1, name: "Naraa", age: 20 }];
// / gants taashu zuraasn localhost 8000 zaaj bgaa
app.get("/users", (req, res) => {
  //user.json dah dataag oruulj irj bna
  const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  // data n buleg zuil irj baigaagin employeeData objected bgaa data parse hiij avch bn
  const { employeeData } = JSON.parse(data);
  // console.log("getiin employeedata", employeeData);
  //employeeData g localhost8000/users haygruu users objected employeedatag json bolgoj yavuulj bna
  res.status(200).json({ objectUsers: employeeData });
});

app.post("/users", (req, res) => {
  const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  const { employeeData } = JSON.parse(data);

  // Find the maximum existing ID in the array
  const maxId = employeeData.reduce(
    (max, user) => (user.id > max ? user.id : max),
    0
  );
  console.log(maxId);

  // Assign a new ID that is maxId + 1
  const newUser = {
    id: maxId + 1,
    ...req.body,
  };
  employeeData.push(newUser);
  fs.writeFileSync("./users.json", JSON.stringify({ employeeData }));

  res.status(201).json({ addedUser: newUser });
});

app.put("/users/:id", (req, res) => {
  const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  const { employeeData } = JSON.parse(data);

  const findIndex = employeeData.findIndex(
    (employer) => employer.id === parseInt(req.params.id)
  );

  if (findIndex > -1) {
    employeeData[findIndex] = { ...employeeData[findIndex], ...req.body };

    fs.writeFileSync("./users.json", JSON.stringify({ employeeData }));
    res.status(200).json({ changeEmployerData: employeeData[findIndex] });
  } else {
    res.status(400).json({ message: "Not found user id" });
  }
});

app.delete("/users/:id", (req, res) => {
  const data = fs.readFileSync("./users.json", { encoding: "utf8" });
  const { employeeData } = JSON.parse(data);
  const findIndex = employeeData.findIndex(
    (employer) => employer.id === parseInt(req.params.id)
  );
  if (findIndex > -1) {
    const deleteUser = employeeData.splice(findIndex, 1);
    fs.writeFileSync("./users.json", JSON.stringify({ employeeData }));
    res.status(200).json({ user: deleteUser[0] });
  } else {
    res.status(400).json({ message: "Not found user id" });
  }
});

app.listen(8000, () => {
  console.log("server is running at localhost:8000 ");
});
