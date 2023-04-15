import React from 'react';
import ReactDOM from 'react-dom/client';
import makeServer from "./server";
import Routing from './routing'
import Theme from './Theme';



makeServer();
function App() {
  return (
    <>
    <Theme />
    <Routing />
    </>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);