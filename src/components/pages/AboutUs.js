import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aboutUs from "../../assets/images/aboutus.jpg";
import Gulnazik from "../../assets/images/GulnazikProfilePic.jpg";
import Katie from "../../assets/images/KatieProfilePic.jpg";
import Aibiike from "../../assets/images/Aibiike1.jpg";
import Joe from "../../assets/images/Joe.jpg";
// import meter2 from '../assets/img/meter2.svg';
// import meter3 from '../assets/img/meter3.svg';
import colorSharp from "../../assets/img/color-sharp.png";

export const AboutUs = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>AboutUs</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>

              <article className="skill-slider">
                <div className="item">
                  <img src={Gulnazik} alt="Image" />
                  <div className="about-info">
                    <h5>Gulnazik Bakhramova</h5>
                    <p>
                      Gulnazik is a Junior College student at the College of San
                      Mateo, California. She is from Kerben, Kyrgyzstan, and was
                      always determined to pursue a university degree abroad. In
                      Kyrgyzstan, Gulnazik was involved in various projects and
                      clubs led by Peace Corps volunteers in her village.
                      Gulnazik spent one academic year in the U.S. High School,
                      in Menlo Park, California, on Future Leaders Exchange
                      (FLEX) in 2019-2020. Studying abroad inspired her to
                      support youth in Kyrgyzstan in following their academic
                      goals and share her experience of being a Kyrgyz student
                      in the U.S.
                    </p>
                  </div>
                </div>
              </article>

              <article className="skill-slider">
                <div className="item">
                  <img src={Katie} alt="Image" />
                  <div className="about-info">
                    <h5> Katie Delgado</h5>
                    <p>
                      Katie first met the founders of "Kel Chai Ich" while
                      volunteering in Peace Corp Kyrgyzstan from 2016-2018.
                      Katie has worked in 4 different countries as an English
                      Teacher to university and elementary students. Recently
                      she changed careers and has been working as a project
                      manager. Her work abroad and project management experience
                      has made her an invaluable addition to the "Kel Chai Ich"
                      team. Katie provides adminstrative support and consults on
                      curriculum development.
                    </p>
                  </div>
                </div>
              </article>

              <article className="skill-slider">
                <div className="item">
                  <img src={Joe} alt="Image" />
                  <div className="about-info">
                    <h5>Joseph Mccleary</h5>
                    <p>
                      Joe worked in Kerben Kyrgyzstan as a Peace Corps Volunteer
                      before moving on to complete a Master's in development
                      studies from the Institute of Development Studies at
                      Sussex. He has also worked and volunteered in Japan,
                      Kazakhstan, and Thailand in a variety of roles. He
                      currently works in research and advocacy surrounding
                      education, vulnerability, migration, and houselessness.
                    </p>
                  </div>
                </div>
              </article>

              <article className="skill-slider">
                <div className="item">
                  <img src={Aibiike} alt="Image" />
                  <div className="about-info">
                    <h5>Aibiike Abdysamatova</h5>
                    <p>
                      Aibiike is a front-end developer and branch moderator at
                      an English language academy, is a true explorer at heart.
                      Her love for problem-solving and connecting the dots has
                      led her to embrace technology and programming, using them
                      as tools to bring her wildest ideas to life. Her passion
                      for STEM has inspired her to pursue a degree in the field.
                      Aibiike plays a crucial role in the "Kel Chai Ich"
                      project, handling all technical aspects with her
                      development skills. With an unwavering belief that
                      determined individuals can achieve remarkable feats, she
                      aims to demonstrate that one's origin should never limit
                      their potential.
                    </p>
                  </div>
                </div>
              </article>

              <article className="container"></article>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="color-sharp"
      />
    </section>
  );
};
