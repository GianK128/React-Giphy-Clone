import React from "react";
import { Link } from 'wouter'

const Gif = ({ id, title, url }) => {
  return <>
    <h3>{title}</h3>
    <Link to={`/gifs/${id}`}>
      <img src={url} alt={title} />
    </Link>
  </>
}

export default Gif