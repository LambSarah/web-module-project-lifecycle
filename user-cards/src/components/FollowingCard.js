import React from 'react'
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

class FollowingCard extends React.Component {
    render() {
        return (
            <Card inverse>
                <CardImg width='100%' src={this.props.following.avatar_url} alt='follower image' />
                <CardImgOverlay>
                    <CardTitle>{this.props.following.name}</CardTitle>
                </CardImgOverlay>


            </Card>

        )
    }
}
export default FollowingCard;