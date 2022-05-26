import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

export const CategBar = observer(() => {

    const { object } = useContext(Context)
    return (
        <ListGroup className='mt-2'>
            {object.categsObj.map(categObj =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={categObj._id === object.selectedCateg._id}
                    onClick={() => object.setSelectedCateg(categObj)}
                    key={categObj._id}
                >
                    {categObj.name}
                </ListGroup.Item>
            )}

        </ListGroup>

    )
})