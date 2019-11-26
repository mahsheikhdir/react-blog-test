import React , {Component}from 'react';
import {Card, Container, ListGroup} from 'react-bootstrap';
import Post from "./Post";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            posts: [],
        }
    }

    componentDidMount() {
        const userPosts = "https://jsonplaceholder.typicode.com/posts?userId=" + (this.props.match.params.id);
        Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch(userPosts)
          ])
            .then(([res1, res2]) => {
              return Promise.all([res1.json(), res2.json()]);
            })
            .then(([res1, res2]) => {
                this.setState({ users: res1, posts: res2});
            }).catch(console.log);
    }

    createBox(label, info){
        if(info === undefined){
            return "Loading..";
        }
        return(
            <ListGroup horizontal style={{paddingTop: 10}}>
                <ListGroup.Item style={{width: 150}}>{label}</ListGroup.Item>
                <ListGroup.Item>{info}</ListGroup.Item>
            </ListGroup>
        )
    }

    render() {
        let user = this.state.users[this.props.match.params.id-1];

        return (
          <Container style={{ paddingTop: 10 }}>
            <Card>
              <Card.Header>
                <Card.Title>{user && user.name}</Card.Title>
              </Card.Header>
              <Card.Body>
                {this.createBox("Username", user && user.username)}
                {this.createBox("Phone", user && user.phone)}
                {this.createBox(
                  "City",
                  user && user.address !== undefined ? user.address.city : "Loading..."
                )}
                {this.createBox(
                  "Company",
                  user && user.company !== undefined ? user.company.name : "Loading..."
                )}
                {this.createBox("Website", user && user.website)}
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      {" "}
                      {user && user.company !== undefined
                        ? user.company.catchPhrase
                        : "Loading.."}{" "}
                    </p>
                    <footer className="blockquote-footer">
                      {user && user.name} from{" "}
                      <cite>
                        {user && user.company !== undefined
                          ? user.company.name
                          : "Loading.."}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card.Body>
            </Card>

            <h3 style={{marginTop: 10}}>Posts by {user && user.name} </h3>

            {this.state.posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                  users={this.state.users}
                  imgLink={'https://source.unsplash.com/random'}
                />
              );
            })}
          </Container>
        );
    }
}
 
export default Profile;

