import { useState } from 'react';
import {
    Form,
    FormText,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap'

function DataEntry({ addProduct }) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [uploadimg, setUploadimg] = useState("");

    //! Data entry addProduct 
    const createNewProduct = () => {

        const newProduct = {
            name, price, description, uploadimg
        };
        addProduct(newProduct);

        setName("");
        setPrice("");
        setDescription("");
        setUploadimg("");

    }


    return (

        <Form>
            <FormGroup>
                <h3 className="mt-5 mb-4">Add Product to Shop</h3>
                <Label >
                    Product Name
                </Label>
                <Input value={name}
                    onChange={(e) => setName(e.target.value)} />
                <FormText>
                    The product name will be displayed as a header on the product card.
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label >
                    Product Price
                </Label>
                <Input value={price}
                    type='number'
                    onChange={(e) => setPrice(parseFloat(e.target.value))} />
                <FormText>
                    The Product price currency will be displayed in dollars.
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label >
                    Product Description
                </Label>
                <Input value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                <FormText>
                    The product description will be displayed last text item on the product card.
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label >
                    Upload Image
                </Label>
                <Input value={uploadimg}
                    onChange={(e) => setUploadimg(e.target.value)} />
                <FormText>
                    The source URL address of the image to be added to the product must be written in the empty field.
                </FormText>
            </FormGroup>
            <FormGroup className='d-grid gap-2 mb-4'>
                <Button onClick={createNewProduct} className='btn btn-success '>
                    Add New Product
                </Button>
            </FormGroup>
        </Form>




    )






}


export default DataEntry;