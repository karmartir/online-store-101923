import {Button, Card} from "react-bootstrap";

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}


export function StoreItem({/*id, пока не используется*/ name, price, imgUrl}:StoreItemProps) {
    return(
        /*todo Card*/
        <Card style={{ width: '18rem', height: '350px', marginBottom: '15px' }}>

            <Card.Img variant="top" src={imgUrl} height='auto' style={{objectFit: 'cover'}}/>

            <Card.Body className='d-flex flex-column'>
                <Card.Title className="d-flex justify-content-center align-items-baseline mb-3">
                    <span className='fs-3'>{name}</span>
                    <span className='d-flex ms-auto text-muted'>{price}</span>
                </Card.Title>



                {/*разные интерфейсы*/}
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}