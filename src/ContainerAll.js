// Creo que esta bien pero no entiendo muy bien este tema, a ver si podria decir que mejorar de mi codigo.


import React, { useState } from  'react';
function toRadian(grades) {
    return grades * 0.01745;
  }

 function toGrades(radians){
    return radians * 57.296;
  };
const Quantity = () =>{
    const [inQuantity, setInQuantity] = useState(true);
    
    const HandlerQuality = (event) => {
        const isInput = event.target.name;
        const value = event.target.value;
        console.log(isInput);
        let cel = 0;
        if(isInput === 'Radianes'){
            cel = toGrades(value);
            document.getElementById('grad').value = cel;
            setInQuantity(true);
        }else{
            cel = toRadian(value);
            document.getElementById('rad').value = cel;
            setInQuantity(false);

        }
       

    }

    return(
        <div className='card'>
            <div className='card-body'>
                <h1>TEMPERATURA</h1>
                <h3>Estas conviertiendo: {inQuantity ? 'Radianes' : 'Grados'}</h3>
                <div className='card-input'>
                    <label>Radianes</label>
                    <input onChange={HandlerQuality} name='Radianes' id='rad' type='number'/>
                </div>
                <div className='card-input'>
                    <label>Grados</label>
                    <input onChange={HandlerQuality} id='grad' type='number'/>
                </div>
            </div>
        </div>
    );
} 

export default Quantity;