import React from "react";

const Image = (props) =>{
    return (
    <>
        <div>
            <img src={props.imglink} alt= "movieImage" className="image" />
        </div>
     </>   
    );
}

export default Image;