import React, { useEffect, useState } from "react";
import "./profiles.css";
import axios from "axios";
import Delete from "../../components/deleteDB/deleteDB";
import Save from "../../components/saveDB/saveDB";

function Profiles() {
  const apiUrl = `http://amanimagdi.pythonanywhere.com/profiles/`;
  useEffect(() => {
    getTableData();
  }, []);
  const [popName, setPopName] = useState(null); // Use useState for popName
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
  // Get all profiles
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
  const openDeleteMenu = (item) => {
    setIsDOpen(true);
    setSelectedProfile(item);
  };
  const deleteRow = () => {
    const apiUrl = `http://amanimagdi.pythonanywhere.com/profiles/${selectedProfile.id}/`;
    axios
      .delete(apiUrl)
      .then(() => {
        setIsDOpen(false);
        getTableData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Open SaveDialog
  const openSaveDialog = (dialogTitle, submitButtonName, item) => {
    setSaveDialog({
      dialogTitle: dialogTitle,
      submitButtonName: submitButtonName,
      isDialogOpen: true,
    });
    item && setSelectedProfile(item);
  };
  const handleCloseSaveDialog = () => {
    setSaveDialog({
      dialogTitle: "",
      submitButtonName: "",
      isDialogOpen: false,
    });
    setSelectedProfile({});
  };
  // onInputChange in The Save Dialog
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
  const handleProfileUpdates = (e) => {
    e.preventDefault();
    const apiUrl = `http://amanimagdi.pythonanywhere.com/profiles/${selectedProfile.id}/`;
    axios
      .put(apiUrl, selectedProfile)
      .then((res) => {
        getTableData();
        handleCloseSaveDialog();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const createNewProfile = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, newProfile)
      .then((res) => {
        getTableData();
        handleCloseSaveDialog();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div>
        <div className="table-container">
          <div className="pretable">
            <h1>Table Name</h1>
            <button
              onClick={() => openSaveDialog("Create New Record", "Create")}
            >
              Create
            </button>
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
                      setPopName(item.pop_name);
                    }}
                  >
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
