import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

class FollowerCard extends React.Component {
    render() {
        return (
            <div onClick={this.props.viewUser}>
                <Card inverse>
                    <CardImg src={this.props.follower.avatar_url} alt='follower image' />
                    <CardImgOverlay className='overlay'>
                        <CardTitle>{this.props.follower.name}</CardTitle>
                        <CardText>@{this.props.follower.login}</CardText>
                    </CardImgOverlay>
                </Card>
            </div>
        )
    }
}
export default FollowerCard;