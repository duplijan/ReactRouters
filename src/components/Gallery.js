import React, {Component} from 'react';
import axios from 'axios';

class Gallery extends Component {
    constructor(){
      super()
      this.state ={
        images: []
      }
    }

    componentDidMount(){
      const url = 'https://jsonplaceholder.typicode.com/photos';
      axios.get(url)
        .then( res => {
          this.setState({
            images: res.data.slice(0, 20)
          })
        })
    }
    render(){
      const {images} = this.state;
      const imagesGallerry = images.length ? (
        images.map( img => {
          return (
            <div className="grid-item" key={img.id}>
               <div className="card">
                 <div className="card-image">
                   <img src={img.thumbnailUrl} alt={img.title} />
                   <span className="card-title">{img.id}</span>
                 </div>
                 <div className="card-content">
                   <p>{img.title}</p>
                 </div>
               </div>
           </div>
          )
        })
      ) : (
        <div className='container'>LOADING GALLERY...</div>
      )
      return(
        <div className='container-grid'>
            {imagesGallerry}
        </div>
      )
    }
}

export default Gallery;
