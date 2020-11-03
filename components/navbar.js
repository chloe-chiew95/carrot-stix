import {Navbar, Nav} from 'react-bootstrap'

export default function NavBar(){
    return(
    <Navbar bg="primary" variant="dark" expand="lg">
        <img src="/carrot-icon.png"/>
        <Navbar.Brand href="../">Carrot Stix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="../">Home</Nav.Link>
        <Nav.Link href="/manage">Manage</Nav.Link>
        <Nav.Link href="/setting">Setting</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}