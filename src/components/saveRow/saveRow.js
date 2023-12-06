import React from "react";
import "./saveRow.css";

function Save({ closeDialog, dataType, onChange, onSubmit,dialogTitle,buttonTitle }) {
  return (
    <div className="big-container">
      <div className="form-container">
        <form id="addForm" onSubmit={onSubmit}>
          <h2>{dialogTitle}</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                className="create-input"
                type="text"
                id="name"
                name="name"
                value={dataType.name}
                onChange={onChange} // Handle input changes
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                className="create-input"
                type="text"
                id="phone"
                name="phone"
                value={dataType.phone}
                onChange={onChange}
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
                value={dataType.speed}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pop_name">Pop Name:</label>
              <input
                className="create-input"
                type="text"
                id="pop_name"
                name="pop_name"
                value={dataType.pop_name}
                onChange={onChange}
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
                value={dataType.dslam_hostname}
                onChange={onChange}
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
                value={dataType.frame}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="attainable_speed">Attainable Speed:</label>
              <input
                className="create-input"
                type="text"
                id="attainable_speed"
                name="attainable_speed"
                value={dataType.attainable_speed}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="buttons">
            <button className="cancle-btn" onClick={closeDialog}>
              Cancle
            </button>
            <button className="add-submit-btn" type="submit">
              {buttonTitle}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Save;
