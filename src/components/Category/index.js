import React from "react"
import { Link } from "wouter"

const Category = ({ name, options = [] }) => {
  return <>
    <h3>{name}</h3>
    <ul>
      {options.map((option) => 
        <li key={option}>
          <Link to={`/search/${option}`}>
            {option}
          </Link>
        </li>
      )}
    </ul>
  </>
}

export default Category