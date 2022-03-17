import React from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const styles = {
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '100',
    bottom: '0',
    textAlign: 'center',
    display: 'flex'
  },
  btn: {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    userSelect: 'none',
    fontSize: '1rem',
    color: 'white',
    fontWeight: '400',
    marginTop: 'auto',
    marginBottom: 'auto',
    padding: '1rem'
  },
  left: {
    left: '0',
    marginRight: 'auto'
  },
  right: {
    right: '0',
    marginLeft: 'auto'
  }
}

export default function Buttons (props) {
  const prevBtnStyle = Object.assign({}, styles.btn, styles.left)
  const nextBtnStyle = Object.assign({}, styles.btn, styles.right)
  const { index, total, loop, prevHandler, nextHandler } = props
  return (
    <div style={styles.wrapper}>
      { (loop || index !== 0) && (
        <FontAwesomeIcon style={prevBtnStyle} onClick={prevHandler} icon={faChevronLeft} />
      )}
      { (loop || index !== total - 1) && (
        <FontAwesomeIcon style={nextBtnStyle} onClick={nextHandler} icon={faChevronRight} />
      )}
    </div>
  )
}

Buttons.propTypes = {
  index: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  prevHandler: propTypes.func,
  nextHandler: propTypes.func
}