import React from "react";
import './Header.scss';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    return (
        <div className="header">
            <p className="menu-item" onClick={() => history.push('/')}>LogOut</p>
        </div>
    )
}

export default Header;