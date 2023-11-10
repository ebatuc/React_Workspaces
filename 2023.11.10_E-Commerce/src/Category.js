import React, { useState } from 'react';
import './category.css';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';


function Category() {

  return (
    <div >
      <h3 className='mb-4 '>
        Category{' '}
      </h3>
      <ListGroup>
        <ListGroupItem
          action
          href="#"
          tag="a"
        >
          Category Item 1
        </ListGroupItem>
        <ListGroupItem
          action
          href="#"
          tag="a"
        >
          Category Item 2
        </ListGroupItem>
        <ListGroupItem
          action
          href="#"
          tag="a"
        >
          Category Item 3
        </ListGroupItem>
        <ListGroupItem
          action
          href="#"
          tag="a"
        >
          Category Item 4
        </ListGroupItem>
        <ListGroupItem
          action
          href="#"
          tag="a"
        >
          Category Item 5
        </ListGroupItem>

      </ListGroup>
      <p />

    </div>

  )
}
export default Category;
