import React from 'react';
import axios from 'axios';
import './App.css';
import MainUserCard from './components/MainUserCard.js'
import FollowingsContainer from './components/FollowingsContainer'
import FollowersContainer from './components/FollowersContainer'
import NavBar from './components/NavBar.js'


class App extends React.Component {
  //set up state for app to hold user, an array of followers, an array of followings
  // and state for search
  state = {
    user: {},
    followers: [],
    followings: [],
    searchText: '',
    searchSyntax: '',
    searchPlaceholder: 'search'
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
        //****** This is the same as above but for followers. Because i don't have
        // any followers, this had to be commented out, it kept breaking my app */


        /*  .then(axios.get('https://api.github.com/users/LambSarah/followers'))
         .then(resp => {
           if (resp !== null) {
             let followers = resp;
             followers.forEach((follower) => {
               axios.get('https://api.github.com/users/' + this.follower.login)
                 .catch(error => {
                   console.log(error);
                   throw new Error(error)
                 })
                 .then(response => {
                   let newFollower = response.data;
                   this.setState(prevState => ({
                     followers: [...prevState.followers, newFollower]
                   }))
                 })
             })
           }
         }
         )) */
        //Catch any errors from api calls
        .catch(error => {
          console.log('Api call failed due to ', error.message);
          throw new Error('The API call was unsuccessful, because ', error.message);

        }

        ))
  }

  // handle click on followers' card
  handleClick = (e, login) => {
    let newClick = e.target.value;
    console.log(newClick)
  }

  // updates the placeholder of search input to search option chosen
  // only updates if user hasn't typed anything in search input yet
  changeSearchPlaceholder = e => {
    this.setState({ searchPlaceholder: e.target.value })
  }

  //changes the search query to chosen search option
  changeSearchSyntax = (e) => {
    let searchParam = e.target.value;
    this.changeSearchPlaceholder(e);
    console.log('search param:', searchParam)
    switch (searchParam) {
      case 'name search':
        console.log('syntax:', this.state.searchSyntax)
        this.setState({ searchSyntax: `/search/users?q=${this.state.searchText} in:name` });
        break;
      case 'email search':
        this.setState({ searchSyntax: `/search/users?q=${this.state.searchText} in:email` });
        break;
      default:
        this.setState({ searchSyntax: `/search/users?q=user:${this.state.searchText}` });
    }
  }

  //handles changes in search input
  changeSearchText = e => {
    const newSearchText = e.target.value;
    this.setState({ searchText: newSearchText });
  }

  //onClick handler for search form
  searchApi = (e) => {
    e.preventDefault();
    console.log('sending request:', this.state.searchSyntax)
    axios.get('https://api.github.com/' + this.state.searchSyntax)
      .then(response => console.log('api response:', response))
      .catch(error => console.log('search error:', error))
  }


  componentDidUpdate() {
    // if (this.state.searchText !== null) {
    //   console.log('search query:', this.state.searchSyntax);
    // }

  }
  //"user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"

  render() {
    return (
      <>Search text:
        <pre>{JSON.stringify(this.state.searchText)}</pre>
      search syntax:
        <pre>{JSON.stringify(this.state.searchSyntax)}</pre>
        <div>
          <NavBar changeSearchSyntax={this.changeSearchSyntax} changeSearchText={this.changeSearchText} searchApi={this.searchApi} searchPlaceholder={this.state.searchPlaceholder} />
          <MainUserCard user={this.state.user} />
          <FollowersContainer followers={this.state.followers} viewUser={this.handleClick} />
          <FollowingsContainer followings={this.state.followings} viewUser={this.handleClick} />
        </div>


      </>
    );
  }
}
export default App;
