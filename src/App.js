import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

function App() {
  const [inputFields, setInputField] = useState([
    {firstName: '', lastName: ''}, 
  ]);
  return (
    <Container>
      <h1>Add New Member</h1>
      <form>
        { inputFields.map((inputField, index) => (
          <div key={index}>
            <input type="text" />
            </div>
        ) )}
      </form>
    </Container>
      
  );
}

export default App;
