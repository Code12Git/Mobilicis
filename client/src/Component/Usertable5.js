import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

const UserTable5 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/users/top-cities")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3 className="text-center my-3">
        Show the data of top 10 cities which have the highest number of users
        and their average income.
      </h3>
      <table className="table my-4">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">User Count</th>
            <th scope="col">Average Income</th>
          </tr>
        </thead>
        <tbody>
          {users.map((city) => (
            <tr key={city.city}>
              <td>{city.city}</td>
              <td>{city.count}</td>
              <td>{city.average_income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable5;
