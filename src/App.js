import React from "react";
import Routes from "./Routes";
import { Container } from 'semantic-ui-react';

function App(props) {
  return (
    
    <div>
      <style>
        {`
      body {
        background-image : url("tu_bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        
      }
      
    }
    `}
      </style>
      <Container >
        <Routes />
      </Container >
    </div>
  );
}

export default App;