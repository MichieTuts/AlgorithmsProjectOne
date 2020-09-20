import React from "react";
import AnimateModal from "../../Utils/AnimateModal";

import "./PrimaryModal.scss";

function PrimaryModal(props) {
    const Overlay = React.useRef(null);
    const Modal = React.useRef(null);

    const CloseModal = (action) => {
        if(!Overlay.current || !Modal.current) return;

        const OverlayClose = () => {
            typeof action === "function" && action();
            AnimateModal(Overlay.current, () => props.CloseCallback(), "OverlayFadeOut")            
        }

        AnimateModal(Modal.current, OverlayClose, "ModalFadeOut")
    }

    return (
        <>
            <div className="Overlay" ref={Overlay} 
                onClick={CloseModal}
            ></div>
            <div className="PrimaryModal"  ref={Modal} style={props.style} {...props.ModalOptions}>
                <h2 className="ModalHeader">
                    {props.HeaderTitle || "Header"}
                    <span className="CloseButton" onClick={CloseModal}>x</span>
                </h2>

                <div className="ModalContentContainer">
                    <div className="ModalContent">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrimaryModal;
