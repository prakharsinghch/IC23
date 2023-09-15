import styled from "styled-components";

const Landing = () => {
  return (
    <Page>
      <Titles>
        <Subtitle>36 hour hackathon</Subtitle>
        <Title>neXus</Title>
        <Tagline>
          <Word>CODE</Word>
          <Word>CREATE</Word>
          <Word>CONNECT</Word>
        </Tagline>
      </Titles>
    </Page>
  );
};

export default Landing;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("images/Localhost/nexus_bg.png");
  background-repeat: no-repeat;
  background-size: 1600px 1024px;
  background-position: center;
`;

export const Title = styled.div`
  color: #fff;
  text-align: center;
  text-shadow: 0px 0px 10.267213821411133px #fff,
    0px 0px 143.74099731445312px #fff, 0px 0px 246.4131317138672px #fff,
    0px 0px 431.22296142578125px #fff;
  font-family: "Major Mono Display";
  font-size: 225px;
  font-style: normal;
  font-weight: 400;
  padding: 0;
  margin-top: -30px;

  @media (width<599px) and (width>300px) {
    text-align: center;
    font-size: 85px;
  }
  @media (width<999px) and (width>600px) {
    text-align: center;
    font-size: 150px;
  }
`;

export const Subtitle = styled.div`
  text-align: right;
  color: #fff;
  font-family: miso;
  margin: 0;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;

  @media (width<999px) and (width>600px) {
    text-align: center;
    font-size: 50px;
  }
  @media (width<599px) and (width>300px) {
    text-align: center;
    font-size: 20px;
  }
  `;
export const Titles = styled.div`
  width: 57.5rem;
  margin-top: 2rem;
`;
export const Tagline = styled.div`
  display: flex;
  margin-top: -15px;
  padding: 0;
  justify-content: center;
  gap: 53px;
  @media (width<999px) and (width>600px) {
    gap: 40px;
  }
  @media (width<599px) and (width>300px) {
    gap: 20px;
  }
`;
export const Word = styled.div`
  color: #fff;
  font-family: Miso;
  font-size: 91.68px;
  font-style: normal;
  font-weight: 400;
  line-height: 115.2%; /* 105.615px */
  @media (width<999px) and (width>600px) {
    text-align: center;
    font-size: 45px;
  }
  @media (width<599px) and (width>300px) {
    text-align: center;
    font-size: 25px;
  }
`;
