import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductOverlay from './ProductOverlay';
import { useState } from 'react';

function App() {

  const [showProductOverlay, setProductOverlay] = useState(false);

  function onDivClick() {
    setProductOverlay(!showProductOverlay);
  }
  
  function localFileVideoPlayer() {
    // 'use strict'
    var URL = window.URL || window.webkitURL
    var displayMessage = function(message, isError) {
      var element = document.querySelector('#message')
      element.innerHTML = message
      element.className = isError ? 'error' : 'info'
    }
    var playSelectedFile = function(event) {
      var file = this.files[0]
      var type = file.type
      var videoNode = document.querySelector('video')
      var canPlay = videoNode.canPlayType(type)
      if (canPlay === '') canPlay = 'no'
      var message = 'Can play type "' + type + '": ' + canPlay
      var isError = canPlay === 'no'
      displayMessage(message, isError)
  
      if (isError) {
        return
      }
  
      var fileURL = URL.createObjectURL(file)
      videoNode.src = fileURL
    }
    var inputNode = document.querySelector('input')
    inputNode.addEventListener('change', playSelectedFile)
  }

  return (
    <div className="App"> 
      <div id="message"></div>

      <div onClick={onDivClick}>
        {
          showProductOverlay 
          ? (<ProductOverlay/>) 
          : (<button className="qr"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></button>)
        }
      </div>
      
      <video 
        className="video-element"
        controls
        src='https://dafftube.org/wp-content/uploads/2014/01/Sample_1280x720_mp4.mp4'
      >
      </video>
        {/* <div style={{backgroundColor:"red"}}></div> */}
        <input type="file" accept="video/*" onChange={localFileVideoPlayer}/>
    </div>
  );
}

export default App;
