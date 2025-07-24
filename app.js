import React from 'react';
// import ReactDom from 'ReactDom';
import { createRoot } from 'react-dom/client';

// // const app = () => {
//     const h2 = React.createElement('h2',{},'This is h2 from react')
//     const root = createRoot(document.getElementById('root'))
//     root.render(h2)
// // }

const h2 = React.createElement('h2',{},'This is h2 from react')
    // const root =  ReactDOM.createRoot(document.getElementById('root'))  
   createRoot(document.getElementById('root')).render(h2)
    // root.render(h2)