import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const server = express();
const PORT = 8888;

server.use(cors());
server.use(bodyParser.json());

const users = [
  { id: 1, name: "gereltbaatar", age: 19 },
  { id: 2, name: "gerlee", age: 18 },
];

/////////////////////////////////////////////////////////////////////////

server.get("/users", (request, response) => {
  response.send(users);
  console.log("get shuu za");
});

/////////////////////////////////////////////////////////////////////////

server.post("/users", (request, response) => {
  const { name, age } = request.body;

  console.log(name, age);

  const id = Date.now().toString();

  const isString = (value) => {
    return typeof value === "string";
  };

  try {
    if (!name || !age) {
      response.send("name or age not found");
    } else if (isString(name)) {
      response.send("name is not string");
    } else {
    }
    const newUser = { id, name, age };
    users.push(newUser);
    response.send("amjiltai nemegdlee");
  } catch (error) {
    console.error(error);
  }
});

/////////////////////////////////////////////////////////////////////////

server.put("/users", (request, response) => {
  const { id, newName, newAge } = request.body;

  const user = users.find((user) => user.id === id);
  console.log(user);

  if (user) {
    user.name = newName;
    response.send("Нэр амжилттай шинэчлэгдлээ");
  } else {
    response.status(404).send("Хэрэглэгч олдсонгүй");
  }
});

/////////////////////////////////////////////////////////////////////////

server.delete("/users", (request, response) => {
  const { id } = request.body;
  // console.log(users[1].id, "users id");

  const user = users.find((user) => user.id === id);
  console.log(user.id);

  if (users) {
    response.send("iim id-tai user baina");
  } else {
    response.send("iim id-tai user alga baina");
  }
});

/////////////////////////////////////////////////////////////////////////

server.listen(PORT, () => {
  console.log(`server is running in http://localhost:${PORT}`);
});
