import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
// import FirestPage from './pages/FirestPage';
import Videopage from './pages/Videopage';
import DefaultComponent from './components/DefaultComponent';


const router=createBrowserRouter([
  {
   
    path:"/",
    element:<DefaultComponent/>,
    children:[
      {
        path:"firstpage",
        element:<DefaultComponent/>,
    },
    {
      path:"/videopage/:id",
      element:<Videopage/>,
  }
  
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
