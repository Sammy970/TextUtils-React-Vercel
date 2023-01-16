// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    let myStyle = {
        color: props.mode ==='dark'?'white':'#502a9d',
        backgroundColor: props.mode ==='dark'?'#502a9d':'white'
    }

    return (
        <div className="container">
            <h1 className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{color: "#502a9d"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Made by</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        I am Samyak Jain, 3rd Year BTech student. Currently I am studying Instrumentation and Control Engineering at VIT, Pune.
                    </div>

                </div>
            </div>
        </div>

        </div >
    )
}
