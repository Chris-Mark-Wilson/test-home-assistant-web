import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { PropertiesContext } from "../../contexts/PropertiesContext.jsx";
import usePrefersColorScheme from "use-prefers-color-scheme";
import { getProperties } from "../../functions/be-api.js";

export const HeaderNav = () => {
  const { logged_in, user_id, user } = useContext(UserContext);
  const { properties, setProperties } = useContext(PropertiesContext);

  const [mode, setMode] = useState("light");

  // const colorScheme="light";
  const loadProperties=async(user_id)=>{
    try{
      const response=await getProperties(user_id);
      console.dir(response,typeof response);
      setProperties(()=>response);
    }catch(err){
      console.log("error in headerNav",err);
    }
  }

  const colorScheme = usePrefersColorScheme();
  useEffect( () => {
    if(mode){
    setMode(colorScheme);
    }
  if(user_id){
    loadProperties(user_id);
  }
  
  }, [user_id,mode]);

  // Generic/std react-bootstrap Navbar
  return (
    // <section className="header">
    // <section className="navbar-background">
    <Navbar
      sticky="top"
      expand="lg"
      bg={mode}
      data-bs-theme={mode}
      className="nav-bar"
    >
      <Container className="navbar-container">
        <Navbar.Brand href="#home">Home Assistant Multi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/test">Test</Nav.Link>
            <NavDropdown
              title="
                Properties"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/addproperty">
                Add Property
              </NavDropdown.Item>
              <NavDropdown title="Property List" id="basic-nav-dropdown">
                {properties != [] &&
                properties != undefined &&
                properties != null &&
                properties.length > 0
                  ? properties.map(({ property_id, address }) => {
                      return (
                        <NavDropdown.Item
                          key={property_id}
                          href={`/property?property_id=${property_id}`}
                        >
                          {address.houseNumber} {address.street} {address.town}
                        </NavDropdown.Item>
                      );
                    })
                  : "No properties found"}
              </NavDropdown>
            </NavDropdown>
            <p className="logged-in-as">
              {logged_in ? `Logged in as: ${user}` : "Please log in"}
            </p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //   </section>
    // </section>
  );
};
