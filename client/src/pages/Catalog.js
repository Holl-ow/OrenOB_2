import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CategBar } from '../components/CategBar'
import { ObjectList } from '../components/ObjectList'
import { Pages } from '../components/Pages'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchCategs, fetchObjects, fetchTypes } from '../http/objectAPI'

export const Catalog = observer(() => {
    const { object } = useContext(Context)

    useEffect(() => {
        fetchCategs().then(data => object.setCategsObj(data))
        fetchTypes().then(data => object.setTypesObj(data))
        fetchObjects(null, 1, 9).then(data => {
            object.setObjects(data.objects)
            object.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchObjects(object.selectedCateg._id, object.page, 6).then(data => {
            object.setObjects(data.objects)
            object.setTotalCount(data.count)
        })
    }, [object.page, object.selectedCateg])

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <CategBar />
                </Col>

                <Col md={9}>
                    <ObjectList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    )
})