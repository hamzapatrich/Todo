import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/newNav.module.css'



function NewNav(props) {


    return (
        <Nav>
            <span style={{display:'inherit'}}>
                <NavItem name='Logo'/>
                <NavItem name='Features'>
                    
                    <div>Hello</div>
                    <div>Hello</div>
                    <div>Hello</div>
                    
                </NavItem>
                <NavItem name='Premium'/>
                <NavItem name='Homes'>
                    
                        <div>Hello</div>
                        <div>Hello</div>
                        <div>Hello</div>
                    
                </NavItem>
            </span>
            <span style={{display:'inherit'}}>
                <NavItem name='Log in'/>
                <NavItem name='Sign up'/>
            </span>
        </Nav>
    )


}

export default NewNav;

function Nav(props){

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarnav}>
                {props.children}
            </ul>
        </nav>
    )
}

function NavItem(props) {

    const [open, setOpen] = useState(false);
    return (
        <li 
        onMouseEnter={()=>{setOpen(true)}}
        // onMouseLeave={()=>{setOpen(false)}}
        className={styles.navItem}>
            <Link href='/'>
                <a>{props.name}</a>
            </Link>
        {open && props.children ? <div>{props.children}</div>: null}
        </li>
    )
    
}

function DropDown(props) {
    return(
        <div className={styles.dropDown}>
           {props.children}
        </div>
    )
    
}