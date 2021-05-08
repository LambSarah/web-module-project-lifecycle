import React from 'react';
import axios from 'axios';
import './App.css';
import MainUserCard from './components/MainUserCard.js'
import CardsWrapper from './components/CardsWrapper.js'
import FollowingsContainer from './components/FollowingsContainer'
class App extends React.Component {
  state = {
    user: {
      // id: '',
      // username: '',
      // avatarUrl: '',
      // email: '',
      // location: '',
      // firstAndLastName: '',
      // organization: '',
      // publicRepos: 0,
      // numfollowers: 0,
      // followers: [],
      // numfollowing: 0,
      // following: []
    },
    followers: [
      // {
      //   follower: {
      //     id: '',
      //     username: '',
      //     avatarUrl: '',
      //     email: '',
      //     location: '',
      //     firstAndLastName: '',
      //     organization: '',
      //     publicRepos: 0,
      //     numfollowers: 0,
      //     followers: [],
      //     numFollowing: 0,
      //     following: []
      //   }
    ],
    followings: [
      // {
      //   following: {
      //     id: '',
      //     username: '',
      //     avatarUrl: '',
      //     email: '',
      //     location: '',
      //     firstAndLastName: '',
      //     organization: '',
      //     publicRepos: 0,
      //     numfollowers: 0,
      //     followers: [],
      //     numFollowing: 0,
      //     following: []
      //   }
      // }
    ]
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/LambSarah')
      .then(res => {
        console.log('initial call, waiting for promise', res.data.message)
        this.setState({
          user: res.data,
          // id: res.data.id,
          // username: res.data.login,
          // avatarUrl: res.data.avatar_url,
          // email: res.data.email,
          // location: res.data.location,
          // firstAndLastName: res.data.name,
          // organization: res.data.company,
          // publicRepos: res.data.public_repos,
          // numfollowers: res.data.followers,
          // followers: res.data.followers_url,
          // numfollowing: res.data.following,
          // followings: axios.get(res.data.following_url).then(response => console.log(response)),
          // followers: axios.get(res.data.followers_url)

        }

        )
        console.log('CDM called, profile,after promise is fullfilled:', res.data)
      })

      .then(axios.get('https://api.github.com/users/LambSarah/following')
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

            // this.setState({ followings: { following: [response.data] } })
            //let newCard = cardMaker(followerData);
            // cardsDiv.appendChild(newCard);
          })
          //   .then(axios.get({this.state.avatarUrl).then(res => console.log(response))
        })
        .catch(error => console.log(error))

      )
  }


  componentDidUpdate(prevProps, prevState) {
    // console.log('CDU called:', prevProps, prevState);
    // console.log('current state/props:', this.props, this.state)
    // if (prevState.user.username !== this.state.username) {
    //   axios.get('https://api/github.com/users/' + this.state.user.username)
    //     .then(res => {
    //       this.setState({
    //         data: res.data,
    //         user: {
    //           username: res.data.login,
    //           email: res.data.email,
    //           location: res.data.location,
    //           firstAndLastName: res.data.name,
    //           organization: res.data.company,
    //           publicRepos: res.data.public_repos,
    //           followers: res.data.followers,
    //           following: res.data.following,
    //         }
    //       })
    //     })
    // } else {
    //   return
    // }

  }
  render() {
    return (
      <>
        <div>
          <MainUserCard user={this.state.user} />

          <FollowingsContainer followings={this.state.followings} />
        </div>


      </>
    );
  }
}
export default App;
