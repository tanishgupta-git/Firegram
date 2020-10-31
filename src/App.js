import React,{useState} from 'react';
import './App.css';
import {Title} from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Model';

function App() {
    const [selectedimg,Setselectedimg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid Setselectedimg={Setselectedimg}/>
      {selectedimg && <Modal selectedimg={selectedimg} Setselectedimg={Setselectedimg} /> }
      </div>
  );
}

export default App;