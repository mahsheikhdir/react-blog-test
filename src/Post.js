import React , {useState, useEffect} from 'react';
import {
    Card,
    Button,
    Image,
  } from "react-bootstrap";

import Link from "react-router-dom";

import Comments from "./Comments";

const Post = ({ post, users, imgLink }) => {
    const [name, setName] = useState("name");
  
    useEffect(() => {
      let t = users.find(user => {
        return user.id === post.userId;
      });
  
      if (t !== undefined) {
        setName(t.name);
      }
    }, [users]);
  
    return (
      <Card className="posts">
        <Card.Header>
          <Card.Title>{post.title}</Card.Title>
        </Card.Header>
        <Card.Body>
            <Image src={imgLink} className="postImg" />
          <Card.Title>By 
          <Link to={"/user/" + post.userId}>
          {name}
          </Link>
          </Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
        <Comments postId={post.id} />
      </Card>
    );
  };

export default Post;