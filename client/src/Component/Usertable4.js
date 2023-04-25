import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

const UserTable4 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/users4")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3 className="text-center my-3">
        Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose
        email does not include any digit.
      </h3>
      <table className="table my-4">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Income</th>
            <th scope="col">City</th>
            <th scope="col">Car</th>
            <th scope="col">Quote</th>
            <th scope="col">Phone Price</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.income}</td>
              <td>{user.city}</td>
              <td>{user.car}</td>
              <td>{user.quote}</td>
              <td>{user.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable4;
