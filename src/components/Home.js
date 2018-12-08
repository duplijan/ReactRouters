import React, {Component}from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Map from '../images/map.png';
import Footer from './Footer'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    axios.get(url)
    .then( res => {
      console.log(res)
      this.setState({
        posts: res.data.slice(0, 10)
      })
    })
  }
  render(){
    const {posts} = this.state;
    const postList = posts.length ?  (
      posts.map( post => {
        return(
          <div className='post card z-depth-2' key={post.id}>
            <img src={Map} alt='map' />
            <div className='card-content'>
              <Link to={`/${post.id}`}>
                <h3 className='card-title green-text'>{post.title}</h3>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
        <div className='center'>
          <p className='center'>No Post Yet</p>
        </div>
    )
    return(
      <div>
        <div className='container'>
          <h1 className='center'>Home</h1>
          {postList}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
