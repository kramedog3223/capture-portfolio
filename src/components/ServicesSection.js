import React from "react";
// import icon
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services variants={fade} animate={controls} initial="hidden" ref={element}>
      <Description>
        <h2>
          High <span> quality </span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3> Efficient</h3>
            </div>
            <p> Random text goes here</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamkwork" />
              <h3> TeamWork</h3>
            </div>
            <p> Random text goes here</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3> Diaphragm</h3>
            </div>
            <p> Random text goes here</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3> Money</h3>
            </div>
            <p> Random text goes here</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1 rem;
    }
  }
`;

export default ServicesSection;