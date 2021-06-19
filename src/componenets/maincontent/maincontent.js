import Filter from '../filter/filter';
import Products from '../products/products';
import './../maincontent/maincontent.css';

function Maincontent() {
    return (
      <div className="maincontent-container">
        <Filter />
        <Products />
      </div>
    );
  }
  
  export default Maincontent;