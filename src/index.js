import React from 'react';
import ReactDOM from 'react-dom/client';
import makeServer from "./server";
import Routing from './routing'



makeServer();
function App() {
  return (
    <>
    <Routing />
    </>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);