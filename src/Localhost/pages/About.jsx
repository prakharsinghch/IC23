import styled from "styled-components"

const About = () => {
  return (
    <Page>
      <Titles>
        <Title>About</Title>
      </Titles>
    </Page>
  );
}

export default About;

export const Page = styled.div`

  display: flex;
  justify-content: flex-start;
  margin: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("images/Localhost/about_bg.png");
  background-repeat: no-repeat;
  background-size: 1600px 1024px;
  background-position: center;
`;

export const Title = styled.div`
  color: #fff;
  text-shadow: 0px 0px 10.267213821411133px #fff,
    0px 0px 143.74099731445312px #fff, 0px 0px 246.4131317138672px #fff,
    0px 0px 431.22296142578125px #fff;
  font-family: "Major Mono Display";
  font-size: 175px;
  font-style: normal;
  font-weight: 400;

  @media (width<599px) and (width>300px) {
    text-align: left;
    font-size: 85px;
  }
  @media (width<999px) and (width>600px) {
    text-align: left;
    font-size: 150px;
  }
`;

export const Subtitle = styled.div`

  text-align: right;
  color: #fff;
  margin: 0;
  font-family: miso;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;

  @media (width<599px) and (width>300px) {
    text-align: center;
    font-size: 33.92px;
  }
  @media (width<999px) and (width>600px) {
    text-align: center;
    font-size: 50px;
  }
`;
export const Titles = styled.div`
  width: 57.5rem;
  margin-top: 3rem;
`;
