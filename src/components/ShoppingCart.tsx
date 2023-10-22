import {Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import CartItem from "./CartItem.tsx";


const ShoppingCart = () => {
    const {closeCart, isOpen, total, cartItems} = useShoppingCart()

   /* я перенес это все в глобальный стейт, так мне удобнее!!!
   const total = cartItems.reduce((total, cartItem) => {

        const item = storeItemsJson.find(el =>
            el.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0)*/

    return (
        <Offcanvas show={isOpen} onHide={closeCart} style={{backgroundColor: '#09090a'}}>
            <Offcanvas.Header closeButton style={{backgroundColor: 'rgba(248,183,90,0.38)'}}>
                <Offcanvas.Title>
                    <div><span
                        style={{color: 'rgb(238,233,233)', fontSize: '20px', fontWeight: '500'}}> <i>My Shopping Cart</i> </span>
                    </div>
                    <div style={{textAlign:'left', fontSize: '14px'}}>
                        <span style={{color: 'rgb(247,242,242)'}}>Total: $ <span style={{fontSize: '18px', fontWeight:'700'}}>{total}</span></span>
                    </div>
                </Offcanvas.Title>

            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    <ol>
                        {cartItems.map(item => (
                            <li key={item.id}
                                style={{color: 'rgba(255,255,255,0.5)'}}>

                                <br/>
                                <CartItem price={0} name={""} imgUrl={""} {...item}/>
                                <hr/>
                            </li>
                        ))}
                    </ol>

                    {/*//todo красивый знак $*/}
                    {/*//вывести тотал*/}
                    <div style={{textAlign:'right'}}>
                      <span style={{color: 'rgb(120,185,156)'}}>Total: ${total}</span>
                    </div>
                </Stack>

            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ShoppingCart;