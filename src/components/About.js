// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });


    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             // border: '2px solid black'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid black'

    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    // }


    return (
        <div className="container">
            <h1 className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{backgroundColor: props.mode === "light" ? "white" : "#212529", color: props.mode === "light" ? "black" : "white" }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{color:"#042743"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Accordion Item #1</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    
                </div>
            </div>
        </div>

        </div >
    )
}
