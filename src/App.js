import './App.css';
import loader from './loader.svg';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photos: [],
      isLoading: false,
      error: false
    }
    window.onscroll = () => {
      const {
        getPhotos,
        state: {
          isLoading,
          error
        }
      } = this;
      if(isLoading || error) return;

      if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos();
      }
        
      }
    }
    
  async getPhotos() {
    this.setState({isLoading: true});
    const count = 10;
    const apiKey ='JY3Kdz5zSiwA-NHacB4PqhGjKf38md4NkLAmqvPkMck';
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    try{
      const response = await fetch(apiUrl);
      const data = await response.json();
      this.setState({photos: [...this.state.photos, ...data], totalImages: this.state.totalImages + data.length});
    } catch(error) {
      this.setState({
        isLoading: false})
      console.log(error);
    }
    this.setState({isLoading: false});
  }
  componentDidMount() {
    //intial load of photos
    this.getPhotos();
  }
  render(){
    const {photos, isLoading} = this.state;
    return (
      <div className="App">
      <h1>UNSPLASH API - INFINITE SCROLL</h1>
      <hr/>
      
      
          <div className='image-container'>
          {    
                photos.map((photo) => {
                  const links = photo.links.html;
                  const id = photo.id;
                  const description = photo.alt_description;
                  const title = photo.alt_description;
                  const image = photo.urls.regular;
                  return(
                    <div key={id}>
                      <a href={links}>
                        <img alt={description} src={image} title={title} />
                      </a>
                    </div>

                  )
                  
              }) 
          }
          {
            isLoading  &&  <div className='loader-container'>
                            <img src={loader} alt='Loading' className='loader'/>
                          </div>
          }    
          </div>
      </div>
    );
  }
}

export default App;

/*
isLoading 
              ?
                <div className='loader'>
                  <img src={loader} alt='isLoading' className='loader'/>
                </div>
              :


import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import request from "superagent";
import debounce from "lodash.debounce";

class InfiniteUsers extends Component {
  constructor(props) {
    super(props);

    // Sets up our initial state
    this.state = {
      error: false,
      hasMore: true,
      isisLoading: false,
      users: [],
    };

    // Binds our scroll event handler
    window.onscroll = debounce(() => {
      const {
        loadUsers,
        state: {
          error,
          isisLoading,
          hasMore,
        },
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already isLoading
      // * there's nothing left to load
      if (error || isisLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        loadUsers();
      }
    }, 100);
  }

  componentWillMount() {
    // Loads some users on initial load
    this.loadUsers();
  }

  loadUsers = () => {
    this.setState({ isisLoading: true }, () => {
      request
        .get('https://randomuser.me/api/?results=10')
        .then((results) => {
          // Creates a massaged array of user data
          const nextUsers = results.body.results.map(user => ({
            email: user.email,
            name: Object.values(user.name).join(' '),
            photo: user.picture.medium,
            username: user.login.username,
            uuid: user.login.uuid,
          }));

          // Merges the next users into our existing users
          this.setState({
            // Note: Depending on the API you're using, this value may
            // be returned as part of the payload to indicate that there
            // is no additional data to be loaded
            hasMore: (this.state.users.length < 100),
            isisLoading: false,
            users: [
              ...this.state.users,
              ...nextUsers,
            ],
          });
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            isisLoading: false,
           });
        })
    });
  }

  render() {
    const {
      error,
      hasMore,
      isisLoading,
      users,
    } = this.state;

    return (
      <div>
        <h1>Infinite Users!</h1>
        <p>Scroll down to load more!!</p>
        {users.map(user => (
          <Fragment key={user.username}>
            <hr />
            <div style={{ display: 'flex' }}>
              <img
                alt={user.username}
                src={user.photo}
                style={{
                  borderRadius: '50%',
                  height: 72,
                  marginRight: 20,
                  width: 72,
                }}
              />
              <div>
                <h2 style={{ marginTop: 0 }}>
                  @{user.username}
                </h2>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
              </div>
            </div>
          </Fragment>
        ))}
        <hr />
        {error &&
          <div style={{ color: '#900' }}>
            {error}
          </div>
        }
        {isisLoading &&
          <div>isLoading...</div>
        }
        {!hasMore &&
          <div>You did it! You reached the end!</div>
        }
      </div>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<InfiniteUsers />, container);

*/