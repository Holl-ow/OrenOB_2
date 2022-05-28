import React, { useContext, useState, useEffect } from 'react'
import { Modal, Button, Form, Dropdown, Badge } from 'react-bootstrap'
import { Context } from '../../index'
import { createObject } from '../../http/objectAPI'
import { observer } from 'mobx-react-lite'
import { fetchCategs, fetchObjects, fetchTypes, fetchTags } from '../../http/objectAPI'

export const CreateObject = observer(({ show, onHide }) => {

    const { object } = useContext(Context)

    const [name, setName] = useState('')
    const [adress, setAdress] = useState('')
    const [workTime, setWorkTime] = useState('')
    const [workDay, setWorkDay] = useState('')
    const [descrip, setDescrip] = useState('')
    const [phone, setPhone] = useState('')
    const [web, setWeb] = useState('')
    const [file, setFile] = useState(null)
    //ДОбавить теги

    useEffect(() => {
        fetchCategs().then(data => object.setCategsObj(data))
        fetchTypes().then(data => object.setTypesObj(data))
        fetchObjects().then(data => object.setObjects(data.objects))
        fetchTags().then(data => object.setTags(data))
    }, [])


    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const ChangeTag = (count) => {
        console.log(`Нажали на тег ${count}`)
       
    }

    const addObject = () => {
        createObject({ name: name }).then(data => {
            setName('')
            setAdress('')
            setWorkTime('')
            setWorkDay('')
            setDescrip('')
            setPhone('')
            setWeb('')
            setFile(null)
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
                    Добавить объект
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Название"}
                    />

                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>{object.selectedCateg.name || "Категория"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {object.categsObj.map(categ =>
                                <Dropdown.Item
                                    onClick={() => object.setSelectedCateg(categ)}
                                    key={categ._id}
                                >
                                    {categ.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='mt-3'>
                        <Dropdown.Toggle>{object.selectedType.name || "Тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {object.typesObj.map(type =>
                                <Dropdown.Item
                                    onClick={() => object.setSelectedType(type)}
                                    key={type._id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        className='mt-3'
                        value={adress}
                        onChange={e => setAdress(e.target.value)}
                        placeholder={"Адрес"}
                    />
                    <Form.Control
                        className='mt-3'
                        value={workTime}
                        onChange={e => setWorkTime(e.target.value)}
                        placeholder={"Рабочее время"}
                    />
                    <Form.Control
                        className='mt-3'
                        value={workDay}
                        onChange={e => setWorkDay(e.target.value)}
                        placeholder={"Дни работы"}
                    />
                    <Form.Control
                        as="textarea"
                        rows={3}
                        className='mt-3'
                        value={descrip}
                        onChange={e => setDescrip(e.target.value)}
                        placeholder={"Описание*"}
                    />
                    <Form.Control
                        className='mt-3'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder={"Телефон*"}
                    />
                    <Form.Control
                        className='mt-3'
                        value={web}
                        onChange={e => setWeb(e.target.value)}
                        placeholder={"Сайт*"}
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />
                    <div className='mt-3'>
                        {object.tagsObj.map(tag =>
                            <Badge
                                style={{ cursor: 'pointer' }}
                                className='ms-1 me-1'
                                bg="secondary"
                                onClick={() => ChangeTag(tag.count)}
                                key={tag._id}
                            >
                                {tag.name}
                            </Badge>
                        )}
                    </div>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addObject}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})