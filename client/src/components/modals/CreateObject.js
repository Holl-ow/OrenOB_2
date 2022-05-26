import React, { useContext } from 'react'
import { Modal, Button, Form, Dropdown } from 'react-bootstrap'
import { Context } from '../../index'

export const CreateObject = ({ show, onHide }) => {

    const { object } = useContext(Context)

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип объекта
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        // value={value}
                        // onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название"}
                    />
                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>Выберите категорию</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {object.categsObj.map(categ =>
                                <Dropdown.Item key={categ._id}>{categ.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {object.typesObj.map(type =>
                                <Dropdown.Item key={type._id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control 
                        className='mt-3'
                        type='file'
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" /*onClick={addType}*/>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}