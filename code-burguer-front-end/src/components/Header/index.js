import React from "react";
import { useHistory } from "react-router-dom"
import CartLogo from '../../assets/cart-logo.png'
import { useUser } from '../../hooks/UserContext'
import PersonLogo from '../../assets/person-logo.png'
import { Container, ContainerLeft, ContainerRight, PageLink, ContainerText, Line, PageLinkExit } from './styles'



export function Header() {
    const { logout, userData } = useUser()
    const { push, location: { pathname } } = useHistory()

    const logoutUser = () => {
        logout()
        push('/login')
    }

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
                    Home
                </PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('/produtos')}>
                    Produtos
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink>
                    <img style={{ width: 30 }} src={CartLogo} alt="cart logo" onClick={() => push('/carrinho')} />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={PersonLogo} alt="person logo" />
                </PageLink>

                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>
                        Sair
                    </PageLinkExit>
                </ContainerText>
            </ContainerRight>


        </Container>
    )
}
