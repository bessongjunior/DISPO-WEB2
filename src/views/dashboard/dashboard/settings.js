import React from 'react';
import AdminNavbar from '../../../components/admin/Navbar/navbar';
import AdminSidebar from '../../../components/admin/sidebar/sidebar';
import AdminFooter from '../../../components/admin/footer/footer';
import {Container, Col, Row} from 'react-bootstrap';
// import './dashboard.css';

const SettingsPage = () => {
    return ( 
        <>
            <AdminNavbar/>
            <div class="container-fluid flex-shrink-0">
                <Row>
                    <AdminSidebar/>
                    <div>
                        Add content here
                    </div>
                </Row>
            </div>
            

            <AdminFooter/>
        </>
     );
}
 
export default SettingsPage;