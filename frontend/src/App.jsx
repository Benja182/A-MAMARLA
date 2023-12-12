import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import NotFound from './views/NotFound';
import PostList from './components/postList';
import PostDetail from './views/PostDetail';
import InteractiveComponent from './components/InteractiveComponent';
import CreatePost from './views/CreatePost';
import Comments from './views/Comments';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* ... Otras rutas */}
          <Route path="/create-post" component={CreatePost} />
          <Route path="/comments/:postId" component={Comments} />
          <Route path="/interactive" component={InteractiveComponent} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
