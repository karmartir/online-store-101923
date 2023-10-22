import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import {Stack} from "react-bootstrap";
import storeItemsJson from '../data/items.json'

type cartItemProps = {
    id: number
    quantity: number
    price: number
    name: string
    imgUrl: string
}

const CartItem = ({id, quantity}: cartItemProps) => {

    const {removeFromCart} = useShoppingCart()

    const item = storeItemsJson.find(el => el.id === id)
    if (item == null) return null

    return (
        <Stack
            direction='horizontal'
            gap={3}
            className='d-flex align-items-center'>

            <img src={item.imgUrl}
                 alt="pictures of items"
                 style={{
                     height: '60px', border: 'solid 1px',
                     borderRadius: '10px',
                     borderColor: 'rgba(255,255,255,0.23)'
                 }}
            />

            <div className='me-auto'>

                <div>
                    "{item.name}" {' '}
                    {quantity > 1 && (

                        <span className='small'
                              style={{color: 'rgba(84,125,178,0.74)'}}
                        >
                            x{quantity}
                        </span>
                    )}

                </div>

                <div>
                    ${item.price}

                </div>
            </div>

            <div style={{color: 'rgb(120,185,156)'}}>
                ${item.price * quantity}

            </div>

            <div>
                <button
                    onClick={() => removeFromCart(id)}
                    style={{backgroundColor: 'darkred', color: 'whitesmoke', borderRadius: '5px'}}
                >
                    &times;
                </button>

            </div>
        </Stack>
    );
};

export default CartItem;