import React, {useState,useEffect} from 'react'
import './styles/About.css'
import aboutImg from './images/about.png'
import {Link} from 'react-scroll'
import {IoIosDesktop} from 'react-icons/io'
import {GiPaintRoller} from 'react-icons/gi'
import {AiOutlineCode} from 'react-icons/ai'
import Modals from './Modals'
import frontendImg from './images/frontend.png'
import backendImg from './images/backend.png'
import othersImg from './images/others.png'
import Modal1content from './Modal1content'
import Modal2content from './Modal2content'
import Modal3content from './Modal3content'

function About() {

    useEffect(() => {
        setTimeout(() => {
            let box = document.querySelector('.svg_about')
            if(box){
                box.classList.add('svg_about_opacity')
            }
        }, 500);
    }, []);

    const [modalShow1, setModalShow1] = useState(false)
    const [modalShow2, setModalShow2] = useState(false)
    const [modalShow3, setModalShow3] = useState(false)

    return (
        <div className="about__container">
            <div className={`${modalShow1 || modalShow2 || modalShow3 ? "modal_dark" : ""}`}></div>
            <div className="svg_box">
                <div className="svg_about">
                    <div className="svg_about_image"></div>
                    <div className="about_box_description">
                        <span><a href="https://github.com/andreid26"><i className="fab fa-github" style={{color:"#101010"}}></i></a></span>
                        <span><a href="https://www.linkedin.com/in/andrei-dr%C4%83gulin-3a4977200/"><i className="fab fa-linkedin" style={{color:"#0073b1"}}></i></a></span>
                        <span><a href="https://www.instagram.com/andreidragulin26/"><i className="fab fa-instagram" style={{color:"#e63561"}}></i></a></span>
                        <span><a href="https://www.facebook.com/andrei.dragulin"><i className="fab fa-facebook-square" style={{color:"#2c92f2"}}></i></a></span>
                    </div>                   
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,128L120,154.7C240,181,480,235,720,234.7C960,235,1200,181,1320,154.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            </div>
            <div className="about_content_svg">
                <svg width="357" height="40" viewBox="0 0 357 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="-0.871994" y="0.815979" width="358" height="50" fill="black">
                        <rect fill="white" x="-0.871994" y="0.815979" width="358" height="50"/>
                        <path d="M38.392 36.032H13.432L8.05601 48H3.12801L23.608 3.19998H28.28L48.76 48H43.768L38.392 36.032ZM36.664 32.192L25.912 8.12798L15.16 32.192H36.664Z"/>
                        <path d="M84.395 24.896C87.339 25.536 89.6003 26.816 91.179 28.736C92.8003 30.6133 93.611 33.0453 93.611 36.032C93.611 39.872 92.1817 42.8373 89.323 44.928C86.507 46.976 82.3257 48 76.779 48H56.171V3.19998H75.499C80.491 3.19998 84.3523 4.20264 87.083 6.20798C89.8563 8.21331 91.243 11.0506 91.243 14.72C91.243 17.1946 90.6243 19.3066 89.387 21.056C88.1923 22.7626 86.5283 24.0426 84.395 24.896ZM60.907 7.10398V23.36H75.179C78.8057 23.36 81.6003 22.6773 83.563 21.312C85.5257 19.904 86.507 17.8773 86.507 15.232C86.507 12.5866 85.5257 10.5813 83.563 9.21598C81.6003 7.80798 78.8057 7.10398 75.179 7.10398H60.907ZM76.715 44.096C80.7257 44.096 83.755 43.4133 85.803 42.048C87.851 40.6826 88.875 38.5493 88.875 35.648C88.875 30.0586 84.8217 27.264 76.715 27.264H60.907V44.096H76.715Z"/>
                        <path d="M124.005 48.384C119.568 48.384 115.536 47.4026 111.909 45.44C108.325 43.4346 105.509 40.704 103.461 37.248C101.456 33.792 100.453 29.9093 100.453 25.6C100.453 21.2906 101.456 17.408 103.461 13.952C105.509 10.496 108.325 7.78665 111.909 5.82398C115.536 3.81865 119.568 2.81598 124.005 2.81598C128.442 2.81598 132.432 3.79731 135.973 5.75998C139.557 7.72265 142.373 10.4533 144.421 13.952C146.469 17.408 147.493 21.2906 147.493 25.6C147.493 29.9093 146.469 33.8133 144.421 37.312C142.373 40.768 139.557 43.4773 135.973 45.44C132.432 47.4026 128.442 48.384 124.005 48.384ZM124.005 44.16C127.546 44.16 130.746 43.3706 133.605 41.792C136.464 40.1706 138.704 37.952 140.325 35.136C141.946 32.2773 142.757 29.0986 142.757 25.6C142.757 22.1013 141.946 18.944 140.325 16.128C138.704 13.2693 136.464 11.0506 133.605 9.47198C130.746 7.85064 127.546 7.03998 124.005 7.03998C120.464 7.03998 117.242 7.85064 114.341 9.47198C111.482 11.0506 109.221 13.2693 107.557 16.128C105.936 18.944 105.125 22.1013 105.125 25.6C105.125 29.0986 105.936 32.2773 107.557 35.136C109.221 37.952 111.482 40.1706 114.341 41.792C117.242 43.3706 120.464 44.16 124.005 44.16Z"/>
                        <path d="M176.156 48.384C170.354 48.384 165.831 46.72 162.589 43.392C159.346 40.064 157.725 35.2213 157.725 28.864V3.19998H162.46V28.672C162.46 33.8773 163.634 37.76 165.98 40.32C168.327 42.88 171.719 44.16 176.156 44.16C180.636 44.16 184.05 42.88 186.396 40.32C188.743 37.76 189.917 33.8773 189.917 28.672V3.19998H194.525V28.864C194.525 35.2213 192.903 40.064 189.661 43.392C186.461 46.72 181.959 48.384 176.156 48.384Z"/>
                        <path d="M216.625 7.29598H200.881V3.19998H237.105V7.29598H221.361V48H216.625V7.29598Z"/>
                        <path d="M307.949 3.19998V48H303.405V12.16L285.805 42.304H283.565L265.965 12.352V48H261.421V3.19998H265.325L284.781 36.416L304.045 3.19998H307.949Z"/>
                        <path d="M354.226 43.904V48H322.546V3.19998H353.266V7.29598H327.282V23.232H350.45V27.264H327.282V43.904H354.226Z"/>
                    </mask>
                    <path d="M38.392 36.032H13.432L8.05601 48H3.12801L23.608 3.19998H28.28L48.76 48H43.768L38.392 36.032ZM36.664 32.192L25.912 8.12798L15.16 32.192H36.664Z" stroke="#0D5FD1" strokeWidth="4" mask="url(#path-1-outside-1)"/>
                    <path d="M84.395 24.896C87.339 25.536 89.6003 26.816 91.179 28.736C92.8003 30.6133 93.611 33.0453 93.611 36.032C93.611 39.872 92.1817 42.8373 89.323 44.928C86.507 46.976 82.3257 48 76.779 48H56.171V3.19998H75.499C80.491 3.19998 84.3523 4.20264 87.083 6.20798C89.8563 8.21331 91.243 11.0506 91.243 14.72C91.243 17.1946 90.6243 19.3066 89.387 21.056C88.1923 22.7626 86.5283 24.0426 84.395 24.896ZM60.907 7.10398V23.36H75.179C78.8057 23.36 81.6003 22.6773 83.563 21.312C85.5257 19.904 86.507 17.8773 86.507 15.232C86.507 12.5866 85.5257 10.5813 83.563 9.21598C81.6003 7.80798 78.8057 7.10398 75.179 7.10398H60.907ZM76.715 44.096C80.7257 44.096 83.755 43.4133 85.803 42.048C87.851 40.6826 88.875 38.5493 88.875 35.648C88.875 30.0586 84.8217 27.264 76.715 27.264H60.907V44.096H76.715Z" stroke="#0D5FD1" strokeWidth="4" mask="url(#path-1-outside-1)"/>
                    <path d="M124.005 48.384C119.568 48.384 115.536 47.4026 111.909 45.44C108.325 43.4346 105.509 40.704 103.461 37.248C101.456 33.792 100.453 29.9093 100.453 25.6C100.453 21.2906 101.456 17.408 103.461 13.952C105.509 10.496 108.325 7.78665 111.909 5.82398C115.536 3.81865 119.568 2.81598 124.005 2.81598C128.442 2.81598 132.432 3.79731 135.973 5.75998C139.557 7.72265 142.373 10.4533 144.421 13.952C146.469 17.408 147.493 21.2906 147.493 25.6C147.493 29.9093 146.469 33.8133 144.421 37.312C142.373 40.768 139.557 43.4773 135.973 45.44C132.432 47.4026 128.442 48.384 124.005 48.384ZM124.005 44.16C127.546 44.16 130.746 43.3706 133.605 41.792C136.464 40.1706 138.704 37.952 140.325 35.136C141.946 32.2773 142.757 29.0986 142.757 25.6C142.757 22.1013 141.946 18.944 140.325 16.128C138.704 13.2693 136.464 11.0506 133.605 9.47198C130.746 7.85064 127.546 7.03998 124.005 7.03998C120.464 7.03998 117.242 7.85064 114.341 9.47198C111.482 11.0506 109.221 13.2693 107.557 16.128C105.936 18.944 105.125 22.1013 105.125 25.6C105.125 29.0986 105.936 32.2773 107.557 35.136C109.221 37.952 111.482 40.1706 114.341 41.792C117.242 43.3706 120.464 44.16 124.005 44.16Z" stroke="#0D5FD1" strokeWidth="4" mask="url(#path-1-outside-1)"/>
                    <path d="M176.156 48.384C170.354 48.384 165.831 46.72 162.589 43.392C159.346 40.064 157.725 35.2213 157.725 28.864V3.19998H162.46V28.672C162.46 33.8773 163.634 37.76 165.98 40.32C168.327 42.88 171.719 44.16 176.156 44.16C180.636 44.16 184.05 42.88 186.396 40.32C188.743 37.76 189.917 33.8773 189.917 28.672V3.19998H194.525V28.864C194.525 35.2213 192.903 40.064 189.661 43.392C186.461 46.72 181.959 48.384 176.156 48.384Z" stroke="#0D5FD1" strokeWidth="4" mask="url(#path-1-outside-1)"/>
                    <path d="M216.625 7.29598H200.881V3.19998H237.105V7.29598H221.361V48H216.625V7.29598Z" stroke="#0D5FD1" strokeWidth="4" mask="url(#path-1-outside-1)"/>
                    <path d="M307.949 3.19998V48H303.405V12.16L285.805 42.304H283.565L265.965 12.352V48H261.421V3.19998H265.325L284.781 36.416L304.045 3.19998H307.949Z" stroke="#0D5FD1" strokeWidth="4" mask="url(#path-1-outside-1)"/>
                    <path d="M354.226 43.904V48H322.546V3.19998H353.266V7.29598H327.282V23.232H350.45V27.264H327.282V43.904H354.226Z" stroke="#0D5FD1" strokeWidth="4" mask="url(#path-1-outside-1)"/>
                </svg>
            </div>
            <div className="about_arrow">
                <Link to="content_about" smooth={true} duration={1000}><i className="fas fa-angle-double-down"></i></Link>
                </div>
            <div className="about_content">
                <span id="content_about"></span>
                <div className="about_content_image">
                    <img src={aboutImg} alt=""/>
                </div>
                <div className="about_content_infos">
                    <div className="text_box" >
                        <h1>Who am I?</h1>
                        <span>My name is Andrei Drăgulin and I'm a 19 years old Computer Science student from Romania. I have many passions, programming being one of the most important ones for me. My first interaction with it was in ninth grade, when i started learning C++ at the High School.  It wasn't easy for me, especially because i had never heard of that programming language before, but slowly i started to understand how it works. A few months later, i discovered a YouTube channel where a guy was teaching people Web Development. Since then, I've learned a great many things about Frontend Development, and in the eleventh grade i decided to get into Backend. I developed two websites with databases, one of them being made for the High School's Computer Science Certificate and written in PHP. As i was searching for new technologies to learn, i came across React JS, which caught my attention and i started discovering its features alongside my friend. It didn't take much to realize that working as a team was much more productive.</span>
                        <Link to="skills_container" smooth={true} duration={1000}><button className="text_box_button">Check my skills</button></Link>
                    </div>
                </div>
            </div>
            <div className="about_skills">
                <div className="about_svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff" fillOpacity="1" d="M0,160L1440,96L1440,320L0,320Z"></path>
                    </svg>
                    <div className="skills_title" id="skills_container">
                        <div className="skills_title_bg">
                            <span>My</span>
                            <span>Skills</span>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <div className="skills_box_grid_1">
                        <div className="skills_box_1">
                            <div className="box__header">
                                <span><GiPaintRoller/></span>
                            </div>
                            <div className="box__footer">
                                <span className="footer_title">Frontend</span>
                                <span className="footer_title_2">Web Development</span>
                                <button className="footer_btn" onClick={() => setModalShow1(true)}>More</button>
                                <Modals modalShow={modalShow1} setModalShow={setModalShow1} title={"Frontend Web Development"} icon={"fas fa-paint-roller"} image={frontendImg} content={<Modal1content/>}></Modals>
                            </div>
                        </div>
                    </div>
                    <div className="skills_box_grid_2">
                        <div className="skills_box_2">
                            <div className="box__header">
                                <span><IoIosDesktop/></span>
                            </div>
                            <div className="box__footer">
                                <span className="footer_title">Backend</span>
                                <span className="footer_title_2">Web Development</span>
                                <button className="footer_btn" onClick={() => setModalShow2(true)}>More</button>
                                <Modals modalShow={modalShow2} setModalShow={setModalShow2} title={"Backend Web Development"} icon={"fas fa-server"} image={backendImg} content={<Modal2content/>}/>
                            </div>
                        </div>
                    </div>
                    <div className="skills_box_grid_3">
                        <div className="skills_box_3">
                            <div className="box__header">
                                <span><AiOutlineCode/></span>
                            </div>
                            <div className="box__footer">
                                <span className="footer_title">Other</span>
                                <span className="footer_title_2">Technologies</span>
                                <button className="footer_btn" onClick={() => setModalShow3(true)}>More</button>
                                <Modals modalShow={modalShow3} setModalShow={setModalShow3} title={"Other technologies"} icon={"fas fa-code"} image={othersImg} content={<Modal3content/>}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_footer">
                <span>Copyright &copy; 2020 with <i className="fas fa-heart" style={{color:"red"}}></i> by Andrei</span>
            </div>
        </div>
    )
}

export default About
