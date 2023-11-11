import React, { useState } from 'react';
import './category.css';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';


function Category({categoryArray}) {

  return (
    <div >
      <h3 className='mb-4 '>
        Category{' '}
      </h3>
      <ListGroup>
        {categoryArray.map((categoryItem)=> (
        <ListGroupItem
          action
          href="#"
          tag="a"
          key={categoryItem.id}
        >
          {categoryItem.name}
        </ListGroupItem>
        ))}
      </ListGroup>
      

    </div>

  )
}
export default Category;
