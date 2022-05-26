import React, { useContext } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import { useNavigate } from "react-router-dom"


export const NavBar = observer(() => {

    const navigate = useNavigate()
    const { user } = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">OrenOB</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        {user?.user?.role==='ADMIN' && <Button onClick={() => { navigate('/admin') }} variant="outline-success" className="me-2">Админ панель</Button>}
                        <Button variant="outline-success" onClick={() => { logOut() }} >Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant="outline-success" onClick={() => { navigate('/login') }}>Авторизация</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    )
})