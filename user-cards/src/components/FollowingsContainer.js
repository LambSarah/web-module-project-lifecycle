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
                        return (
                            <>
                                <div value={following.login} onClick={this.props.viewUser}>
                                    <FollowingCard key={following.id} id={following.id} following={following} />
                                </div>
                            </>)
                    })}
                </CardGroup>
            </div>
        )
    }
}
export default FollowingsContainer;