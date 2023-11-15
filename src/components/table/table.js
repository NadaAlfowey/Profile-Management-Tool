import React, { useEffect, useState } from "react";
import "./table.css";
import axios from "axios";
import Delete from "./deleteDB.js";

function Table() {
  useEffect(() => {
    getTableData();
  }, []);
  const [popName, setPopName] = useState(null); // Use useState for popName
  const [data, setData] = useState([]);
  const [isDOpen, setIsDOpen] = useState(false);
  const [selectedID, setselectedID] = useState(null);

  const openMenu = (itemId) => {
    setIsDOpen(true);
    setselectedID(itemId);
  };

  const getTableData = () => {
    const apiUrl = "http://amanimagdi.pythonanywhere.com/profiles/"; // Replace with your API URL
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRow = async() => {
    const apiUrl = `http://amanimagdi.pythonanywhere.com/profiles/${selectedID}`;
    await axios
      .delete(apiUrl)
      .then(() => {
      setData((oldData) => oldData.filter((item) => item.id !== selectedID));
      })
      .catch((err) => {
        console.log(err);
      });
      setIsDOpen(false);
  };
  

  return (
    <div>
      <div>
        <div className="table-container">
          <div className="pretable">
            <h1>Table Name</h1>
            <button>Create</button>
          </div>
          <table>
            <tr>
              <th>Name</th>
              <th>phone</th>
              <th>speed</th>
              <th>pop_name</th>
              <th>dslam_hostname</th>
              <th>frame</th>
              <th>attainable_speed</th>
              <th>Actions</th>
            </tr>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.speed}</td>
                <td>{item.pop_name}</td>
                <td>{item.dslam_hostname}</td>
                <td>{item.frame}</td>
                <td>{item.attainable_speed}</td>
                <td className="actions">
                  <button>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  {/* onClick={() => deleteRow(item.id)} */}
                  <button onClick={() => { openMenu(item.id); setPopName(item.pop_name); }}>
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))}
          </table>
          {isDOpen ? (
            <Delete
            deleteRow={deleteRow}
              closeMenu={() => setIsDOpen(false)}
              name={popName}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Table;
