import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export function Navbar() {
    return (
        <NavbarBs sticky='top' className="bg-black shadow-sm mb-3">
            <Container>
                <Nav className="me-auto bg-info">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>

                {/*todo элемент корзины*/}
                <Button className='rounded-circle' style={{width: '3rem', height: '3rem', position: 'relative'}} variant='info'>
                {/*Todo функция открытия корзины*/}
                    cart
                    {/*Картинка svg корзины*/}
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                    style={{color: "black", width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform:'translate(35%, 35%)'}}
                    >
                        <small>1</small>
                        {/*динамически cart quantity*/}
                    </div>
                </Button>
            </Container>
        </NavbarBs>
    )
}