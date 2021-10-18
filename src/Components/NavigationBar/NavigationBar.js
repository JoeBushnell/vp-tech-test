import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchBar from "./Search/SearchBar";
import SearchButton from "./Search/SearchButton";

function NavigationBar({ cities }) {
  const [searchInput, setSearchInput] = useState(null);

  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="/">VP-Tech-Test</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SearchBar
          cities={cities}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <SearchButton searchInput={searchInput} />
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
