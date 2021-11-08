import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const BaseURL = "http://localhost:3006/users";
  const [data, setData] = useState([]);

  const retriveData = async () => {
    const response = await axios.get(BaseURL);
    return response.data;
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retriveData();
      if (allUsers) setData(allUsers);
    };
    getAllUsers();
  }, []);

  return (
    <div className="container">
        <table id="customers">
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Ip address</th>
            </tr>
          </thead>
          <tbody>
          {data.map((user, i) => (
            <tr key={i}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.ip_address}</td>
            </tr>
          ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
