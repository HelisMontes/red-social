import React from 'react'

export const Tags = ({tag}) => {
  return (
    <button type="button" 
      className="btn btn-danger btn-sm"
      style={ { marginLeft: "5px"} }
    >
      {tag}
    </button>
  )
}
