import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NavBar = ({ search }) => {
    const onSearch = (e) => {
        search(e)
    }
    return (
        <div className='nav-style w-100'>
            <Container>
                <Row className='pt-2'>
                    <Col xs="2" lg="1">
                        <a href='/'>
                            <img className='logo' src='logo.png' alt='logo' />
                        </a>
                    </Col>
                    <Col xs="10" lg="11" className='d-flex align-items-center'>
                        <div className='search  w-100'>
                            <i className='fa fa-search'></i>
                            <input type='text' onChange={(e) => onSearch(e.target.value)} className='form-control' placeholder='ابحث' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NavBar