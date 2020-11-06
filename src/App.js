import React, {useState, useEffect} from 'react';
import dolarAPI from './components/dolarAPI'
const moment = require('moment');
require('moment/locale/es.js');






function App() {
  

  const [dolarprice, setDolarprice] = useState("");
  const [dolar, setDolar] = useState("");
  const [bolivar, setBolivar] = useState("");
  var date = moment()

  var hoy= date.locale('es').format('LLL')
  
   


  

  useEffect(()=>{

    
  
    (async () => {
  
      var dolarHoy= await dolarAPI()
      
      setDolarprice(dolarHoy)
      
    })()
   
    
  
  }, []);
  
  function handleChange(e){

    setDolar(e.target.value)
    
    const result = dolarprice * dolar

   console.log(result)
    
  setBolivar(result)

    }


    function handleChange1(e){

      setBolivar(e.target.value)
      
      const result = bolivar / dolarprice
  
     console.log(result)
      
    setDolar(result)
  
      }
  

  


  return (
    <>
<div class="flex h-screen">
  <div class="m-auto text-center">
  Dolar del {hoy}
  
  <div className="font-hairline text-6xl"><span className="t text-teal-700">{dolarprice} </span> Bolivares</div> 
  </div>


</div>
<div className="flex flex-row">
      <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker" >$</span>
      <input type="number"  value={dolar} name="price" className="bg-grey-lighter text-grey-darker py-2  rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold"onChange={handleChange}></input>
  </div>

   <div className="flex flex-row">
   <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">Bs</span>
   <input type="number" value={bolivar} name="price" className="bg-grey-lighter text-grey-darker py-2  rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold" onChange={handleChange1}></input>
</div>
    
    </>
  );
}

export default App;
