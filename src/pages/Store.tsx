import {Col, Form, Row} from "react-bootstrap";
import storeItemsJson from '../data/items.json'
import {StoreItem} from "../components/StoreItem.tsx";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import {useEffect} from "react";

export function Store() {

    const {searchTerm, setSearchTerm, filteredItems, setFilteredItems} = useShoppingCart()


    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase()
        const filtered = storeItemsJson.filter(item =>
            item.name.toLowerCase().includes(lowerCaseSearchTerm))
        setSearchTerm(searchTerm)
        setFilteredItems(filtered)

    }, [searchTerm])


    return (
        <div  style={{display: 'flex', flexDirection: 'column',  color: "white"}}>
            <div style={{display: 'flex', alignContent: 'space-evenly', alignItems: 'center', justifyContent: 'auto'}}>
                <span style={{fontSize: '2rem', color: 'rgba(255,255,255,0.64)'}}>Choose your favorite courses in our store!</span>
                <Form style={{marginLeft: 'auto', marginTop: '25px', marginBottom: '15px', width: '270px'}}>
                    <Form.Control
                        type='text'
                        placeholder='Search for items...'
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    >

                    </Form.Control>
                </Form>
            </div>
            <hr/>

            <Row>
                {filteredItems.map(item => (
                        <Col key={item.id}>
                            {/* {JSON.stringify((item))}*/}
                            <StoreItem description={""} price={0} imgUrl={""} {...item}/>
                        </Col>
                    )
                )}
            </Row>

        </div>
    )
}