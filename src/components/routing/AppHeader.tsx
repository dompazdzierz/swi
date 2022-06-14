import { useState } from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function HomePage() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="/">Book reviews library</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        </>
    );
}

export default HomePage;
