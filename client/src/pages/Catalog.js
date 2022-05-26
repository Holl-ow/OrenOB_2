import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CategBar } from '../components/CategBar'
import { ObjectList } from '../components/ObjectList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchCategs, fetchObjects, fetchTypes } from '../http/objectAPI'

export const Catalog = observer(() => {
    const {object} = useContext(Context)

    useEffect(()=>{
        fetchCategs().then(data => object.setCategsObj(data))
        fetchTypes().then(data => object.setTypesObj(data))
        fetchObjects().then(data => object.setObjects(data.objects))
    }, [])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <CategBar />
                </Col>

                <Col md={9}>
                    <ObjectList />
                </Col>
            </Row>
        </Container>
    )
})