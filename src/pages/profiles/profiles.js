import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profiles.css";
import Delete from "../../components/deleteRow/deleteRow";
import Save from "../../components/saveRow/saveRow";
import instance from "../../interceptors/interceptors";

function Profiles() {
  // Initialize state variables
  const [name, setName] = useState(null);
  const [data, setData] = useState([]);
  const [isDOpen, setIsDOpen] = useState(false);
  const [saveDialog, setSaveDialog] = useState({
    dialogTitle: "",
    submitButtonName: "",
    isDialogOpen: false,
  });
  const [newProfile, setnewProfile] = useState({
    name: "",
    phone: "",
    speed: "",
    pop_name: "",
    dslam_hostname: "",
    frame: "",
    attainable_speed: "",
  });
  // Selected Profile
  const [selectedProfile, setSelectedProfile] = useState({});

  // Fetch data on component mount
  useEffect(() => {
    getTableData();
  }, []);

  // Fetch all profiles
  const getTableData = () => {
    instance
      .get("profiles/")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Open delete confirmation dialog
  const openDeleteMenu = (item) => {
    setIsDOpen(true);
    setSelectedProfile(item);
  };

  // Delete a profile
  const deleteRow = () => {
    instance
      .delete(`profiles/${selectedProfile.id}/`)
      .then(() => {
        setIsDOpen(false);
        getTableData();
      })
      .catch((err) => {
        if (err.response.status === 400) {
          console.error("400 Error: Incorrect delete request syntax");
        } else console.log(err);
      });
  };

  // Open SaveDialog for creating or updating profiles
  const openSaveDialog = (dialogTitle, submitButtonName, item) => {
    setSaveDialog({
      dialogTitle: dialogTitle,
      submitButtonName: submitButtonName,
      isDialogOpen: true,
    });
    item && setSelectedProfile(item);
  };

  // Close SaveDialog
  const handleCloseSaveDialog = () => {
    setSaveDialog({
      dialogTitle: "",
      submitButtonName: "",
      isDialogOpen: false,
    });
    setSelectedProfile({});
  };

  // Handle input changes in the SaveDialog
  const handleInputChange = (e) => {
    saveDialog.submitButtonName === "Create"
      ? setnewProfile({
          ...newProfile,
          [e.target.name]: e.target.value,
        })
      : setSelectedProfile({
          ...selectedProfile,
          [e.target.name]: e.target.value,
        });
  };

  // Handle profile updates
  const handleProfileUpdates = (e) => {
    e.preventDefault();
    instance
      .put(`profiles/${selectedProfile.id}/`, selectedProfile)
      .then((res) => {
        getTableData();
        handleCloseSaveDialog();
      })
      .catch((err) => {
        if (err.response.status === 400) {
          console.error("400 Error: Incorrect Update request syntax");
        } else console.log(err.message);
      });
  };

  // Create a new profile
  const createNewProfile = (e) => {
    e.preventDefault();
    instance
      .post("profiles/", newProfile)
      .then((res) => {
        getTableData();
        handleCloseSaveDialog();
      })
      .catch((err) => {
        if (err.response.status === 400) {
          console.error("400 Error: Incorrect create request syntax");
        } else console.log(err.message);
      });
  };

  return (
    <div>
      <div>
        <div className="table-container">
          <div className="pretable">
            <h1>Table Name</h1>
            {/* Button to open the SaveDialog for creating a new record */}
            <button
              onClick={() => openSaveDialog("Create New Record", "Create")}
            >
              Create
            </button>
          </div>
          {/* Table header */}
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
            {/* Map through data to render table rows */}
            {data.map((item, i) => (
              <tr key={i}>
                {/* Display profile information in table cells */}
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.speed}</td>
                <td>{item.pop_name}</td>
                <td>{item.dslam_hostname}</td>
                <td>{item.frame}</td>
                <td>{item.attainable_speed}</td>
                {/* Actions column with buttons for updating and deleting */}
                <td className="actions">
                  <button
                    onClick={() =>
                      openSaveDialog(`Update ${item.pop_name}`, "Update", item)
                    }
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => {
                      openDeleteMenu(item);
                      setName(item.name);
                    }}
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))}
          </table>
          {/* Render the Delete and Save dialogs when needed */}
          {isDOpen ? (
            <Delete
              deleteRow={deleteRow}
              closeMenu={() => setIsDOpen(false)}
              name={name}
            />
          ) : null}
          {saveDialog.isDialogOpen ? (
            <Save
              onSubmit={
                saveDialog.submitButtonName === "Create"
                  ? createNewProfile
                  : handleProfileUpdates
              }
              closeDialog={handleCloseSaveDialog}
              dataType={
                saveDialog.submitButtonName === "Create"
                  ? newProfile
                  : selectedProfile
              }
              onChange={handleInputChange}
              dialogTitle={saveDialog.dialogTitle}
              buttonTitle={saveDialog.submitButtonName}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Profiles;
