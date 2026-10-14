import React, { useState } from "react";
import styled from "styled-components";
import illustration from "../assets/review-popup-illustration.svg";

const REVIEW_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfhyeQ-j-tdQpqCeyZ9OW_uhE_Xjj4CK49guJuSE_z-aXx4ow/viewform";
const SUBMITTED_KEY = "shaftReviewPopupSubmitted";
const POPUP_BLUE = "#2F668E";

const scaled = px => `calc(${px} * var(--u))`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(126, 132, 139, 0.35);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PopupBox = styled.div`
  --u: clamp(0.65px, calc(100vw / 1920), 1px);
  box-sizing: border-box;
  position: relative;
  width: ${scaled(674)};
  height: ${scaled(297)};
  background: ${props => props.theme.white};
  border: 1px solid ${POPUP_BLUE};
  box-shadow: 0px ${scaled(4)} ${scaled(17.6)} rgba(0, 0, 0, 0.25);
  border-radius: ${scaled(20)};
  overflow: hidden;

  @media (max-width: 700px) {
    --u: 1px;
    width: 90%;
    height: auto;
    padding: 3.5rem 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
`

const Illustration = styled.img`
  position: absolute;
  left: ${scaled(26.4)};
  top: ${scaled(62.4)};
  width: ${scaled(264)};
  height: ${scaled(172)};

  @media (max-width: 700px) {
    position: static;
    width: 70%;
    max-width: 264px;
    height: auto;
  }
`

const Heading = styled.h2`
  position: absolute;
  width: ${scaled(329)};
  left: ${scaled(305)};
  top: ${scaled(73)};
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${scaled(28)};
  line-height: ${scaled(35)};
  text-align: center;
  color: ${POPUP_BLUE};

  @media (max-width: 700px) {
    position: static;
    width: 100%;
    font-size: 22px;
    line-height: 28px;
  }
`

const ReviewButton = styled.a`
  box-sizing: border-box;
  position: absolute;
  width: ${scaled(316)};
  height: ${scaled(55)};
  left: ${scaled(312)};
  top: ${scaled(201)};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${POPUP_BLUE};
  border-radius: ${scaled(15)};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${scaled(24)};
  line-height: ${scaled(29)};
  text-align: center;
  color: ${props => props.theme.white};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.white};
    opacity: 0.9;
  }

  @media (max-width: 700px) {
    position: static;
    width: 100%;
    max-width: 316px;
    font-size: 20px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  left: ${scaled(628)};
  top: ${scaled(26)};
  width: ${scaled(19)};
  height: ${scaled(19)};
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 0;
  overflow: visible;

  @media (max-width: 700px) {
    left: auto;
    right: 20px;
    top: 20px;
  }
`

const hasSubmitted = () => {
  try {
    return localStorage.getItem(SUBMITTED_KEY) === "true";
  } catch (e) {
    return false;
  }
}

const ReviewPopup = () => {
  const [open, setOpen] = useState(() => !hasSubmitted());

  if (!open) {
    return null;
  }

  const handleSubmit = () => {
    try {
      localStorage.setItem(SUBMITTED_KEY, "true");
    } catch (e) {}
    setOpen(false);
  }

  return (
    <Overlay>
      <PopupBox role="dialog" aria-modal="true" aria-labelledby="review-popup-title">
        <CloseButton aria-label="Close" onClick={() => setOpen(false)}>
          <svg width="100%" height="100%" viewBox="0 0 19 19" fill="none" overflow="visible">
            <path d="M0 0L19 19M19 0L0 19" stroke={POPUP_BLUE} strokeWidth="2.41667" strokeLinecap="round" />
          </svg>
        </CloseButton>
        <Illustration src={illustration} alt="" />
        <Heading id="review-popup-title">
          Remember searching for housing reviews? Your turn to help!
        </Heading>
        <ReviewButton
          href={REVIEW_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSubmit}
        >
          Submit Review &amp; Rating
        </ReviewButton>
      </PopupBox>
    </Overlay>
  )
}

export default ReviewPopup
