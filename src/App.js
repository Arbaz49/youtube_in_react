// import "./App.css";
// import LoadingBar from 'react-top-loading-bar';
import { Outlet} from "react-router-dom";
// import DefaultComponent from "./components/DefaultComponent";

// import menu from"./images/menu.png";
// import search from"./images/search.png"
// import voice_search from "./images/voice-search.png";


// import uploadpng from"./images/upload.png"
// import morepng from"./images/more.png"
// import nofification from"./images/notification.png"
// import home from"./images/home.png"
// import explore from"./images/explore.png"
// import subscription from"./images/subscriprion.png"
// import library from"./images/library.png"
// import history from"./images/history.png"
// import playlist from"./images/playlist.png"
// import { useEffect, useState } from "react";
// import Videopage from "./pages/Videopage";


function App() {return(
  <>
  {/* <DefaultComponent/> */}
  
  <Outlet/>
  </>
  
)}

export default App;
