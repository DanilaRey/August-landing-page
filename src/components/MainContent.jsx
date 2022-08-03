import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFillChatDotsFill, BsFillBrushFill, BsFillPersonFill, BsFillShieldFill } from 'react-icons/bs';
import { AiFillApple, AiFillEuroCircle, AiFillBank, AiFillWechat, AiFillPropertySafety,AiFillYuque } from "react-icons/ai";


const MainContent = () => {
  return (
    <div className='main'>
        <div className='links__section'>
            <div className='overlay'>
            <Container>
                <Row className='links__main'>
                    <Col className='links__text'>
                        <h1>WE ARE A<br/> LANDING PAGE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
                        <a className='btn__custom' href='/'>LEARN MORE</a>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
        <div className='features'>
            <Container>
                <div className='features__title'>
                    <h2>Features</h2>
                </div>
                <Row>
                    <Col xs={6} md={3}>
                       <BsFillChatDotsFill className='icon'/>                       
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                    </Col>
                    <Col xs={6} md={3}>
                    <BsFillBrushFill className='icon'/>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                    </Col>
                    <Col xs={6} md={3}>
                    <BsFillPersonFill className='icon'/>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                    </Col>
                    <Col xs={6} md={3}>
                    <BsFillShieldFill className='icon'/>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='about__section'>
            <Container>
                <Row className='about__main'>
                    <Col xs={12} md={6}>
                        <img className='about__img' src={require('../img/aboutimg.jpg')} alt=""></img>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='about__text'>
                            <h2>ABOUT US</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h3>Why Choose Us?</h3>
                            <div className='about__choose'>
                                <Col lg={6} sm={6} xs={12}>
                                    <ul className='about__list'>
                                        <li>Lorem ipsum dolor</li>
                                        <li>Tempor incididunt</li>
                                        <li>Lorem ipsum dolor</li>
                                        <li>Incididunt ut labore</li>
                                    </ul>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <ul className='about__list'>
                                        <li>Aliquip ex ea commodo</li>
                                        <li>Lorem ipsum dolor</li>
                                        <li>Exercitation ullamco</li>
                                        <li>Lorem ipsum dolor</li>
                                    </ul>
                                </Col>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='services__section'>
            <Container>
                <div className='services__title'>
                    <h2>OUR SERVICES</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                </div>
                <div>
                    <Row>
                        <Col md={4}>
                            <AiFillApple className='icon'/>
                            <div className='services__desc'>
                                <h3>Pellentesque natoque</h3>
                                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                            </div>                                       
                        </Col>
                        <Col md={4}>
                            <AiFillEuroCircle className='icon'/>                       
                            <div className='services__desc'>
                                <h3>Pellentesque natoque</h3>
                                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                            </div> 
                        </Col>
                        <Col md={4}>
                            <AiFillBank className='icon'/>                       
                            <div className='services__desc'>
                                <h3>Pellentesque natoque</h3>
                                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                            </div> 
                        </Col>
                        <Col md={4}>
                            <AiFillWechat className='icon'/>                       
                            <div className='services__desc'>
                                <h3>Pellentesque natoque</h3>
                                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                            </div> 
                        </Col>
                        <Col md={4}>
                            <AiFillPropertySafety className='icon'/>                       
                            <div className='services__desc'>
                                <h3>Pellentesque natoque</h3>
                                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                            </div> 
                        </Col>
                        <Col md={4}>
                            <AiFillYuque className='icon'/>                       
                            <div className='services__desc'>
                                <h3>Pellentesque natoque</h3>
                                <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                            </div> 
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
        <div className='gallary__section'>
            <Container>
                <div className='gallary__title'>
                    <h2>GALLERY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                </div>
                <div className='gallary__portfolio'>
                <Row>
                    <Col sm={6} md={4} lg={4}>
                    <div className='gallary__item'>
                        <div className='hover__text'>
                            <h4>Lorem Ipsum</h4>
                        </div>
                        <img src={require('../img/01-large.jpg')} className="gallary__img" alt=''></img>
                    </div>
                    </Col>

                    <Col sm={6} md={4} lg={4}>
                    <div className='gallary__item'>
                        <div className='hover__text'>
                            <h4>Lorem Ipsum</h4>
                        </div>
                            <img src={require('../img/02-large.jpg')} className="gallary__img" alt=''></img>
                    </div>
                    </Col>

                    <Col sm={6} md={4} lg={4}>
                    <div className='gallary__item'>
                        <div className='hover__text'>
                            <h4>Lorem Ipsum</h4>
                        </div>
                            <img src={require('../img/03-large.jpg')} className="gallary__img" alt=''></img>
                    </div>
                    </Col>

                    <Col sm={6} md={4} lg={4}>
                    <div className='gallary__item'>
                        <div className='hover__text'>
                            <h4>Lorem Ipsum</h4>
                        </div>
                            <img src={require('../img/04-large.jpg')} className="gallary__img" alt=''></img>
                    </div>
                    </Col>

                    <Col sm={6} md={4} lg={4}>
                    <div className='gallary__item'>
                        <div className='hover__text'>
                            <h4>Lorem Ipsum</h4>
                        </div>
                            <img src={require('../img/05-large.jpg')} className="gallary__img" alt=''></img>
                    </div>
                    </Col>

                    <Col sm={6} md={4} lg={4}>
                    <div className='gallary__item'>
                        <div className='hover__text'>
                            <h4>Lorem Ipsum</h4>
                        </div>
                            <img src={require('../img/06-large.jpg')} className="gallary__img" alt=''></img>
                    </div>
                    </Col>

                    <Col sm={6} md={4} lg={4}>
                    <div className='gallary__item'>
                        <div className='hover__text'>
                            <h4>Lorem Ipsum</h4>
                        </div>
                            <img src={require('../img/07-large.jpg')} className="gallary__img" alt=''></img>
                    </div>
                    </Col>

                    <Col sm={6} md={4} lg={4}>
                    <div className='gallary__item'>
                        <div className='hover__text'>
                            <h4>Lorem Ipsum</h4>
                        </div>
                            <img src={require('../img/08-large.jpg')} className="gallary__img" alt=''></img>
                    </div>
                    </Col>

                    <Col sm={6} md={4} lg={4}>
                    <div className='gallary__item'>
                        <div className='hover__text'>
                            <h4>Lorem Ipsum</h4>
                        </div>
                            <img src={require('../img/09-large.jpg')} className="gallary__img" alt=''></img>
                    </div>
                    </Col>

                </Row>
                </div>             
            </Container>
        </div>
        <div className='clients__section'>
            <Container>
            <div className='clients__main'>
                <div className='clients__title'>
                    <h2>WHAT OUR CLIENTS SAY</h2>
                </div>
                <Row>
                    <Col md={4}>
                        <div className='testimonial-item'>
                            <div className='testimonial-image'>
                                <img src={require('../img/download0.jpg')} alt=''></img>
                            </div>
                            <div className='testimonial-content'>
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <div className='testimonial-meta'>- Bohn Doe</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='testimonial-item'>
                            <div className='testimonial-image'>
                                <img src={require('../img/download1.jpg')} alt=''></img>
                            </div>
                            <div className='testimonial-content'>
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <div className='testimonial-meta'>- Johnathan Grow</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='testimonial-item'>
                            <div className='testimonial-image'>
                                <img src={require('../img/download2.jpg')} alt=''></img>
                            </div>
                            <div className='testimonial-content'>
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <div className='testimonial-meta'>- Lupen Alex</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='testimonial-item'>
                            <div className='testimonial-image'>
                                <img src={require('../img/download3.jpg')} alt=''></img>
                            </div>
                            <div className='testimonial-content'>
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <div className='testimonial-meta'>- James Bird</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='testimonial-item'>
                            <div className='testimonial-image'>
                                <img src={require('../img/download4.jpg')} alt=''></img>
                            </div>
                            <div className='testimonial-content'>
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <div className='testimonial-meta'>- Smith Wall</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='testimonial-item'>
                            <div className='testimonial-image'>
                                <img src={require('../img/download5.jpg')} alt=''></img>
                            </div>
                            <div className='testimonial-content'>
                                <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                                <div className='testimonial-meta'>- Allan Roll</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </Container>
        </div>
    </div>

  )
}

export default MainContent