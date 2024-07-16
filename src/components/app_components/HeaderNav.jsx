import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext,useState,useEffect } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import usePrefersColorScheme from 'use-prefers-color-scheme'


 export const HeaderNav=()=>{

    const [mode,setMode]=useState("light");
    const { user } = useContext(UserContext);
    // const colorScheme="light";
    
    const colorScheme=usePrefersColorScheme();
    useEffect(()=>{
      console.log(colorScheme)
        // hook to determine prefered color scheme
        setMode(colorScheme);
    },[])

// Generic/std react-bootstrap Navbar
    return (
        // <section className="header">
        // <section className="navbar-background">
        <Navbar sticky="top" expand="lg" bg={mode} data-bs-theme={mode} className="nav-bar">
          <Container className='navbar-container'>
            <Navbar.Brand href="#home">Landlord Property Automation</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/test">Test</Nav.Link>
                {/* <NavDropdown
                  title="
                Topics"
                  id="basic-nav-dropdown"
                >
                  {topics.map(({ slug }) => {
                    return (
                      <NavDropdown.Item
                        key={slug}
                        href={`/articles?topic=${slug}`}
                      >
                        {slug}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown> */}
        <p className="logged-in-as">Logged in as: {user}</p>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      //   </section>
      // </section>
    )
}