import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image, Table } from 'react-bootstrap'
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
                <h2> {object.name} </h2>
                <h3>{object.category} </h3>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Mark</td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <Image width={300} height={300} src={object.picture ? "http://localhost:5000/" + object.picture : ""}>

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