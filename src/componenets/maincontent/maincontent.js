import Filter from '../filter/filter';
import Products from '../products/products';
import Data from '../../data.json';

import { useState } from 'react';

function Maincontent() {

  
  const [ List , setList ] = useState(Data);


  const sorting = (e) =>{
     const copy = [...Data]
     const sorteddata = copy.sort((a,b)=>{ 
       if(e.target.value=='increasing') 
       return a.price - b.price
       else if(e.target.value=='decreasing')
       return b.price - a.price
      });
      setList(sorteddata);
   }


   const filtering = (e) =>{
     let brandd = e.target.value;
     
      setList(Data.filter((product)=> {
        return product.brand===e.target.value;      
      }))

   }


  
   const filtering1 = (e) =>{
    let sizee = e.target.value;
    
    // if(sizee === 'S')
    //  { 
    //    setList(Data.filter((product)=> {
    //    return product.size===e.target.value;      
    //  }))
    // }
    // else if( sizee === 'M')
    // {
    //   setList(Data.filter((product)=> {
    //     return product.size===e.target.value;      
    //   }))
    // }
    // else if( sizee === 'L')
    // {
    //   setList(Data.filter((product)=> {
    //     return product.size===e.target.value;      
    //   }))
    // }
    // else if( sizee === 'XL')
    // {
    //   setList(Data.filter((product)=> {
    //     return product.size===e.target.value;      
    //   }))
    // }
    
    if(sizee === "S" || 
    sizee ==="M" || 
    sizee === "L" || 
    sizee === "XL" )
    {
      setList(Data.filter((product)=> {
            return product.size.map( (i) => { return i===e.target.value})    
          }))
          console.log("here")
    }


  }



    return (
      <div className="maincontent-container">
        
        <Products  List={List} sorting={sorting}/>
        <Filter  List={List} filtering={filtering} filtering1={filtering1} />
      </div>
    );
  }
  
  export default Maincontent;