const GetData = async () => {
    
    var precioDolar = 0

    let url = "https://s3.amazonaws.com/dolartoday/data.json";
    
    let settings = { method: "Get" };
    
    const response = await fetch(url,settings)
    
    const data = await response.json()
    
    precioDolar= data.USD.transferencia 
    
     
     
    return precioDolar

    }

    export default GetData;