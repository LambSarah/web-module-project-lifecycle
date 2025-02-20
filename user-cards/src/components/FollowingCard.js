import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

class FollowingCard extends React.Component {
    render() {
        return (
            <div >
                <Card tag='a' inverse>
                    <CardImg src={this.props.following.avatar_url} alt='follower image' />
                    <CardImgOverlay className='overlay'>
                        <CardTitle>{this.props.following.name}</CardTitle>
                        <CardText>@{this.props.following.login}</CardText>
                    </CardImgOverlay>
                </Card>
            </ div>
        )
    }
}
export default FollowingCard;