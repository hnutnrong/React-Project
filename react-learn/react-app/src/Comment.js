import React, { Component } from 'react';

class Comment extends Component{
render(){

  return(

    <div>
      <h2>{this.props.comment.name}</h2>
      <p>{this.props.comment.message}</p>
    </div>
  );
}
}
export default Comment;