import React from 'react'
import { 
    SidebarContainer, 
    CloseIcon, 
    Icon,
    SideBtnWrap,
    SidebarLink,
    SidebarRouter,
    SidebarWrapper,
    SidebarMenu
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="about" onClick={toggle}>Sobre</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Serviços</SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>Contato</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRouter to="/signin">Sign In</SidebarRouter>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;