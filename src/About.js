import React from 'react'

import { Card, Row, Col, Container } from 'react-bootstrap'
import { Textfit } from 'react-textfit';


function Quote(props) {
    return (<>&#8220;{props.content}&#8221;</>);
}

function Sample() {
    return (<Card style={{ borderWidth: '5px', }}>


        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text style={{ fontSize: '150%' }}>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
        </Card.Text>
        </Card.Body>

    </Card>)
}

class About extends React.Component {

    render() {
        return (

            <div style={{ backgroundColor: '#6DD3CE', flexBasis: this.props.internalPage.height }}>

                <div style={{ textAlign: 'center', color: 'white', marginTop: '10px', marginBottom: '5px', paddingLeft: '5px', paddingRight: '5px', width: '100%' }}>
                    <Textfit mode="single" max="80">
                        <Quote content="sohail khan" />
                        {/* sohail khan */}
                        <span style={{ color: 'black' }}> - </span>
                        <small class="text-muted">sophomore</small>
                        {/* ///over here who am i changes to my name: and the small is the adjectives that describe me? */}

                    </Textfit>

                </div>

                {/* do something with the widths so that if screen is small cards just appear down in a line */}


                {/* <Card className="w-25" style={{ borderRadius: '0', borderWidth: '10px', width: '', left: '10%' }}>
                    <Card.Body>
                        <p>I go to the University of Illinois at Urbana-Champaign. </p>
                        <p>I am currently pursing a Dual Degree:
                            One in: Computer Science and another in Cogntive 
                        </p>
                    </Card.Body>
                </Card> */}

                {/* <Card className="w-50" style={{ borderRadius: '0', borderWidth: '10px', width: '', left: '20%' }}>
                    <Card.Body>
                        <h2>University of <span style={{ color: 'blue' }}>Illinois</span> @ <span style={{ color: 'orange' }}>Urbana-Champaign</span></h2>

                        <Card className="w-75" style={{ borderRadius: '0', borderWidth: '0px', width: '', left: '0%' }}>
                            <Card.Body>
                                <h2 style={{ fontSize: '200%' }}>Dual Degree:</h2>
                                <h4>Computer Science</h4>
                                <h4>Cognitive Psychology</h4>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card> */}

                <Container>
                    <Row style={{ paddingBottom: '10px' }}>
                        <Col>
                            <Card style={{ borderWidth: '5px'}}>
                                <Card.Body>
                                    <Card.Title><b>University of <span style={{ color: 'blue' }}>Illinois</span> @ <span style={{ color: 'orange' }}>Urbana-Champaign</span></b></Card.Title>
                                    <Card.Text style={{ fontSize: '120%' }}>
                                        <div><b>Dual Degree:</b></div>
                                        <div>- Computer Science</div>
                                        <div>- Cognitive Psychology</div>
                                </Card.Text>
                                </Card.Body>

                            </Card>

                        </Col>
                        <Col>
                        <Card style={{ borderWidth: '5px'}}>
                                <Card.Body>
                                    <Card.Title><b>Contact Me:</b></Card.Title>
                                    <Card.Text style={{ fontSize: '120%' }}>
                                        <div>LinkedIn</div>
                                        <div>Github</div>
                                        <div>Facebook</div>
                                </Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>
                        {/* <Col>
                            <Sample />
                        </Col> */}
                    </Row>

                    <Row style={{ paddingBottom: '10px' }}>
                    <Col>
                        <Card style={{ borderWidth: '5px', }}>
                                <Card.Body>
                                    <Card.Title><b>A little more about me...</b></Card.Title>
                                    <Card.Text style={{ fontSize: '120%' }}>
                                        <div>
                                            <p>
                                                <p>
                                                Hey ya'll. 
                                                My name is Sohail Khan. 
                                                I currently attend the University of Illinois @ Urbana-Champaign where 
                                                I study Computer Science and Cognitive Psychology. 
                                                </p>
                                                
                                                
                                                <p>
                                                I have experience developing web applications, building iot systems, working with voice assistants{/* web applications, building iot systems, bots */}, and love working on whatever strikes my interest at any given moment. 
                                                At the moment, I am working on a chatbot that imitates ony of my friends, as well as working on an eye tracking project to control your computer.
                                                </p>
                                                
                                                <p>
                                                Currently, I am working as an Undergraduate Research Assistant in the Decision Neurscience Labratory, 
                                                where I write code to help perform extractions and analysis on MRI images.
                                                </p>
                                                 
                                                <p>
                                                    While your here, check out my projects section to learn about all the different projects I've worked on!
                                                </p>
                                            </p>
                                        </div>
                                </Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>
                </Container>





            </div>
        )
    }


}

export default About