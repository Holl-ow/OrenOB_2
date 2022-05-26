import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { ObjectItem } from '../components/ObjectItem'

export const ObjectList = observer(() => {
    const { object } = useContext(Context)
    return (
        <Row className='d-flex'>
            {object.objects.map(object =>
                <ObjectItem key={object._id} object={object} />
            )}
        </Row>
    )
})