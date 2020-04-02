import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';


import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <CommentDetail 
          author="sam" 
          timeAgo="Today at 4:45pm" 
          comment="Hello" 
          profileImage={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 2:45pm" 
          comment="Whatsup?" 
          profileImage={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Yesterday at 1:45pm" 
          comment="Goodbye" 
          profileImage={faker.image.avatar()}
        />
      </ApprovalCard>

    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
