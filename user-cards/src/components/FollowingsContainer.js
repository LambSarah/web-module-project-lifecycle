import React from 'react';
import FollowingCard from './FollowingCard.js'
import { CardGroup } from 'reactstrap';

class FollowingsContainer extends React.Component {
    render() {
        return (
            <div>
                <h5 className='title' id='followingTitle'>Following:</h5>
                <CardGroup>
                    {this.props.followings.map((following) => {
                        return (<FollowingCard key={following.id} following={following} />)
                    })}
                </CardGroup>
            </div>
        )
    }
}
export default FollowingsContainer;