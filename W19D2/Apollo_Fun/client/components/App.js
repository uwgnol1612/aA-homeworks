import React from "react";
import { Route, Switch } from "react-router-dom";
import DogIndex from "./dogs/DogIndex";
import ToyIndex from "./toys/ToyIndex";
import DogDetail from './dogs/DogDetail'
import ToyDetail from './toys/ToyDetail'


const App = () => (
<div>
    <Switch>
        <Route exact path="/toys/:toyId" component={ToyDetail} />
        <Route exact path="/dogs/:dogId" component={DogDetail} />
        <Route path="/toys" component={ToyIndex} />
        <Route path="/" component={DogIndex} />
    </Switch>
</div>
)

export default App;