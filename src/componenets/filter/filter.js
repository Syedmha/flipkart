import './../filter/filter.css';
import Data from '../../data.json';


function Filter( { List, filtering, filtering1 }) {
 


  const onChangehandler = () => {
    console.log(List)
  }


    return (
      <div className="filter-container">
        <div className='sec-1'>
            <p><strong>Filters</strong></p>
            <hr></hr>
        </div>
        <div className='sec-2'>
           
            <label className='brands'>Brands : </label>
            <select onChange = {filtering}>
              <option value="UCB">UCB</option>
              <option value="Levis" >Levis</option>
              <option value="CK">CK</option>
            </select>

            <hr></hr>
        </div>
        <div className='sec-3'>
            <p>Size</p>
            <input type="radio" name='sort' value='S' onChange = {filtering1}/>
      <label>S</label>
      <input type="radio" name='sort' value='M' onChange = {filtering1} />
      <label>M</label>
      <input type="radio" name='sort' value='L' onChange = {filtering1} />
      <label>L</label>
      <input type="radio" name='sort' value='XL'  onChange = {filtering1}/>
      <label>XL</label>

            <hr></hr>
        </div>
        <div className='sec-4'>
            <label className='ideal'>Ideal For : </label>
            <select onChange = {onChangehandler}>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
        </div>
      </div>
    );
  }
  
  export default Filter;