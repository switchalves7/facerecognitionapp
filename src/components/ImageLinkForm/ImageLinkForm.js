import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 b'>{'Upload an image and let me detect some faces...'}</p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input  className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='f4 w-30 grow link ph3 pv2 dib black b' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}



export default ImageLinkForm;