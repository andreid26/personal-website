import React,{useState} from 'react'
import './styles/Portofolio.css'
import Image from './Image'

function Portofolio() {

    const [image1, setImage1] = useState(1)
    const [image2, setImage2] = useState(0)
    const [imagehover, setImagehover] = useState(false)

    return (
        <div>
            <div className="portofolio_bg">
                <div className="bg_text">
                    <span className="bg_title">Portofolio</span>
                    <span className="bg_signature">A<span className="signature_last">D</span></span>
                </div>
                <svg className="bg_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L1440,288L1440,320L0,320Z"></path></svg>
            </div>
            <div className="portofolio_content">
                {/* First box */}
                <div className="p_box">
                    <div className="p_images" onMouseEnter={() => setImagehover(true)} onMouseLeave={() => setImagehover(false)}>
                        <Image image={image1} setImage={setImage1} numImages={5} functionNum={1} imagehover={imagehover} title={"Travelaunch"} desc={"Traveler's Website"}/>
                    </div>
                    <div className="p_text">
                        <span className="p_text_title"><a href="http://travellaunch.000webhostapp.com/index.php">Travelaunch</a></span>
                        <span className="p_text_description">Travelaunch is a website i have created for the High School's Computer Science Certificate. The website it's made for the travelers, so they can find reviews about their next destination or to leave their feedback about a location they visited. Users can create new topics and start discussions about a specific location, and that makes their lifes much easier, beacause they can find immediately the recommended places to eat, visit or sleep.</span>
                        <div className="p_text_tech">
                            <span>Technologies:</span>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                        <span className="p_text_date">April 2020</span>
                        <svg className="p_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fillOpacity="1" d="M0,256L1440,32L1440,320L0,320Z"></path></svg>
                    </div>
                </div>
                {/* Second box */}
                <div className="p_box">
                    <div className="p_images"><Image image={image2} setImage={setImage2} numImages={2} functionNum={2} imagehover={imagehover} title={"Calculator"} desc={"Personal project"}/></div>
                    <div className="p_text">
                    <span className="p_text_title">Calculator</span>
                        <span className="p_text_description">This simply a personal project i've created as a method to practice my JavaScript skills. It has a realistic design and a basic functionality wrote in pure JS code, without using any framework.</span>
                        <div className="p_text_tech">
                            <span>Technologies:</span>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <span className="p_text_date">October 2020</span>
                        <svg className="p_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fillOpacity="1" d="M0,256L1440,32L1440,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>
            <div className="p_footer">
                <span>Copyright &copy; 2020 with <i className="fas fa-heart" style={{color:"red"}}></i> by Andrei</span>
            </div>
        </div>
    )
}

export default Portofolio
