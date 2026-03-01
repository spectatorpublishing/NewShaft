import React from "react";
import PhotoBanner from "./DormPhotoBanner/PhotoBanner";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  width: "80vw",
}

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: 1000
}

const Modal = ({ dorm_photos, open, onClose }) => {
  if (!open || dorm_photos.length === 0) {
    return null;
  } 
  else {
    return (
      <>
        <div style={OVERLAY_STYLES} onClick={onClose}></div>
        <div style={MODAL_STYLES} onClick={(e) => e.stopPropagation()}>
          <PhotoBanner bannerImages={dorm_photos} isModal={true} />
        </div>
      </>
    )
  }
}


export default Modal