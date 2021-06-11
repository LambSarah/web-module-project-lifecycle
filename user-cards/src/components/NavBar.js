import React from 'react';
import './NavBar.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import SearchForm from './SearchForm.js'

const NavBar = (props) => {

    return (
        <div>
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand href='/'>Github User</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink href='#'>Home</NavLink>
                    </NavItem>
                    <SearchForm changeSearchSyntax={props.changeSearchSyntax} changeSearchText={props.changeSearchText} searchPlaceholder={props.searchPlaceholder} />
                </Nav>

            </Navbar>
        </div>

    )

}



export default NavBar;