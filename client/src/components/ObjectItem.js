import React from 'react'
import { Card, Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import star from '../assets/star.png'

export const ObjectItem = ({ object }) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate('/object/' + object._id)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
                <Image width={150} height={150} src={'http://localhost:5000/' + object.picture} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Object...</div>
                    <div className="d-flex align-items-center">
                        <div>{object.average_mark}</div>
                        <Image width={18} height={18} src={star} />
                    </div>
                </div>
                <div>{object.name}</div>
            </Card>
        </Col>
    )
}
