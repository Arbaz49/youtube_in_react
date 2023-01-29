import "../App.css";
import LoadingBar from 'react-top-loading-bar';
import {useNavigate } from "react-router-dom";

import menu from"../images/menu.png";
import search from"../images/search.png"
import voice_search from "../images/voice-search.png";


import uploadpng from"../images/upload.png"
import morepng from"../images/more.png"
import nofification from"../images/notification.png"
import home from"../images/home.png"
import explore from"../images/explore.png"
import subscription from"../images/subscriprion.png"
import library from"../images/library.png"
import history from"../images/history.png"
import playlist from"../images/playlist.png"
import {useState,useEffect} from "react";
// import Videopage from "./pages/Videopage";

let apikey = "AIzaSyDCqZfm4-VOmOZrssi8SfRuAwiZH2YiOeo";

function DefaultComponent() {
  const [input,setinput]=useState("");
  const [firstApicall,setfirstApicall] = useState([]);
  const [progress, setProgress] = useState(0)


  const handlechange=(e)=> {
    setinput(e.target.value);
  }
  useEffect(()=>{
    setProgress(10);
    //api call
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=youtube&videoDuration=any&videoType=any&key=${apikey}&maxResults=50`)
            .then((response) => {
                return response.json();
            }).then((data)=>{
                setProgress(50);

              console.log(data);
              setfirstApicall(data.items);
              setProgress(100);
              
              //need to display the data on display

            })
  },[])



const searchclick=()=>{
  setProgress(10);
  console.log("search clicked");
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part= snippet&q=${input}&videoDuration=any&videoType=any&key=${apikey}&maxResults=50`)
  .then((response) => {
    return response.json();
}).then((data)=>{
  setProgress(50);
  console.log(data);
  setProgress(100)
  setfirstApicall(data.items);
  

})
}
const redirecttoVideopage = useNavigate();
const redirect=(redirectId)=> {
  redirecttoVideopage(`/videopage/${redirectId}`);

}
  return (

    <div className="App">
       <LoadingBar color="#f11946" height={4} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <nav className="flex-div">
        <div className="nav-left" style={{ display: "flex" }}>
          <img src={menu} className="menu-icon" alt="g"/>
         

          <h2 style={{fontWeight: "900", color: "red"}}>YouTube</h2>
        </div>
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input
              type="text"
              placeholder="serach"
              id="input"
              autoComplete="off"
              onChange={handlechange}
            />
            <img src={search} id="search" alt="g" onClick={searchclick}/>
          </div>
          <img src={voice_search} className="mic-icon" alt="g"/>
        </div>
        <div className="nav-right flex-div">
          <img src={uploadpng} alt="g"/>
          <img src={morepng} alt="g"/>
          <img src={nofification} alt="g"/>
          <img
            src="https://yt3.ggpht.com/gNILb1FK2AztuPaz1Qg4jFCSAsx3J1H20jAQEglXx1SDiUWC7FeNeC5AHIfugFAY2qDfk2skxA=s88-c-k-c0x00ffffff-no-rj-mo"
            className="user-icon"
            alt="g"
          />
        </div>
      </nav>

      <div className="sidebar">
        <div className="shortcut-links">
          <a href="/">
            <img src={home} alt="g"/>
            <p>Home</p>
          </a>
          <a href="/">
            <img src={explore} alt="g" />
            <p>explore</p>
          </a>
          <a href="/">
            <img src={subscription} alt="g"/>
            <p>subscriprion</p>
          </a>
          <a href="/">
            <img src={library} alt="g" />
            <p>Library</p>
          </a>
          <a href="/">
            <img src={history} alt="g"/>
            <p>History</p>
          </a>
          <a href="/">
            <img src={playlist}alt="" />
            <p>Playlist</p>
          </a>
          <hr />
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={{
              textAlign: " center",
              color: "blue",
              border: "1px solid blue",
              fontSize: " 15px",
              padding: "5px",
            }}
          >
            <i className="fa-light fa-user"></i> Sign in
          </button>
        </div>
      </div>

      <div className="main-content" id="card-container">
        
{
  firstApicall.map((ele)=>{
    return (
      
        <div key={ele.id.videoId} className="card">
    <span target="_blank" href={`https://www.youtube.com/watch?v=${ele.id.videoId}`} onClick={()=>redirect(`${ele.id.videoId}`)}>
        <img src={ele.snippet.thumbnails.medium.url} alt="" className="thumb"/>
    
        <div style={{display: "flex",alignItems:" center"}}>
        <img src="https://cdn.pixabay.com/photo/2022/01/21/08/15/woman-6954155__340.jpg" alt="" id="vid-channel-logo"/>
        <h4 id="video-title" style={{marginLeft:"5px",fontWight:"bold"}}>{ele.snippet.title}</h4>
    </div>
    
        </span>
      
        
       <a target="_blank" rel="noreferrer" href={`https://youtube.com/channel/${ele.snippet.channelId}`}><h3 id="channel-name" style={{marginLeft:"20px",color:"grey",marginTop:"15px"}}>{ele.snippet.channelTitle}</h3></a>
        {/* <h5 id="views" style={{marginLeft:"20px",color:"grey"}}></h5> */}
    </div>
      
    
    )
  })
}
    



      </div>
      
    </div>
   

  );
}

export default DefaultComponent;
