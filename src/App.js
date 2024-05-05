import {useState} from "react";
import {data} from "./data";
import './App.css';
import Carousel from "./Carousel";

function App() {
 
 
const [gift, setGift]=useState(data);

const removeGift = (id) =>{
  let newGift = gift.filter((gift) => gift.id!==id);
  setGift(newGift)
}
  


  return (
    <div>
    <div className="container" >
      <h1>Wish list of {gift.length} gifts</h1>
      </div>

{gift.map ((element => {
  const {id, item, images}=element;

return (
  <div key={id} >
  <div className="container header" >
     <h2>{id} - {item}</h2>
     </div>
 
 <div className="container">
<Carousel images ={images}/>
 </div>
 
 
<div className="container" >
    <button className="btn" onClick ={() => removeGift (id)}>Remove</button>
    </div>
        </div>


)


}))}

<div className="container" >
    <button className="btn" onClick ={() => setGift([])}>DELETE ALL</button>
    </div>
 
        </div>
  );
}

export default App;
