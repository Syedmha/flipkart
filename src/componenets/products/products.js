import './../products/products.css';
import Data from '../../data.json';
import { useState, useEffect } from 'react';

function Products( { List, sorting }) {


  //  const onChangeValue = (e) =>{
  //    const copy = [...Data]
  //    const sorteddata = copy.sort((a,b)=>{ 
  //      if(e.target.value=='increasing') 
  //      return a.price - b.price
  //      else if(e.target.value=='decreasing')
  //      return b.price - a.price
  //     });
  //     sorting(sorteddata);
  //     setProducts(sorteddata);

  //  } 



    return (
      <div className="products-container">
        <div className='sort'  >
      <h3>Sort By</h3>
      <input type="radio" name='sort' value='increasing' onChange={sorting}/>
      <label>Price: Low-High</label>
      <input type="radio" name='sort' value='decreasing' onChange={sorting} />
      <label>Price: High-Low</label>

        </div>
        <div className="grid-container">
            {
              List.map(post => {
                return (
                  <div className='card' key={post.id}>
                  <div key={ post.id }> 
                  <img className='img' src= { post.image } />
                    <p className='brand'><strong>{ post.brand }</strong></p>
                    <p className='title'>{ post.title }</p>
                    <p className='price'> Rs. { post.price }</p>
                    <p className='size'>{ post.size }</p>
                  </div>
                  </div>
                )
              })
            }
            
</div>
      </div>
    );
  }
  
  export default Products;