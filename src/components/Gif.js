import React from "react";

const Gif = ({ id, title, url }) => {
  return <>
    <h3>{title}</h3>
    <img src={url} alt={title} />
  </>
}

export default Gif