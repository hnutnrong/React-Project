import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
class  ShowComment extends Component {
  render(){
    return (
      <div className="App">
        <h1>Show AllComment</h1> 
        {this.props.comments.map((comment) => <Comment key={comment.id} comment={comment}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    comments: state
  }
}

export default connect(mapStateToProps)(ShowComment);
