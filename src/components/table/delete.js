import React from 'react'

function Delete() {
    return (
        <div className="modal">
            <form className="modal-content">
                <div className="container">
                    <h1>Delete Row</h1>
                    <p>Are you sure you want to delete the row?</p>

                    <div className="clearfix">
                        <button type="button" id="cancelbtn" className="deleteFormB">Cancel</button>
                        <button type="button" id="deletebtn" className="deleteFormB">Delete</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Delete