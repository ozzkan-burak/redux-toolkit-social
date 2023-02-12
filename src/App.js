import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// components
import { Navbar } from './app/Navbar';
import AddPostForm from './features/posts/AddPostForm';
import PostList from './features/posts/PostList';
import SinglePostPage from './features/posts/SinglePostPage';
import EditPostForm from './features/posts/EditPostForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostList />
              </>
            )}
          />
          {/* <Redirect to="/" /> */}
          <Route exact path="/posts/:id" component={SinglePostPage} />
          <Route exact path="/edit-post/:id" component={EditPostForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
