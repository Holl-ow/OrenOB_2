import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { createCateg } from '../../http/objectAPI'

export const CreateCategObj = ({ show, onHide }) => {

    const [value, setValue] = useState('')

    const addCateg = () => {
        createCateg({ name: value }).then(data => {
            setValue('')
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
                    Добавить категорию объекта
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addCateg}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}