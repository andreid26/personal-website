import React, {useState, useEffect} from 'react'
import './styles/Image.css'

//Project 1 images
import p1 from './images/project_1/p1.png'
import p2 from './images/project_1/p2.png'
import p3 from './images/project_1/p3.png'
import p4 from './images/project_1/p4.png'
import p5 from './images/project_1/p5.png'
import p1_small from './images/project_1/p1_small.png'
import p2_small from './images/project_1/p2_small.png'
import p3_small from './images/project_1/p3_small.png'
import p4_small from './images/project_1/p4_small.png'
import p5_small from './images/project_1/p5_small.png'

//Project 2 images
import c1 from './images/Project_2/c1.png'
import c2 from './images/Project_2/c2.png'
import c1_small from './images/Project_2/c1_small.png'
import c2_small from './images/Project_2/c2_small.png'

function Image({image,setImage, numImages, functionNum, imagehover, title, desc}) {

    const [imageclick, setImageclick] = useState(false)
    const [didMount, setDidMount] = useState(false)


    const handleClick = () => {
        setImageclick(!imageclick)
    }
 
    //Check the width of the screen
    const [width, setWidth] = useState(window.innerWidth)

    const handleResize = (e) => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
     }, [])


    useEffect((e) => {
        if(didMount){
            window.addEventListener("resize", handleResize)
        }
    });

    useEffect(() => {
        if(didMount){
            return () => {
                window.addEventListener("resize", handleResize)
            };
        }
    });

    //Automatically image slide
    useEffect(() => {
        if(imagehover === false && didMount){
            const timer = setTimeout(() => {
                increaseImage();
            }, 5000);
            return () => clearTimeout(timer);
        }
    });


    // Image slider functionality
    const increaseImage = () => {
        if(image < numImages){
            setImage(image+1)
        }
        else{
            setImage(1)
        }
    }

    const decreaseImage = () => {
        if(image > 1){
            setImage(image-1)
        }
        else{
            setImage(numImages)
        }
    }

    const returnFunction = functionNum => {
        var num
        if(functionNum === 1){
            num = imageFunction1()
        }
        else if(functionNum === 2){
            num = imageFunction2()
        }
        return num
    }

    //Set 1 of images
    const imageFunction1 = () => {
        if(width < 450){
            if(image === 1){
                return p1_small
            }
            else if(image === 2){
                return p2_small
            }
            else if(image === 3){
                return p3_small
            }
            else if(image === 4){
                return p4_small
            }
            else return p5_small
        }
        else{
            if(image === 1){
                return p1
            }
            else if(image === 2){
                return p2
            }
            else if(image === 3){
                return p3
            }
            else if(image === 4){
                return p4
            }
            else return p5
        }
    }

    //Set 2 of images
    const imageFunction2 = () => {
        if(width < 450){
            if(image === 1){
                return c1_small
            }
            else{
                return c2_small
            }
        }
        else{
            if(image === 1){
                return c1
            }
            else{
                return c2
            }
        }
    }

    return (
        <div className="box_images">
            <div className={`p_images_text ${imageclick?"p_imgText_visible":""}`}>
                <i className="fas fa-times" onClick={handleClick}></i> 
                <div className="span_list">
                    <span>{title}</span>
                    <span>{desc}</span>
                </div>
            </div>
            <img className={`p_img ${imageclick?"p_dark":""} p_img_${functionNum}`} src={returnFunction(functionNum)} alt="img"  onClick={handleClick}/>
            <span className="p_increase" onClick={increaseImage}><i className="fas fa-chevron-right"></i></span>
            <span className="p_decrease" onClick={decreaseImage}><i className="fas fa-chevron-left"></i></span>
        </div>
    )
}

export default Image
