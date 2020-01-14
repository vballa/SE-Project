import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <form action = "http://127.0.0.1:8080/">
        <button type = "submit"  width="48" height="48">edit calender</button><br></br>
      </form>
      <form action = "http://127.0.0.1:8081">
        <button type = "submit"  width="48" height="48">edit time table</button><br></br>
      </form>
      <form action = "http://127.0.0.1:8082">
        <button type = "submit"  width="48" height="48">edit exam duty</button><br></br>
      </form>
    </div>
  );
}

export default App;
