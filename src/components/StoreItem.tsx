import {Button, Card} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import {formatCurrency} from "../currency/formatCurrency.ts";

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
    description: string
}


export function StoreItem({id, name, price, imgUrl, description}: StoreItemProps) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()

    const quantity = getItemQuantity(id)
    return (

        <Card style={{width: '19rem', height: '27rem', marginBottom: '25px',}}>

            <Card.Img variant="top" src={imgUrl} height='auto' style={{objectFit: 'cover'}}/>

            <Card.Body className='d-flex flex-column'>
                <Card.Title className="d-flex justify-content-center align-items-baseline mb-3">
                    <span className='fs-4'>{name}</span>
                    <span className='d-flex ms-auto text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
               <hr/>
                <div>
                    <p>
                       <i>{description}</i> </p>
                </div>

                <div className='mt-auto'>


                    {quantity === 0 ? (
                        <Button style={{color: '#3c3c3d', backgroundColor: 'rgba(249,153,4,0.68)', border: 'none'}} onClick={() => increaseCartQuantity(id)} className='w-100' variant="primary">+ Add to
                            Cart</Button>
                    ) : (
                        <div className='d-flex align-items-center flex-column' style={{gap: '0.5rem'}}>
                            <div className='d-flex align-items-center justify-content-center' style={{gap: '.5rem'}}>
                                <Button style={{backgroundColor: 'rgba(201,199,199,0.4)', color: 'blue', border: 'none'}}
                                        onClick={() => decreaseCartQuantity(id)}> - </Button>
                                <div>
                                    <span style={{fontWeight: '500'}}>{quantity}</span> in cart
                                </div>
                                <Button style={{backgroundColor: 'rgba(201,199,199,0.4)', color: 'blue', border: 'none'}}
                                        onClick={() => increaseCartQuantity(id)}>+</Button>
                                <Button style={{border: 'none', marginLeft: '35px'}} onClick={() => removeFromCart(id)}
                                        variant='outline-danger' size='sm'>Remove</Button>
                            </div>
                        </div>
                    )
                    }
                </div>
            </Card.Body>
        </Card>
    )
}