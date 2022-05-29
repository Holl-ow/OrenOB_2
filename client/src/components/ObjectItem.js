import React from 'react'
import { Card, Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import star from '../assets/star.png'
import { clicksObject } from '../http/objectAPI'

export const ObjectItem = ({ object }) => {
    const navigate = useNavigate()


    return (
        <Col md={4} className={"mt-3"} onClick={() => { clicksObject(object); navigate('/object/' + object._id) }}>
            <Card style={{ width: 300, cursor: 'pointer' }} border={"light"}>
                <Image width={300} height={300} src={'http://localhost:5000/' + object.picture} />
                <div className="fs-5 mt-1 d-flex justify-content-between align-items-center">
                    <div>{object.name}</div>
                    <div className="d-flex align-items-center">
                        <div>{object.average_mark}</div>
                        <Image width={22} height={22} src={star} />
                    </div>
                </div>

            </Card>
        </Col>
    )
}
