import React, {useEffect, useState} from 'react';
import {Spinner, ListGroup} from 'react-bootstrap';

function loader(condition, content) {
    if (condition) {
      return (
        <Spinner animation="border" role="status" style={{ margin: 20 }}>
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    } else {
      return content;
    }
  }
  
  const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
        .then(res => res.json())
        .then(data => {
          setComments(data);
        });
    }, []);
  
    function postComments() {
      if (comments.length === 0) {
        return (
          <Spinner animation="border" role="status" style={{ margin: 20 }}>
            <span className="sr-only">Loading...</span>
          </Spinner>
        );
      } else {
        return comments.map(comment => (
          <ListGroup.Item>{comment.body}</ListGroup.Item>
        ));
      }
    }
  
    return (
      <ListGroup variant="flush">
        <ListGroup.Item>Comments</ListGroup.Item>
        {loader(
          comments.length === 0,
          comments.map(comment => (
            <ListGroup.Item key={comment.id}>{comment.body}</ListGroup.Item>
          ))
        )}
      </ListGroup>
    );
  };

export default Comments;