import React from 'react';

const ConfirmationModal = ({title, message, closeModal, deleteAction, modalData}) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                <label onClick={()=>deleteAction(modalData)} htmlFor="confirmation-modal" className="btn">Delete</label>
                <label onClick={closeModal} htmlFor="confirmation-modal" className="btn">Close!</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;