import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

const Footer = () => {
    return(
        <footer>
            	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>NM Arquitectura</Heading>
			<FooterLink href="/">Home</FooterLink>
			<FooterLink href="/contacto">Contacto</FooterLink>
			<FooterLink href="#servicios">Servicios</FooterLink>
		</Column>
		<Column>
			<Heading>Servicios</Heading>
			<FooterLink href="#servicios">Proyecto y dirección de obra</FooterLink>
			<FooterLink href="#servicios">Construcción</FooterLink>
			<FooterLink href="#servicios">Reformas</FooterLink>
			<FooterLink href="#servicios">Diseño de interiores</FooterLink>
		</Column>
		<Column>
			<Heading>Miembros del equipo</Heading>
			<FooterLink href="#">a agregar en un futuro</FooterLink>
			<FooterLink href="#">arquitecto 2</FooterLink>
			<FooterLink href="#">arquitecto 3</FooterLink>
			<FooterLink href="#">arquitecto 4</FooterLink>
		</Column>
		<Column>
			<Heading>Redes Sociales a agregar</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
        </footer>
    )
}

export default Footer;