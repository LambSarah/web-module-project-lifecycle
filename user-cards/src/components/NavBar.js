import React, { useState } from 'react';
import './NavBar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import SearchForm from './SearchForm.js'

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand href='/'>Github User</NavbarBrand>

                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href='#'>Home</NavLink>
                        </NavItem>
                        <SearchForm changeSearchSyntax={props.changeSearchSyntax} changeSearchText={props.changeSearchText} searchPlaceholder={props.searchPlaceholder} />
                    </Nav>
                    <NavbarToggler onClick={toggle} color='light' />
                </Collapse>
            </Navbar>
        </div>

    )

}



export default NavBar;