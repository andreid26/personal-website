import React,{useEffect} from 'react'
import './styles/Home.css'
import { Link } from 'react-router-dom'

function Home({linkStyle}) {

    useEffect(() => {
        setTimeout(() => {
            let box = document.querySelector('.infos_box')
            if(box){
                box.classList.add('infos_box_opacity')
            }
        }, 500);
    }, []);

    return (
        <div className="home_container">
            <div className="home_informations">
            <svg className="svg_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#34ebcc" fillOpacity="1" d="M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,277.3C1120,299,1280,309,1360,314.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#34ebcc" fillOpacity="0.4" d="M0,128L48,149.3C96,171,192,213,288,245.3C384,277,480,299,576,277.3C672,256,768,192,864,181.3C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <div className="infos_box">
                    <Link to="/" style={linkStyle}><h1 className="infos_name">Andrei Drăgulin</h1></Link>
                    <span className="infos_description">Web Developer</span>
                    <span className="infos_about">Hello, dear visitor! My name is Andrei and I'm a 19 years old Computer Science student from Romania. If you want to know more about me, press the button below.</span>
                    <Link to="/about" style={linkStyle}>
                        <button className="infos_button">
                            More
                            <i className="fas fa-arrow-right"></i>
                            <div className="slide"><i className="far fa-comment-alt"></i></div>
                        </button>
                    </Link>
                </div>
                <div className="home_footer">
                    <span>Copyright &copy; 2020 with <i className="fas fa-heart" style={{color:"red"}}></i> by Andrei</span>
                </div>
            </div>
            <div className="home_image"></div>
            <svg className="svg_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#34ebcc" fillOpacity="1" d="M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,277.3C1120,299,1280,309,1360,314.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <svg className="svg_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#34ebcc" fillOpacity="0.4" d="M0,128L48,149.3C96,171,192,213,288,245.3C384,277,480,299,576,277.3C672,256,768,192,864,181.3C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}

export default Home
