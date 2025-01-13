import React from "react";

const Modal = ({ setModal }) => {
  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered"  style={{ height: "500px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={() => setModal(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">No items in the cart!</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
