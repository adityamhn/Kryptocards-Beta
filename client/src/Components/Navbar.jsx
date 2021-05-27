import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import './Navbar.scss'
import { Button, Container, Form } from 'react-bootstrap'
import { HiMenuAlt4 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import {KryptocardsAnimation} from './KryptocardsAnimation';
import Menu from "./Menu";
import {useSelector} from 'react-redux';
import {KryptoCardsNavbarText} from './KryptoCardsNavbarText';


const Navbar = ({ history }) => {
    // State of our Menu
    const iconToShow = useSelector(state=>state.navbar.value);
    

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

    return (<>
        <Container fluid className="navbar-cont">
            <div className="wrapper">
                <div className="inner-header">
                    <div className="logo">
                    <Link to='/'>{iconToShow === "LOGO" ? <KryptocardsAnimation/> : iconToShow==="TEXT" ? <KryptoCardsNavbarText/> : null}
                    </Link>
                    </div>

                    <div className="menu">
                        <button disabled={disabled} onClick={handleMenu}>
                            {state.menuName === "Menu" ? 
                        <HiMenuAlt4 className="menu-icon" /> : <IoMdClose className="menu-icon" />
                              }
                        </button>
                    </div>

                </div>
            </div>
        </Container>
        <Menu state={state} />
    </>
    )
}

export default withRouter(Navbar)
