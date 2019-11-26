import React, { Component, useState, useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./Post";
import Profile from "./Profile";

import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
  Image,
  Card,
  Jumbotron,
} from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const MainNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/home">Bozo</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/posts">All Posts</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      users: [],
      imgLinks: []
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://picsum.photos/v2/list?page=2&limit=100")
    ])
      .then(([res1, res2, res3]) => {
        return Promise.all([res1.json(), res2.json(), res3.json()]);
      })
      .then(([res1, res2, res3]) => {
        this.setState({ posts: res1, users: res2, imgLinks: res3 });
      }).catch(console.log);
  }

  render() {
    return (
      <div>
        <Router>
        <MainNav />
        <Image className="mainImg" src="https://source.unsplash.com/random" />
        
          <Switch>
            <Route path="/home" component={Home}  />
            <Route path="/posts" component={AllPosts} />
            <Route path="/about" component={About} />
            <Route path="/user/:id" component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}


const Home = () => {
  return (
    <Container>
      
    <Jumbotron style={{marginTop: 10}}>
      <Card.Title>
        Home Page
      </Card.Title>
      <Card.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae laoreet nunc, maximus dapibus arcu. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu enim porta, sagittis mauris vel, ullamcorper risus. Vestibulum vestibulum pharetra pharetra. Curabitur magna leo, auctor nec lectus eget, iaculis tempor urna. Praesent ac dictum eros. Morbi volutpat, nisl sed aliquam cursus, lorem ligula congue risus, vitae imperdiet eros sapien vel felis. Cras sagittis maximus ante in tempus. Pellentesque in tellus ac augue iaculis venenatis interdum in sapien.<br/><br/>

      Morbi vehicula id justo nec sagittis. Cras fringilla magna et eros ultricies, vel molestie arcu blandit. Duis laoreet pulvinar odio, blandit placerat augue euismod eu. Duis sapien ex, gravida eu erat id, congue varius velit. Sed vel cursus est. Ut vitae arcu at felis mattis facilisis. Donec venenatis vestibulum sem, id faucibus neque mollis non. Cras mauris purus, facilisis sed pellentesque non, fermentum vel erat. Vestibulum ac nisi in eros efficitur ultricies et eu turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut elementum nisl a est luctus, at mattis arcu gravida.<br/><br/>

      Aenean est purus, semper ac risus vitae, aliquam consequat erat. Nunc finibus sodales lacus vitae tincidunt. Praesent luctus sodales mauris a ornare. Nullam et ullamcorper elit. Phasellus bibendum at orci nec malesuada. Suspendisse metus mauris, fermentum sit amet magna condimentum, consequat rutrum nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras erat arcu, egestas ac nisi vitae, volutpat laoreet tortor. Etiam in ipsum sed lacus condimentum ornare quis non augue. Etiam eget ante sodales, malesuada urna vitae, finibus erat. Donec nec metus sed ipsum finibus faucibus. Proin magna ipsum, consequat a mauris vel, pharetra ultricies enim. Nam interdum tempus ipsum eget facilisis. Duis commodo, justo nec eleifend pharetra, lacus lacus varius eros, ac volutpat ligula sapien id massa. In dui felis, laoreet eget quam et, imperdiet elementum urna.
      </Card.Body>
    </Jumbotron>

    </Container>
  )
}

const About = () => {
  return (
    <Container>
      
    <Jumbotron style={{marginTop: 10}}>
      <Card.Title>
        About
      </Card.Title>
      <Card.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae laoreet nunc, maximus dapibus arcu. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu enim porta, sagittis mauris vel, ullamcorper risus. Vestibulum vestibulum pharetra pharetra. Curabitur magna leo, auctor nec lectus eget, iaculis tempor urna. Praesent ac dictum eros. Morbi volutpat, nisl sed aliquam cursus, lorem ligula congue risus, vitae imperdiet eros sapien vel felis. Cras sagittis maximus ante in tempus. Pellentesque in tellus ac augue iaculis venenatis interdum in sapien.<br/><br/>

      Morbi vehicula id justo nec sagittis. Cras fringilla magna et eros ultricies, vel molestie arcu blandit. Duis laoreet pulvinar odio, blandit placerat augue euismod eu. Duis sapien ex, gravida eu erat id, congue varius velit. Sed vel cursus est. Ut vitae arcu at felis mattis facilisis. Donec venenatis vestibulum sem, id faucibus neque mollis non. Cras mauris purus, facilisis sed pellentesque non, fermentum vel erat. Vestibulum ac nisi in eros efficitur ultricies et eu turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut elementum nisl a est luctus, at mattis arcu gravida.<br/><br/>

      Aenean est purus, semper ac risus vitae, aliquam consequat erat. Nunc finibus sodales lacus vitae tincidunt. Praesent luctus sodales mauris a ornare. Nullam et ullamcorper elit. Phasellus bibendum at orci nec malesuada. Suspendisse metus mauris, fermentum sit amet magna condimentum, consequat rutrum nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras erat arcu, egestas ac nisi vitae, volutpat laoreet tortor. Etiam in ipsum sed lacus condimentum ornare quis non augue. Etiam eget ante sodales, malesuada urna vitae, finibus erat. Donec nec metus sed ipsum finibus faucibus. Proin magna ipsum, consequat a mauris vel, pharetra ultricies enim. Nam interdum tempus ipsum eget facilisis. Duis commodo, justo nec eleifend pharetra, lacus lacus varius eros, ac volutpat ligula sapien id massa. In dui felis, laoreet eget quam et, imperdiet elementum urna.
      </Card.Body>
    </Jumbotron>

    </Container>
  );
}

class AllPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      users: [],
      imgLinks: []
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://picsum.photos/v2/list?page=2&limit=100")
    ])
      .then(([res1, res2, res3]) => {
        return Promise.all([res1.json(), res2.json(), res3.json()]);
      })
      .then(([res1, res2, res3]) => {
        this.setState({ posts: res1, users: res2, imgLinks: res3 });
      }).catch(console.log);

    /*     fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => {
      this.setState({posts: data});

      fetch('https://picsum.photos/v2/list?page=2&limit=' + this.state.posts.length)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({imgLinks: data})
      })
      .catch(console.log)

    })
    .catch(console.log)

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({users: data})
    })
    .catch(console.log) */
  }

  render() { 
    return (
      <Container>
          <h1 className="title">All Posts</h1>
          {this.state.posts.map(post => {
            return (
              <Post
              key={post.id}
              post={post}
              users={this.state.users}
              imgLink={this.state.imgLinks[post.id-1].download_url}
            />
            )
          })}
        </Container>
    );
  }
}

export default App;
