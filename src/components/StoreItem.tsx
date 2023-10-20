import {Button, Card} from "react-bootstrap";

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}


export function StoreItem({/*id, пока не используется*/ name, price, imgUrl}: StoreItemProps) {
    const quantity = 1;

    return (
        /*todo Card*/
        <Card className='h-100'/* style={{ width: '18rem', height: '350px', marginBottom: '15px' }}*/>

            <Card.Img variant="top" src={imgUrl} height='auto' style={{objectFit: 'cover'}}/>

            <Card.Body className='d-flex flex-column'>
                <Card.Title className="d-flex justify-content-center align-items-baseline mb-3">
                    <span className='fs-3'>{name}</span>
                    <span className='d-flex ms-auto text-muted'>{price}</span>
                </Card.Title>


                <div className='mt-auto'>
                    {/*разные интерфейсы*/}

                    {quantity === 0 ? (
                    <Button className='w-100' variant="primary">+ Add to Cart</Button>
                    ) : (
                        <div className='d-flex align-items-center flex-column' style={{gap: '0.5rem'}}>
                            <div className='d-flex align-items-center justify-content-center' style={{gap: '.5rem'}}>
                                <Button> - </Button>
                                <div>
                                   <span>{quantity}</span> in cart
                                </div>
                                <Button>+</Button>
                            </div>
                            <Button variant='danger' size='sm'>Remove</Button>
                        </div>
                    )
                    }
                </div>
            </Card.Body>
        </Card>
    )
}