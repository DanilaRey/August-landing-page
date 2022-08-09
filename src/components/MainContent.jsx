import React, { useState } from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import { BsFillChatDotsFill, BsFillBrushFill, BsFillPersonFill, BsFillShieldFill, BsTwitter, BsYoutube } from 'react-icons/bs';
import { AiFillApple, AiFillEuroCircle, AiFillBank, AiFillWechat, AiFillPropertySafety, AiFillYuque,AiFillPhone, AiTwotoneMail} from "react-icons/ai";
import {ImFacebook, ImLocation2 } from "react-icons/im";
import Form from 'react-bootstrap/Form';
import MyModal from './UI/ModalWindow/MyModal';


const MainContent = () => {
    const [modalShow, setModalShow] = useState(false)
  return (
    <div className='main'>
        <div className='links__section'>
            <div className='overlay'>
            <Container>
                <Row className='links__main'>
                    <Col className='links__text' md={12} >
                        <h1>WE ARE A<br/> LANDING PAGE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
                        <button className='btn__custom' variant='primary' onClick={() => setModalShow(true)}>
                            LEARN MORE
                        </button>
                        <MyModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
        <div className='features' id='home'>
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
        <div className='about__section' id="about">
            <Container>
                <Row className='about__main'>
                    <Col xs={12} md={6} >
                        <img className='about__img' src={require('../img/aboutimg.jpg')} alt=""></img>
                    </Col>
                    <Col xs={12} md={6} className="about__text__section">
                        <div className='about__text'>
                            <h2>ABOUT US</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h3>Why Choose Us?</h3>
                            <div className='about__choose'>
                                <Col lg={6} sm={6} >
                                    <ul className='about__list'>
                                        <li>Lorem ipsum dolor</li>
                                        <li>Tempor incididunt</li>
                                        <li>Lorem ipsum dolor</li>
                                        <li>Incididunt ut labore</li>
                                    </ul>
                                </Col>
                                <Col lg={6} sm={6} >
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
        <div className='services__section' id='services'>
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
        <div className='gallary__section' id='gallary'>
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
        <div className='clients__section' id='clients'>
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
        <div className='team__section' id='team'>
            <Container>
                <div className='team__main'>
                    <div className='team__title'>
                        <h2>MEET THE TEAM</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </div>
                    <Row>
                        <Col md={3} sm={6}>
                            <div className='team__item'>
                                <img className='team__img' alt='' src={require('../img/team1.jpg')}></img>
                                <div className='caption'>
                                    <h4>John Doe</h4>
                                    <p>Director</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='team__item'>
                                <img className='team__img' alt='' src={require('../img/team2.jpg')}></img>
                                <div className='caption'>
                                    <h4>Mike Doe</h4>
                                    <p>Senior Designer</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='team__item'>
                                <img className='team__img' alt='' src={require('../img/team3.jpg')}></img>
                                <div className='caption'>
                                    <h4>Jane Doe</h4>
                                    <p>Senior Designer</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6}>
                            <div className='team__item'>
                                <img className='team__img' alt='' src={require('../img/team4.jpg')}></img>
                                <div className='caption'>
                                    <h4>Karen Doe</h4>
                                    <p>Project Manager</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
        <div className='contact__secton' id='contact'>
            <Container>
                <div className='contact__main'>
                <Row>
                    <Col md={8}>
                        <Row>   
                            <div className='contact__title'>
                                <h2>GET IN TOUCH</h2>
                                <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                            </div>
                        </Row>
                        <Form>
                            <Row className='contact__input'>
                                <Col md={6}>
                                    <Form.Control className='form__element' type="text" placeholder="Name" />
                                </Col>
                                <Col md={6}>
                                    <Form.Control className='form__element' type="email" placeholder="Email" />
                                </Col>
                            </Row>
                                <Form.Control placeholder="Message" className='form__element' as="textarea" rows={4 } />
                                <button className='contact__btn'>Send Message</button>                        
                        </Form>
                    </Col>
                    <Col md={3} md-offset={1} className="contact__info">
                        <div className='contact__item'>
                            <h3>Contact Info</h3>
                            <p>
                                <span>
                                    <ImLocation2 className='contact__icon'/>
                                    Address<br/>
                                </span>
                                4321 California St, San Francisco, CA 12345
                            </p>
                        </div>
                        <div className='contact__item'>
                            <p>
                                <span>
                                    <AiFillPhone className='contact__icon'/>
                                    Phone<br/>
                                </span>
                                +1 123 456 1234
                            </p>
                        </div>
                        <div className='contact__item'>
                            <p>
                                <span>
                                    <AiTwotoneMail className='contact__icon'/>
                                    Email<br/>
                                </span>
                                info@company.com
                            </p>
                        </div>
                    </Col>
                </Row>
                <Col md={12}>
                    <Row>
                        <div className='contact__social'>
                            <ul>
                                <li>
                                    <ImFacebook className='contact__social-icon'/>
                                </li>
                                <li>
                                    <BsTwitter className='contact__social-icon'/>
                                </li>
                                <li>
                                    <BsYoutube className='contact__social-icon'/>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Col>
                </div>
            </Container>
        </div>
        <div className='footer__section'>
            <Container>
                <p>© 2018 Issaaf Kattan React Land Page Template. Design by <a href='/'>TemplateWire</a></p>
            </Container>
        </div>
    </div>
  )
}

export default MainContent