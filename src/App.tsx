import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import TodoList from './pages/TodoList'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={TodoList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
