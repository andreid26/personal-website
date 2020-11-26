import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './styles/Modal.css'

function Modals({modalShow, setModalShow, title, icon, image, content}) {
    return (
        <div>
            <Modal className="modal__box" show={modalShow} animation={true} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={() => setModalShow(false)}>
                <Modal.Header className="modal_header">
                    <div className="modal_header_left">
                        <span className="modal_header_element"><i className={icon}></i></span>
                        <span className="modal_header_element">{title}</span>
                    </div>
                    <span className="modal_header_element modal_close" onClick={() => setModalShow(false)}><i className="fas fa-times"></i></span>
                </Modal.Header>
                <Modal.Body className="modal_body">
                    <div className="modal_image" style={{backgroundImage:`url(${image})`}}></div>
                    <div className="modal_text">{content}</div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Modals
