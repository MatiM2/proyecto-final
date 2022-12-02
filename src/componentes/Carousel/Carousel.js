import Carousel from 'react-bootstrap/Carousel';
import fachada from "./fachada.jpeg"
import oficina from "./oficina.jpeg"
import playroom from "./playroom.jpeg"

function Carousel1() {
  return (
    <Carousel id='trabajos'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fachada}
          alt="fachada"
        />
        <Carousel.Caption>
          <h3>Reforma de vivienda unifamiliar</h3>
          <p>Pilar, Buenos Aires</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={oficina}
          alt="oficina"
        />

        <Carousel.Caption>
          <h3>Diseño de espacio de trabajo en casa</h3>
          <p>Pilar, Buenos Aires</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={playroom}
          alt="playroom"
        />

        <Carousel.Caption>
          <h3>Propuesta de sector de juegos para familia numerosa</h3>
          <p>
          Pilar, Buenos Aires
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


  );
}

export default Carousel1;