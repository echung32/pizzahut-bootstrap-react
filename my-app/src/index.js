import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Button, Container, Image, Nav, Navbar, NavDropdown, NavLink, Stack} from "react-bootstrap";
import {
    Apple,
    ArrowRight,
    CaretRight,
    Cart,
    Facebook,
    Instagram,
    Map,
    Person,
    Phone,
    Tiktok,
    Twitter
} from "react-bootstrap-icons";

const Navigation = () => (<Container fluid className={"px-0"}>
    <Navbar expand="lg" bg="light" className={"shadow"}>
        <Container className={"py-1"}>
            <Nav className={"align-items-center"}>
                <Navbar.Brand className={"justify-content-center"} href="#">
                    <Image src={"/img/logo.webp"}
                           width="59px" height="47px"/>
                </Navbar.Brand>
                <Nav.Link><h4 className={"fw-bold"}>Deals</h4></Nav.Link>
                <NavDropdown title={"Menu"} className={"h4 fw-bold"}>
                    <NavDropdown.Item>Pizza</NavDropdown.Item>
                    <NavDropdown.Item>Wings</NavDropdown.Item>
                    <NavDropdown.Item>Sides</NavDropdown.Item>
                    <NavDropdown.Item>Pasta</NavDropdown.Item>
                    <NavDropdown.Item>Desserts</NavDropdown.Item>
                    <NavDropdown.Item>Drinks</NavDropdown.Item>
                    <NavDropdown.Item>Dips</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav className={"justify-content-end gap-3 align-items-center"}>
                <Stack direction={"horizontal"} className={"shadow p-2 rounded"} gap={2}>
                    <Person className={"h1 mt-1"}/>
                    <Stack>
                        <span className="fw-light red-color"><small>HUT REWARDS</small></span>
                        <span>Sign In <ArrowRight/></span>
                    </Stack>
                </Stack>
                <NavDropdown id="no-caret" title={<Stack direction={"horizontal"} className={"h4 fw-bold"} gap={1}><Cart/>$0.00</Stack>}>
                    <NavDropdown.Item>Empty Cart</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Container>
    </Navbar>
</Container>)

const CenterImage = () => (<NavLink>
    <Image src={"/img/big-dinner-box.avif"} alt={"PizzaHut Promo"} className={"w-100 rounded shadow"}/>
</NavLink>)

const StartHere = () => (
    <Stack direction={"horizontal"} className={"justify-content-around rounded shadow p-3 align-items-center"}
           id={"border-red"}>
        <Stack direction={"horizontal"} id={"right-border-line"} className={"h2 young-serif"} gap={1}>
            <Map/>
            <span className={"pe-5"}> Start here</span>
        </Stack>
        <span className="h5 pt-1">Find your store to see local deals</span>
        <Button variant={"danger"} className="rounded fw-bold px-5" id="white-color">FIND DEALS</Button>
    </Stack>)

const ItemCard = () => (<Stack className={"rounded shadow"}>
    <Image src={"/img/item-1.jpg"} className={"w-100 rounded-top"} alt={"PizzaHut"}/>
    <Stack direction={"horizontal"} className={"align-items-center p-3"} gap={3}>
        <Stack>
            <strong>$6.99 Pizza Hut Melts</strong>
            <small>Crispy. Dippable. Loaded with toppings & cheese.</small>
        </Stack>
        <NavLink href={"#"}><h3><CaretRight/></h3></NavLink>
    </Stack>
</Stack>)

const ItemCardLong = () => (<Stack className={"rounded shadow"}>
    <Image src={"/img/item-2.avif"} className={"w-100 rounded-top"} alt={"PizzaHut"}/>
    <Stack direction={"horizontal"} className={"align-items-center p-3"} gap={3}>
        <Stack className={"w-100"}>
            <strong>$12.99 Original Stuffed Crust®</strong>
            <small>Nothing beats the original.</small>
        </Stack>
        <NavLink href={"#"}><h3><CaretRight/></h3></NavLink>
    </Stack>
</Stack>)

const Featured = () => (<Stack gap={3}>
    <Stack direction={"horizontal"} gap={3}>
        <h1 className="young-serif">Featured</h1>
        <NavLink>
            <small className="red-color fw-bold">SEE MORE </small>
            <ArrowRight/>
        </NavLink>
    </Stack>
    <Stack direction={"horizontal"} gap={3} className={"justify-content-around"}>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
    </Stack>
    <Stack direction={"horizontal"} gap={3} className={"justify-content-around mt-3"}>
        <ItemCardLong/>
        <ItemCardLong/>
    </Stack>
</Stack>)

const Footer = () => (<Stack direction={"horizontal"} className={"justify-content-around"}>
    <Stack gap={3}>
        <h1 className={"young-serif"}>Get our mobile app</h1>
        <NavLink className={"fw-bold d-flex gap-1 align-items-center"} href={"#"}>
            <Apple/>
            <span className={"red-color"}>APPLE STORE</span>
            <ArrowRight/>
        </NavLink>
        <NavLink className={"fw-bold d-flex gap-1 align-items-center"} href={"#"}>
            <Phone/>
            <span className={"red-color"}>GOOGLE PLAY STORE</span>
            <ArrowRight/>
        </NavLink>
        <Stack direction={"horizontal"} gap={4} className={"mt-3"}>
            <h3><Facebook/></h3>
            <h3><Instagram/></h3>
            <h3><Tiktok/></h3>
            <h3><Twitter/></h3>
        </Stack>
    </Stack>
    <Stack gap={3}>
        <Stack>
            <h6>MENU</h6>
            <small>Pizza</small>
            <small>Wings</small>
            <small>Sides</small>
            <small>Pasta</small>
            <small>Desserts</small>
            <small>Drinks</small>
            <small>Dips</small>
            <small>Deals</small>
            <small>Full Menu</small>
        </Stack>
        <Stack>
            <h6>MY ACCOUNT</h6>
            <small>Create an account</small>
            <small>Sign in</small>
        </Stack>
    </Stack>
    <Stack gap={3}>
        <Stack>
            <h6>ABOUT US</h6>
            <small>Create an account</small>
            <small>Sign in</small>
        </Stack>
        <Stack>
            <h6>ABOUT OUR FOOD</h6>
            <small>Pizza</small>
            <small>Wings</small>
            <small>Sides</small>
            <small>Pasta</small>
            <small>Desserts</small>
            <small>Drinks</small>
            <small>Dips</small>
            <small>Deals</small>
            <small>Full Menu</small>
        </Stack>
    </Stack>
    <Stack>
        <h6>CUSTOMER SERVICE</h6>
        <small>Pizza</small>
        <small>Wings</small>
        <small>Sides</small>
        <small>Pasta</small>
        <small>Desserts</small>
        <small>Drinks</small>
        <small>Dips</small>
        <small>Deals</small>
        <small>Full Menu</small>
    </Stack>
</Stack>)

const PizzaHut = () => (<>
    <Navigation/>
    <Container>
        <Stack gap={5} className={"my-5"}>
            <CenterImage/>
            <StartHere/>
            <Featured/>
            <hr/>
            <Footer/>
            <hr/>
        </Stack>
    </Container></>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PizzaHut/>);