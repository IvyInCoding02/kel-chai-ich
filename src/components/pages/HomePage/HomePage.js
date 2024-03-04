import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExperImage from "../../../assets/images/kyrgyzgirls.jpg"

export default function HomePage() {
  return (
    <section>
        {/* <Container> */}
        <div style={{margin:"50px"}}>
            <Row className="align-items-center" style={{width:"100%", marginTop:"60px", padding:"20px", background:"grey"}}>
                <Col style={{padding:"30px"}}>
                <h1>KEL CHAI ICH - LAND OF OPPORTUNITIES...</h1>
                <p>
                Kel Chai Ich is nonprofit foundation that focuses on assisting
                students from Kyrgyzstan, particularly those from rural areas
                and young women, in their pursuit of higher education in United
                States.    
                </p>
                </Col>
                <Col>
                <img src={ExperImage} alt=""/>
                </Col>
            </Row>
            <Row className="align-items-center">
            <h1 style={{marginLeft:"400px", padding:"40px"}}>OUR MISSION</h1>
                <Col>
                <img src={ExperImage} alt=""/>
                <p>
                Support
                students from Kyrgyzstan, particularly those from rural areas
                and young women, in their pursuit of higher education abroad.  
                </p>
                </Col>
                <Col>
                <img src={ExperImage} alt=""/>
                <p>
                Provide students with the necessary
                resources, mentorship, and guidance to navigate the application
                and enrollment process for universities outside of Kyrgyzstan.
                </p>
                </Col>                
            </Row>
            <Row className="align-items-center">
                <h1 style={{marginLeft:"400px", padding:"40px"}}>OUR VISION</h1>
                <Col>
                <img style={{borderRadius:"330px", height:"150px", margin:"20px"}}  src={ExperImage} alt=""/>
                <p style={{width:"350px", textAlign:"center"}}>
                Guide perspective girls from regions of Kyrgyzstan and fully
                assist with the application process through mentorship and peer
                support.
              </p>
                </Col>
                <Col>
                <img style={{borderRadius:"330px", height:"150px", margin:"20px"}} src={ExperImage} alt=""/>
                <p style={{width:"350px", textAlign:"center"}}>
                Get all participants accepted to universities abroad with the
                opportunity to qualify for needed scholarships and funding.
              </p>
                </Col>
                <Col>
                <img style={{borderRadius:"330px", height:"150px", margin:"20px"}} src={ExperImage} alt=""/>
                <p style={{width:"350px", textAlign:"center"}}>
                Establish a nation of educated girls investing and supporting
                the younger generation of the program to pursue education at
                their dream universities and countries.
              </p>
                </Col>
            </Row>
            </div>
        {/* </Container> */}
    </section>
  )
}
