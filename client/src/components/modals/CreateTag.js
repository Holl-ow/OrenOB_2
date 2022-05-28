import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { createTag } from '../../http/objectAPI'

export const CreateTagObj = ({show, onHide}) => {

    const [name, setName] = useState('')
    const [count, setCount] = useState('')

    const addTag = () => {
        createTag({ name, count }).then(data => {
            setName('')
            setCount('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тег объекта
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите название тега"}
                    />
                     <Form.Control
                        className='mt-3'
                        value={count}
                        onChange={e => setCount(e.target.value)}
                        placeholder={"Введите номер тега"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addTag}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}