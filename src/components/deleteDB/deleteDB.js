import React from 'react'
import "./deleteDB.css";

function Delete({closeMenu,deleteRow,name}) {
    return (
        <div className="modal">
            <form className="modal-content">
                <div className="containerDD">
                    <h1>Delete Row</h1>
                    <p>Are you sure you want to delete {name}?</p>

                    <div className="clearfix">
                        <button type="button" id="cancelbtn" className="deleteFormB" onClick={closeMenu}>Cancel</button>
                        <button type="button" id="deletebtn" className="deleteFormB" onClick={deleteRow}>Delete</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Delete