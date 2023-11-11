import React from 'react';
import {
    Form,
    FormText,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

function DataEntry({name,price,description,uploadimg} ) {










    return (

        <Form>
            <FormGroup>
                <h3 className="mt-5 mb-4">Add Product to Shop</h3>
                <Label >
                    Product Name
                </Label>
                <Input value={name}/>
                <FormText>
                    The product name will be displayed as a header on the product card.
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label >
                    Product Price
                </Label>
                <Input value={price}/>
                <FormText>
                    The Product price currency will be displayed in dollars.
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label >
                    Product Description
                </Label>
                <Input value={description}/>
                <FormText>
                    The product description will be displayed last text item on the product card.
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label >
                    Upload Image
                </Label>
                <Input value={uploadimg}/>
                <FormText>
                    The source URL address of the image to be added to the product must be written in the empty field.
                </FormText>
            </FormGroup>
            <FormGroup className='d-grid gap-2 mb-4'>
                <Button className='btn btn-success '>
                    Add New Product
                </Button>
            </FormGroup>
        </Form>




    )






}


export default DataEntry;