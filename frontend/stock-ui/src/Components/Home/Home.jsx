import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { ReactComponent as HeroImage } from './heroImage.svg';
import { ReactComponent as Line } from './Line.svg';
import { ReactComponent as DevImage } from './dev.svg';

import Layers from "@mui/icons-material/Layers";
import Phonelink from "@mui/icons-material/Phonelink";
import Comment from "@mui/icons-material/Comment";
import "./home.css"
import Navigation from '../Navbar/Navigation';

const Home = () => {
    return (
        <>
            <div className="pageWrapper">
                <Navigation />
                <Line className="line" />
                <Container fluid className="contentContainer">
                    <Row className="heroRow">
                        <Col md={6} className="heroTitleContainer">
                            <div className="heroTitle">The Stock Market, <br /> Simplified.</div>
                        </Col>
                        <Col md={6}>
                            <HeroImage className="heroImage" />
                        </Col>
                    </Row>
                    <Row className="perkRow">
                        <Col xl={12}>
                            <div className="perkTitle">
                                Our Perks
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="perkWrapper">
                                <Layers className="perkIcon" style={{ fontSize: 48, color: 'white' }} />
                                An hand-crafted<br />application just<br />for you"
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="perkWrapper">
                                <Phonelink className="perkIcon" style={{ fontSize: 48, color: 'white' }} />
                                Available on both PC and<br />mobile by 2020.
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="perkWrapper">
                                <Comment className="perkIcon" style={{ fontSize: 48, color: 'white' }} />
                                24/7 support.<br />We will always be here for<br />you.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}><div className="attnTitle">Attention</div></Col>
                        <Col xl={12} className="attnMsgCol">
                            <div className="attnMsg">
                                This is a paper-trading stock trading web site.
                                This means no money is taken or given on the website.
                                This project was merely for fun and is constantly being worked on.
                                Thanks for visting!
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12} className="devImageCol">
                            <DevImage className="devImage" />
                            <div className="improvingTitle">
                                Always Improving
                            </div>
                            <div className="improvingText">
                                New Features are being added monthly but since it’s for you, what would you like to see?
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home