import React from "react";
import PostForm from './Components/PostForm'
import Posts from './Components/Posts'
import FetchPosts from './Components/FetchPosts'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <h2>Ваши посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Посты с сервера</h2>
          <FetchPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
