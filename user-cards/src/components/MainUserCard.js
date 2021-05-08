import React from 'react';
import { Container, Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import './Cards.css'

class MainUserCard extends React.Component {
    render() {
        return (
            <Container className='themed-container' fluid='sm'>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div className='user-card'>
                            <Card>
                                <CardImg top width='100%' height='30%' src={this.props.user.avatar_url} alt='user card image' />
                                <CardBody>
                                    <CardTitle className='title' tag='h1'>{this.props.user.name}</CardTitle>
                                    <CardTitle className='title-username' tag='h4'>{this.props.user.login}</CardTitle>
                                    <CardText>
                                        <small className='text-muted'>{this.props.user.company}</small>
                                        <p className='details'>Location: {this.props.user.location}</p>
                                        <p>Profile:
                                                <a href={this.props.user.url}>
                                                {this.props.user.url}
                                            </a><br />Followers: {this.props.user.followers}<br />            Following: {this.props.user.following}<br />Bio: {this.props.user.bio}</p>
                                    </CardText>
                                </CardBody>
                            </Card>

                        </div >
                    </Col>
                </Row>
            </Container >
        )
    }
}
export default MainUserCard;