import React, { useState, useEffect } from "react";
import "./createDB.css";

function Update({ editRow, closeMenu, selectedData }) {

  const [formData, setFormData] = useState({
    id: selectedData.id,
    name: selectedData.name,
    phone: selectedData.phone,
    speed: selectedData.speed,
    pop_name: selectedData.pop_name,
    dslam_hostname: selectedData.dslam_hostname,
    frame: selectedData.frame,
    attainable_speed: selectedData.attainable_speed,
  });

  useEffect(() => {
    setFormData({
      id: selectedData.id,
      name: selectedData.name,
      phone: selectedData.phone,
      speed: selectedData.speed,
      pop_name: selectedData.pop_name,
      dslam_hostname: selectedData.dslam_hostname,
      frame: selectedData.frame,
      attainable_speed: selectedData.attainable_speed,
    });
  }, [selectedData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Include the logic to handle the form submission
    editRow(formData);
    closeMenu();
  };

  return (
    <div className="big-container">
      <div className="form-container">
        <form id="addForm">
          <h2>Edit {formData.pop_name}</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                className="create-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange} // Handle input changes
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                className="create-input"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="speed">Speed:</label>
              <input
                className="create-input"
                type="text"
                id="speed"
                name="speed"
                value={formData.speed}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pop_name">Pop Name:</label>
              <input
                className="create-input"
                type="text"
                id="pop_name"
                name="pop_name"
                value={formData.pop_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dslam_hostname">DSLAM Hostname:</label>
              <input
                className="create-input"
                type="text"
                id="dslam_hostname"
                name="dslam_hostname"
                value={formData.dslam_hostname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="frame">Frame:</label>
              <input
                className="create-input"
                type="text"
                id="frame"
                name="frame"
                value={formData.frame}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="attainable_speed">Attainable Speed:</label>
              <input
                className="create-input"
                type="text"
                id="attainable_speed"
                name="attainable_speed"
                value={formData.attainable_speed}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="buttons">
            <button className="cancle-btn" onClick={closeMenu}>
              Cancle
            </button>
            <button className="add-submit-btn" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
