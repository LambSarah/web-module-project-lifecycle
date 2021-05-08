import React from 'react';
import FollowingCard from './FollowingCard.js'
import { CardGroup } from 'reactstrap';

class FollowingsContainer extends React.Component {
    render() {
        return (
            <div>
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