import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { CreateCategObj } from '../components/modals/CreateCategObj'
import { CreateObject } from '../components/modals/CreateObject'
import { CreateTypeObj } from '../components/modals/CreateTypeObj'

export const Admin = () => {

    const [categVisible, setCategVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [objectVisible, setObjectVisible] = useState(false)


    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => { setTypeVisible(true) }}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => { setCategVisible(true) }}
            >
                Добавить категорию
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => { setObjectVisible(true) }}
            >
                Добавить объект
            </Button>

            <CreateCategObj show={categVisible} onHide={() => { setCategVisible(false) }} />
            <CreateObject show={objectVisible} onHide={() => { setObjectVisible(false) }} />
            <CreateTypeObj show={typeVisible} onHide={() => { setTypeVisible(false) }} />

        </Container>
    )
}