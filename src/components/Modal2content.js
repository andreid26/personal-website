import React from 'react'
import './styles/Modalcontent.css'

function Modal2content() {
    return (
        <div className="modal_content_box">
            <span className="modal_content_text">When it comes to Backend Web Development i don't have that much experience, but i worked on some projects in PHP and i can say that i'm comfortable with it. Besides PHP, i'm in the process of learning NodeJS in order to be able in associating it with ReactJS.</span>
            <ul className="modal_content_list">
                <li><i className="fas fa-arrow-right"></i> PHP <span style={{fontWeight:"300"}}>(without any framework)</span></li>
                <li><i className="fas fa-arrow-right"></i> NodeJS <span style={{fontWeight:"300"}}>(basics)</span></li>
                <li><i className="fas fa-arrow-right"></i> SQL</li>
            </ul>
        </div>
    )
}

export default Modal2content
