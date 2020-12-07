import React from 'react'
import '../../../css/sb-admin-2.css'
import Header from './header'
import styled from 'styled-components';
import Sidebar from './sidebar'


const LayoutAdmin = ({ children }) => {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">

                    <div className="container-fluid">
                    <HeaderContainer>
                <Header />
            </HeaderContainer>
            <Content>
                {children}
            </Content>
                    </div>
                </div>

            </div>
        </div>

    )
}


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// import React from 'react'
// import styled from 'styled-components';
// import Header from './header'



// const LayoutAdmin = ({ children }) => {
//     return (
//         <>
//             <HeaderContainer>
//                 <Header />
//             </HeaderContainer>
//             <Content>
//                 {children}
//             </Content>


//         </>
//     )
// }



const HeaderContainer = styled.div``

const Content = styled.div``


export default LayoutAdmin
