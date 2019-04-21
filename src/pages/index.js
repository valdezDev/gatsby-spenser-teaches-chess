import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import SpenserImage from '../images/profilePic.jpg';
import '../styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Spenser Kearns" keywords={[`spenser kearns`, `chess`, `tutor`]} />
    
    <Container>
      <div className="hero-background-0"></div>
      <div className="hero-background-1"></div>
    </Container>
    
    <Row className="row-1">
      <Col sm="12">
        <Card className="index-intro">
          <CardTitle className="index-intro__page-header text-center">Spenser Kearns</CardTitle>
          <CardSubtitle className="index-intro__profession text-center">Chess Tutor</CardSubtitle>
          <Button className="col-md-8 index-intro__button">Get in Touch!</Button>
        </Card>
      </Col>
    </Row>
    
    <Row className="row-2">
    <Card className="about-card">
      <Col sm="12">
      
          <Card className="about-img">
            <CardImg
              top
              src={SpenserImage}
              alt="Card image cap"
              className="about-img__img"
            />
          </Card>
      </Col>
      <Col sm="12">
        <Card className="about-me">
          <CardBody className="about-me__body">
            <CardTitle className="about-me__title text-center">Who is Spenser Kearns?</CardTitle>
            <CardText className="about-me__text col-md-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident quae ipsam dolores eaque eveniet. Voluptatibus animi excepturi optio earum consectetur eaque rem quisquam accusantium atque, enim dolorum hic! Sint?
            </CardText>
            <CardText className="about-me__text col-md-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fuga ab aliquid libero temporibus. Labore unde maxime nisi adipisci reprehenderit.
            </CardText>
            <CardText className="about-me__text col-md-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum, temporibus saepe unde minus quisquam porro quod eos enim blanditiis corrupti minima quas debitis quis beatae, vitae, neque nemo distinctio perspiciatis eum facilis. Praesentium accusantium voluptate quis ea amet corrupti quo iure fugit voluptatum possimus?
            </CardText>
          </CardBody>
        </Card>
      </Col>
      </Card>
    </Row>
  </Layout>
)

export default IndexPage;
