import './App.css';
import loader from './loader.svg';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photos: [],
      isLoading: false,
      ready: false,
      totalImages: 0,
      imagesLoaded: 0
      
    }
    window.onscroll = () => {
      const {getPhotos} = this;
    
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && this.state.ready){
        this.setState({ready: false}, () => {
          getPhotos();
        })
      }
        
      }
    }
    
   getPhotos = async () => {
    this.setState({isLoading: true});
    const count = 10;
    const apiKey ='JY3Kdz5zSiwA-NHacB4PqhGjKf38md4NkLAmqvPkMck';
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    try{
      const response = await fetch(apiUrl);
      const data = await response.json();
      this.setState({photos: [...this.state.photos, ...data], totalImages: this.state.totalImages + data.length });
    } catch(error) {
      console.log(error);
    }
    console.log('totalImages',this.state.totalImages);
  }
  imageLoaded = () => {
    this.setState({imagesLoaded: this.state.imagesLoaded + 1}, () => {
      console.log('imagesLoaded',this.state.imagesLoaded);
      if(this.state.imagesLoaded === this.state.totalImages){
        this.setState({ready: true, isLoading: false});
      }
    });
    


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
                      <a href={links} key={id}>
                        <img onLoad={this.imageLoaded} alt={description} src={image} title={title} />
                      </a>
                  )   
              }) 
          }
          {
            isLoading 
            ?
              <div className='loader-container'>
                  <img src={loader} alt='Loading' className='loader'/>
              </div>
            : null
          }    
          </div>
      </div>
    );
  }
}
export default App;
