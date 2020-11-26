import React from 'react'
import './styles/Modalcontent.css'

function Modal1content() {
    return (
        <div className="modal_content_box">
            <span className="modal_content_text">I can create responsive and modern Web Design using the best technologies. I usually use ReactJS on creating a website, but rarely I can also use jQuery.</span>
            <ul className="modal_content_list">
                <li><i className="fas fa-arrow-right"></i> HTML</li>
                <li><i className="fas fa-arrow-right"></i> CSS (Bootstrap)</li>
                <li><i className="fas fa-arrow-right"></i> JavaScript (ReactJS/<span style={{fontWeight:"300"}}>jQuery</span>)</li>
            </ul>
        </div>
    )
}

export default Modal1content
