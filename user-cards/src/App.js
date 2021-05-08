import React from 'react';
import axios from 'axios';
import './App.css';
import MainUserCard from './components/MainUserCard.js'
import FollowingsContainer from './components/FollowingsContainer'
import FollowersContainer from './components/FollowersContainer'
class App extends React.Component {
  //set up state for app to hold user, an array of followers, an array of followings
  state = {
    user: {},
    followers: [],
    followings: []
  }

  componentDidMount() {
    //after component mounts, get request sent for user's details
    axios.get('https://api.github.com/users/LambSarah')
      .then(res => {
        //then the response data is set to user state
        this.setState({
          user: res.data,
        })
      })
      //then another get request sent for the list of following
      .then(axios.get('https://api.github.com/users/LambSarah/following')
        //then that response is used to make multiple get requests and those are mapped to followings state array
        .then(response => {
          let followings = response.data;
          followings.forEach((following) => {
            axios.get(`https://api.github.com/users/` + following.login)
              .then(response => {
                let newFollowing = response.data;
                this.setState(prevState => ({
                  followings: [...prevState.followings, newFollowing]
                }))
              })
          })
        })
        .catch(error => console.log(error))
      )
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.user.username !== this.state.username) {
      axios.get('https://api/github.com/users/' + this.state.user.username)
        .then(res => {
          this.setState({
            user: res.data
          })
        })
    }

  }
  render() {
    return (
      <>
        <div>
          <MainUserCard user={this.state.user} />
          <FollowersContainer followers={this.state.followers} />
          <FollowingsContainer followings={this.state.followings} />
        </div>


      </>
    );
  }
}
export default App;
