import React from 'react';
import FollowerCard from './FollowerCard.js'
import { CardGroup } from 'reactstrap';
import './Cards.css'

class FollowersContainer extends React.Component {
    render() {
        return (
            <div>
                <h5 className='title' id='followersTitle'>Followers:</h5>
                <CardGroup>
                    {this.props.followers.map((follower) => {
                        return (<FollowerCard key={follower.id} follower={follower} />)
                    })}
                </CardGroup>
            </div >
        )
    }
}
export default FollowersContainer;