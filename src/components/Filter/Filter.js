import React from "react";
import "./Filter.css";
import StarRatingComponent from "react-star-rating-component";


const Filter = ({updateinput,updaterate,rate}) => {
  /*<select className="search-rate" defaultValue={0} onChange={(e)=>updaterate(e.target.value)}>
          <option value ={0} >Search with rate</option>
              <option >1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
           */ 
              
  return (
    <div className="search-header">
      <div className="search-content">
        <form className="search">
          
          <input type="text"  placeholder="Search Movies with title" onChange={(e)=>updateinput(e.target.value)}/>
          <span style={{color:"white"}}></span>
          <span className="search-rate">
          <StarRatingComponent name="rat" onStarClick={updaterate} value={rate} />
    
</span>
          
        </form>
        
      </div>
    
    </div>
  );
};

export default Filter;