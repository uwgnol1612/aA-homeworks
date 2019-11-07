import React from "react";
import { Route } from "react-router-dom";
import PostIndex from "./posts/PostIndex";
import Register from './Register'
import CreatePost from './posts/CreatePost'

const App = () => (
  <div>
    <h1>Hellloooo World!</h1>
    <Route path="/signup" component={Register} />
    <Route path="/new" component={CreatePost} />
    <Route exact path="/" component={PostIndex} />
  </div>
);

export default App;
