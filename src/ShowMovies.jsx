import React from "react";
import Image from "./Image";
import Base from "./Base";

const ShowMovies = (props) => {

    return (
        <>
        <div className="card">
        <a href={props.srclink} >
          <Image imglink = {props.imglink}/>
          <Base moviename = {props.moviename}
          />
        </a>  
         </div> 
        </>

    );
}

export default ShowMovies;