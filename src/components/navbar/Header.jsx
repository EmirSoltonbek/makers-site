import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MainLogo from '../../assets/Combined Shape.svg';
import UsersPhoto from '../../assets/users-photo.png'
import './Header.css';

function Header() {
  return (
    <>
      {[ 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} style={{backgroundColor:'#2B59C3'}}>
          <Container className='d-flex justify-content-between flex-wrap' >
            <Navbar.Brand href="#" style={{marginRight:"100px"}}><img src={MainLogo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{color:"light"}}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{backgroundColor:'#2B59C3'}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={MainLogo} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='justify-content-between'>
                <Nav className="justify-content-center header-links" >
                  <Nav.Link href="#action1" className='nav-link' style={{paddingLeft:"0px", marginLeft:"0px"}}>Главная</Nav.Link>
                  <Nav.Link href="#action2" className='nav-link' >Курсы</Nav.Link>
                  <Nav.Link href="#action2" className='nav-link' >Бесплатные</Nav.Link>
                </Nav>
                <div className='d-flex  gap-3 header-right-site'>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Поиск"
                    aria-label="Search"
                    className='header-search'
                  />
                  {/* <Button variant="outline-success">Поиск</Button> */}
                </Form>
                <button className='header-singup-button'>Записаться</button>
                {/* <div className='d-flex gap-3'> */}
                <div style={{width:"35px", height:"35px"}} className='user-icon'>
                    <img src={UsersPhoto} alt="" style={{borderRadius:"50%"}}/>
                </div>
                <button className='header-change-language'>RU</button>
                </div>
                {/* </div> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;



