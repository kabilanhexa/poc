import PropTypes from 'prop-types';
import React, {useState} from 'react';
import './Layout.scss';
import LeftNavbar from '../../common/navbar/Navbar';

function Layout({ children }) {
    const [menuCollapsed, setMenuCollpased] = useState(false);

    const onHandleMenuCollapsed = (value) => {
        setMenuCollpased(value);
    };
 
    return (
        <>
        <div id="layout">
            <div className="sidebar">
                <LeftNavbar handleMenuCollapsed={onHandleMenuCollapsed} />
            </div>
            <main className={menuCollapsed ? 'active' : ''} id="content" role="main">
                {children}
            </main>
        </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
};
 
export default Layout;
 