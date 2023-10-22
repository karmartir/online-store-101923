import {Button, Card} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}


export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()

    const quantity = getItemQuantity(id)
    return (
        /*todo Card*/
        <Card  style={{ width: '17rem', height: '350px', marginBottom: '15px' }}>

            <Card.Img variant="top" src={imgUrl} height='auto' style={{objectFit: 'cover'}}/>

            <Card.Body className='d-flex flex-column'>
                <Card.Title className="d-flex justify-content-center align-items-baseline mb-3">
                    <span className='fs-3'>{name}</span>
                    <span className='d-flex ms-auto text-muted'>{price}</span>
                </Card.Title>


                <div className='mt-auto'>


                    {quantity === 0 ? (
                    <Button onClick={() => increaseCartQuantity(id)} className='w-100' variant="primary">+ Add to Cart</Button>
                    ) : (
                        <div className='d-flex align-items-center flex-column' style={{gap: '0.5rem'}}>
                            <div className='d-flex align-items-center justify-content-center' style={{gap: '.5rem'}}>
                                <Button onClick={() => decreaseCartQuantity(id)}> - </Button>
                                <div>
                                   <span>{quantity}</span> in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button onClick={() => removeFromCart(id)} variant='danger' size='sm'>Remove</Button>
                        </div>
                    )
                    }
                </div>
            </Card.Body>
        </Card>
    )
}