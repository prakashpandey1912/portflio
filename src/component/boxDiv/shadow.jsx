import React, { useEffect } from "react";
import styled from "styled-components";

function Shadow(props) {

  // useEffect(() => {
  // }, [])

  const readMore = () => {
    window.open(props.obj.readMore, "_blank")
  }

  return (
    <>
      <ShadowStyle style={shadowStyle}>
        <div className="card card-1">
          <br />
          <div>{props.obj.title}</div>
          <img className="imgBox" src={props.obj.img} />
          <br />
          <br />
          <br />
          <div onClick={readMore}>Read More</div>
        </div>
      </ShadowStyle>
    </>
  )
}
const shadowStyle = {
  "width": "400px"
};
const ShadowStyle = styled.section`

.card {
    background: #000;
    border-radius: 2px;
    display: inline-block;
    height: 300px;
    margin: 1rem;
    position: relative;
    width: 350px;
  }
  
  .card-1 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  .imgBox{
    height: auto;
    width: 300px;
    
  }
  
  .card-1:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }`

export default Shadow;