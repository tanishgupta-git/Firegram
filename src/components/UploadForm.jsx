import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

export default function UploadForm() {
    const [file,Setfile] = useState(null);
    const [error,Seterror] = useState(null);

    const types = ['image/png','image/jpeg','image/jpg'];

    const handleChange = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
             Setfile(selected);
             Seterror('');
        }else{
            Setfile(null);
           Seterror('Please select an image of type png,jpeg,jpg'); 
        }
    }
    return (
        <form>
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div> }
          { file && <ProgressBar file={file} Setfile={Setfile} /> }
        </div>
      </form>
    )
}
