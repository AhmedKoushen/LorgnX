//import React from "react";
import "./Section.css"

function Section({children, style}){

    return(
        <>
            <div className="section-container" style={style}>
                <div className="Section-content" style={style}>
                {children}
                </div>
            </div>
        </>
    )

}

export default Section;