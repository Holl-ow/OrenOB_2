import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneObject } from '../http/objectAPI'

export const ObjectPage = () => {
    const [object, setObject] = useState({ tags: [], comments: [] })
    const { id } = useParams()
    useEffect(() => {
        fetchOneObject(id).then(data => setObject(data))
    }, [])

    return (
        <Container>
            <Row className='mt-4'>
                <h3> name </h3>
            </Row>
            <Row>
                <Col>
                    sdffd
                </Col>
                <Col>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + object.picture}>

                    </Image>
                </Col>
            </Row>

            <Row>
                <Col>
                    descriptin
                </Col>
            </Row>
        </Container>
    )
}