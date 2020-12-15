import React from 'react'
import styled from 'styled-components';
import Header from './orig_header'
import Footer from './footer'


const Layout = ({ children }) => {
    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <Content>
                {children}
            </Content>
            {/* <FooterContainer>
                <Footer />
            </FooterContainer> */}

        </>
    )
}



const HeaderContainer = styled.div`
`
const Content = styled.div``

const FooterContainer = styled.div``

export default Layout
