import React from "react";
import moviesData from "./moviesData";
import ShowMovies from "./ShowMovies";

const movieshome = () => {
    return (
        <>
            <div className = 'moviespace'>
             { moviesData.map((val,index) => {
                  return(<ShowMovies srclink = {val.srclink}
                              moviename = {val.moviename}
                              imglink = {val.imglink}
                   /> 
                  );
                })}
                
            </div>
        </>
    );
}
export default movieshome;