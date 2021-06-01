import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import './Navbar.scss'
import { Button, Container, Image } from 'react-bootstrap'
import { HiMenuAlt4 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import finalLogo from '../images/finalLogo.svg'
import Menu from "./Menu";

const Navbar = ({ history }) => {
    // State of our Menu
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });
    // State of our button
    const [disabled, setDisabled] = useState(false);

    //Use Effect
    useEffect(() => {
        //Listening for page changes.
        history.listen(() => {
            setState({ clicked: false, menuName: "Menu" });
        });
    }, [history]);

    // Toggle menu
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            });
        }
    };

    //Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };

    return (
        <Container fluid className="navbar-cont">
            <div className="wrapper">
                <div className="inner-header">
                    <Link to='/'>
                    <Image src={finalLogo} className="logo" />
                    </Link>
                    </div>

                    <div className="menu">
                        <HiMenuAlt4 className="menu-icon" /> 
                    </div>

            </div>
        </Container>
    )
}

export default withRouter(Navbar)
