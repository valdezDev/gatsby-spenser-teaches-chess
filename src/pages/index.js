import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container } from "reactstrap";
import SpenserImage from '../images/profilePic.jpg';
import '../styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Spenser Kearns" keywords={[`spenser kearns`, `chess`, `tutor`]} />
    
    <Container>
      <div className="hero-background-0"></div>
      <div className="hero-background-1"></div>
    </Container>
    
    <Card className="row-1">
      <Col sm="12">
        <Card className="index-intro">
          <CardTitle className="index-intro__page-header text-center">Spenser Kearns</CardTitle>
          <CardSubtitle className="index-intro__profession text-center">Chess Tutor</CardSubtitle>
          <CardSubtitle className="index-intro__motto text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi magnam consequuntur nesciunt!</CardSubtitle>
          <Button className="col-md-2 index-intro__button">
            <Link
              activeClass="active"
              to="card-3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              GET IN TOUCH
            </Link></Button>
        </Card>
      </Col>
    </Card>
    
    <Card className="card-2 about-me row-cover-full">
      <CardImg top width="100%" src={SpenserImage} alt="Card image cap" className="about-img rounded-circle d-block"/>
      <CardTitle className="about-me__title text-center">Who is Spenser Kearns?</CardTitle>
        <CardBody className="about-me__body">
          <CardText className="about-me__text col-md-9 mx-auto">
          &nbsp; &nbsp; &nbsp; &nbsp;Spenser Kearns is a Richmond-based private chess instructor who learned to play chess at six years old and consistently placed near the top of every scholastic chess tournament in Virginia by age 11. He has worked for Maurice Ashley, the world's first black chess Grandmaster, since 2013, and is currently employed by Championship Chess. Spenser has taught students of various ages at several schools throughout Richmond, including Harvie Elementary, Trevvett Elementary, St. Bridget School, Hunter Classical Christian School, and Collegiate School. Spenser is also an active member of the Virginia Commonwealth University chess club. During his freshman year at VCU, he worked as a chess coach for the VCU psychology department's Mind MATCH program, a study done to determine the impact of chess skills on a children’s executive decision-making processes. Read more about the study and its resultshere.
          </CardText>
          <CardText className="about-me__text col-md-9 mx-auto">
          &nbsp; &nbsp; &nbsp; &nbsp;Along with chess, Spenser has exhibited great aptitude at music; he was the recipient of the John Philip Sousa Award, the highest honor of his high school band program, and went on to study saxophone performance under Al Regni, former New York Philharmonic saxophonist, at VCU's School of the Arts. Spenser performed in the VCU Symphonic Wind Ensemble as well as the top jazz orchestra in his program. During his time at VCU, he also studied percussion under William Messerschmidt, former principal percussionist for the U.S. Army Band, “Pershing’s Own.” In June 2018, Spenser also represented Virginia in the Settlers of Catan National Championship after winning a qualifying tournament in Williamsburg.
          </CardText>
          <CardText className="about-me__text col-md-9 mx-auto">
          &nbsp; &nbsp; &nbsp; &nbsp;"Chess presents a great opportunity for any student to challenge themselves and learn what it takes to succeed. The lessons taught through chess are invaluable, showing positive effects towards improving memory, decision making, discipline, time management, sportsmanship, and mindfulness."
          </CardText>
          <CardText className="about-me__text col-md-9 mx-auto">
          &nbsp; &nbsp; &nbsp; &nbsp;"I have experience working with students of all ages and am prepared to design a curriculum suited to each individual's strengths and goals. I offer fair and flexible rates for private lessons at your own home, a coffee shop, bar, or public park."
          </CardText>
        </CardBody>
    </Card>
    
    <Card className="card-3">
          <CardTitle className="contact-card__title text-center">Get in Touch!</CardTitle>
          <CardSubtitle className="contact-card__subtitle text-center">
            All messages will be sent to my personal email at kearnsSP@vcu.edu@gmail.com.
          </CardSubtitle>
          <CardBody className="contact-card__body col-md-12">
            <form method="POST" action="/success" className="contact-card__form" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
              <input type="hidden" name="bot-field" />
              <div className="contact-card__fields">
                <div className="contact-card__field half">
                  <input className="contact-card__name" type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="contact-card__field half">
                  <input className="contact-card__email" type="email" name="email" id="email" placeholder="example@email.com" />
                </div>
                <div className="contact-card__field">
                  <textarea className="contact-card__message col-md-7" name="message" id="message" rows="8" placeholder="Start typing..." ></textarea>
                </div>
                <div className="contact-card__field">
                  <div data-netlify-recaptcha="true"></div>
                </div>
              </div>
              <ul className="contact-card__actions">
                <li><input className="contact-card__send-message btn btn-outline" type="submit" value="Send Message" /></li>
              </ul>
            </form>
          </CardBody>
    </Card>
  </Layout>
)

export default IndexPage;