import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: ''
    }
  }
  componentDidMount(){
    let id = this.props.match.params.post_id;
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    axios.get(url + id)
      .then( res => {
        this.setState({
          post: res.data
        })
        console.log(res.data)
      })
  }
  render(){
    const post = this.state.post ? (
      <div className='post card'>
        <div className='card-content'>
          <h4 className='center green-text text-darken-4'>{this.state.post.title}</h4>
          <p>{this.state.post.body}</p>
        </div>
      </div>
    ) : (
      <div className='center'>LOODING POST...</div>
    )
    return(
      <div className='container'>
        {post}
      </div>
    )
  }
}
export default Post;
