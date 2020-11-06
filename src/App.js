import React, {useState, useEffect} from 'react';
import dolarAPI from './components/dolarAPI'
const moment = require('moment');
require('moment/locale/es.js');






function App() {
  

  const [dolarprice, setDolarprice] = useState("");
  var date = moment()

  var hoy= date.locale('es').format('LLL')
  

  useEffect(()=>{

    
  
    (async () => {
  
      var dolarHoy= await dolarAPI()
      
      setDolarprice(dolarHoy)
      
    })()
   
    
  
  }, []);
  


  


  return (
    <>
<div class="flex h-screen">
  <div class="m-auto text-center">
  Dolar del {hoy}
  <div className="font-hairline text-6xl text-green-700"> $1 <span className="text-black">=</span> </div>
  <div className="font-hairline text-6xl"><span className="t text-teal-700">{dolarprice} </span> Bolivares</div> 
  </div>
</div>
  
    
    </>
  );
}

export default App;
