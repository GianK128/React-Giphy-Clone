import React from "react";
import { Link } from 'wouter'
import './styles.css'

const Gif = ({ id, title, url }) => {
  return <div className="Gif">
    <div className="Gif-title">
      <h3>{title}</h3>
    </div>
    <Link to={`/gif/${id}`}>
      <img src={url} alt={title} />
    </Link>
  </div>
}

export default Gif