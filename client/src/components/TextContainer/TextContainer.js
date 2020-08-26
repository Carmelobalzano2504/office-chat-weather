import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Real-time Office Chat Application with Local Weather Bar<span role="img" aria-label="emoji">💬</span></h1>
        <p>Built for use in an office setting without having to utilize phones or <br></br> 
          other means of communication between colleagues.  
          Sign in and choose a room for group or private conversations.</p>
    </div>
    {
      users
        ? (
          <div>
            <h1>People in Chat-room:</h1>
            
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;