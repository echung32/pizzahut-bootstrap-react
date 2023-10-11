import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Container, Row} from "react-bootstrap";

const Navbar = () => (<></>)

const CenterImage = () => (<></>)

const StartHere = () => (<></>)

const ItemCard = () => (<></>)

const ItemCardLong = () => (<></>)

const Footer = () => (<></>)

const PizzaHut = () => (<Container>
    <Navbar/>
    <CenterImage/>
    <StartHere/>
    <hr/>
    <Footer/>
</Container>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PizzaHut/>);