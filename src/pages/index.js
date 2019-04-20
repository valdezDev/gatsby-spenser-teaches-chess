import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row} from "reactstrap";
import '../styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Spenser Kearns" keywords={[`spenser kearns`, `chess`, `tutor`]} />
    
    <Container>
      <div className="hero-background-0"></div>
      <div className="hero-background-1"></div>
    </Container>
    
    <Row>
      <Col sm="12">
        <Card className="index-intro">
          <CardTitle className="index-intro__page-header text-center">Spenser Kearns</CardTitle>
          <CardSubtitle className="index-intro__profession text-center">Chess Tutor</CardSubtitle>
        </Card>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage;
