import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { Tags } from './Tags';
import {CardHeader} from './CardHeader'


export const CardsList = ({datos}) => {
  return (
    <div className="col-4">
      <div className="card mt-3" style={ { maxWidth: '26rem' } } key={datos.id}>
        <div className="card-header">
          <CardHeader owner={datos.owner}/>
        </div>
        <img src={datos.image} style={ { height: '250px', objectFit: 'cover'} }className="card-img-top" alt="mascota" />
        <div className="card-body">
          <h5 className="card-title">{datos.text}</h5>
          <a href={datos.link} target="_blank">{datos.link}</a>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><FontAwesomeIcon icon={faHeart} color="red"/> {datos.likes} Likes 
            <span style={ { marginLeft: "50px"} }>{datos.publishDate}</span>
          </li>
          <li className="list-group-item">
            {
              datos.tags.map( tag => (
                <Tags key={tag} tag={tag}/>
              ))
            }
          </li>
        </ul>
        <div className="card-body">
          <a href="" className="card-link">Get Post Comments</a>
          <a href="" className="card-link">Get Owner Profile</a>
        </div>
      </div>
  </div>
  )
}

