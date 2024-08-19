import {useEffect,useState} from 'react';
 
   function useCurrency(currency){
     const[money,setMoney]=useState({});
     useEffect(()=>{
          fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
          .then((res)=>res.json())
          .then((res)=>setMoney(res[money]));
          console.log(money);
          return money;
     },[money])
   }

   export default useCurrency;