import {Col, Row} from "react-bootstrap";
import storeItemsJson from '../data/items.json'
import {StoreItem} from "../components/StoreItem.tsx";
export function Store () {

    return (
        <div style={{color: "white"}}>
            <span style={{color: 'rgba(255,255,255,0.64)'}}>This is a Store page</span> <hr/>
        <Row>
            {storeItemsJson.map(item => (
                <Col key={item.id}>
                   {/* {JSON.stringify((item))}*/}
                    <StoreItem {...item}/>
                </Col>
                )

            )}
        </Row>

        </div>
    )
}