"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch("http://localhost:8888/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("data bol ", users);

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="p-10">
      {users.map((user, userImdex) => {
        return (
          <div
            key={userImdex}
            className="m-auto flex items-center justify-center gap-4 py-2"
          >
            <div className="text-green-600">
              <span className="">Name :</span>
              {user?.name}
            </div>
            <div className="text-red-600">
              <span className="">Age :</span>
              {user?.age}
            </div>
          </div>
        );
      })}
    </div>
  );
}
