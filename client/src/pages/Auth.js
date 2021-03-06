import React, { useContext, useState } from 'react'
import { Container, Card, Form, Row, Button } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'


export const Auth = observer( () => {
    const location = useLocation()
    const isLogin = location.pathname === "/login"
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {

        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            }
            else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate('/')
            
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

    return (

        <Container className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}>

            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 ps-3 pe-3">

                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>

                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to="/registration">Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to="/login">Войдите!</NavLink>
                            </div>
                        }
                    </Row>

                </Form>
            </Card>


        </Container>

    )
})