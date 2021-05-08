import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import './Cards.css'
import ContributionsGraph from './ContributionsGraph.js'
class MainUserCard extends React.Component {
    render() {
        return (
            <Container className='themed-container' fluid='sm'>
                <Row>
                    <Col className='fluid'>
                        <div className='user-card'>
                            <Card>
                                <CardImg top width='318' height='290' src={this.props.user.avatar_url} alt='user card image' />
                                <CardBody>
                                    <CardTitle className='title' tag='h1'>{this.props.user.name}</CardTitle>
                                    <CardTitle className='title-username' tag='h4'>{this.props.user.login}</CardTitle>
                                    <CardText className='details'>
                                        <small className='text-muted'>{this.props.user.company}</small>
                                        Location: {this.props.user.location} <br />
                                        Profile:
                                                <a href={this.props.user.url}>
                                            {this.props.user.url}
                                        </a><br />Followers: {this.props.user.followers}<br />            Following: {this.props.user.following}<br />Bio: {this.props.user.bio}
                                    </CardText>
                                </CardBody>
                            </Card>

                        </div >
                    </Col>
                    <Col className='fluid'>
                        <ContributionsGraph user={this.props.user} />
                    </Col>
                </Row>
            </Container >
        )
    }
}
export default MainUserCard;