import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';


import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">

      <CommentDetail 
        author="sam" 
        timeAgo="Today at 4:45pm" 
        comment="Hello" 
        profileImage={faker.image.avatar()}
      />

      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 2:45pm" 
        comment="Whatsup?" 
        profileImage={faker.image.avatar()}
      />

      <CommentDetail 
        author="Jane" 
        timeAgo="Yesterday at 1:45pm" 
        comment="Goodbye" 
        profileImage={faker.image.avatar()}
      />

    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
