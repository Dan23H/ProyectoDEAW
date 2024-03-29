import React from "react";

export function ModalComments({ visible, onClose }) {
  return (
    <>
      {visible ? (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Título del modal</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={onClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Contenido del modal aquí...</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onClose}
                >
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
