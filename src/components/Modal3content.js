import React from 'react'
import './styles/Modalcontent.css'

function Modal3content() {
    return (
        <div className="modal_content_box">
            <span className="modal_content_text">Besides Web Development, i'm also passionate in Algorithms. I'm comfortable with the following programming languages:</span>
            <ul className="modal_content_list">
                <li><i className="fas fa-arrow-right"></i> C++ (<span style={{fontWeight:"300"}}>I have about 2 years of experience in preparing the final exam of the high school</span>)</li>
                <li><i className="fas fa-arrow-right"></i> Python (<span style={{fontWeight:"300"}}>In the process of learning at the faculty</span>) </li>
            </ul>
        </div>
    )
}

export default Modal3content
