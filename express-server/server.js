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

  const newUser = {
    id: employeeData.length + 1,
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
    employeeData[findIndex].age = req.body.age;

    fs.writeFileSync("./users.json", JSON.stringify({ employeeData }));
    res.status(200).json({ changeEmplyerData: employeeData[findIndex] });
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
