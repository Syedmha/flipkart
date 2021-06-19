import './../products/products.css';
import Data from '../../data.json';

function Products() {
    return (
      <div className="products-container">
        <h1>Product</h1>
        <div className="grid-container">
            {
              Data.map(post => {
                return (
                  <div key={ post.id } className="grid-item"> 
                  
                    <h2>{ post.image }</h2>
                    <p> { post.price }</p>
                  </div>
                )
              })
            }
</div>
      </div>
    );
  }
  
  export default Products;