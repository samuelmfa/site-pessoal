import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { ContextPaginas } from '../../PaginasContext';
const Header = () => {

    const { CONT_HEADER } = React.useContext(ContextPaginas);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <NavLink className="navbar-brand" to="/">
                    <i className="bi bi-house-fill"></i>
                    </NavLink> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link hvr-underline-from-right" exact to="/">{CONT_HEADER.home}</NavLink>
                        </li>
                        <li className="nav-item  mx-2">
                            <NavLink className="nav-link hvr-underline-from-right" to="formacao">{CONT_HEADER.formacao}</NavLink>
                        </li>
                        <li className="nav-item  mx-2">
                            <NavLink className="nav-link hvr-underline-from-right" to="cursos">{CONT_HEADER.cursos}</NavLink>
                        </li>
                        <li className="nav-item  mx-2">
                            <NavLink className="nav-link hvr-underline-from-right" to="experiencia">{CONT_HEADER.experiencia}</NavLink>
                        </li>
                        <li className="nav-item  mx-2">
                            <NavLink className="nav-link hvr-underline-from-right" to="contato">{CONT_HEADER.contato}</NavLink>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    );
};

export default Header;