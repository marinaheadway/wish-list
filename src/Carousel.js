import {useState} from "react";


function Carousel ({images}) {

    const [gift, setGift] = useState(0);
 

  const nextGift = () =>{
    setGift((gift =>{
      gift ++;
      if (gift > images.length-1){
        gift=0;
      }
      return gift;
    }))
  }

  const previousGift = () => {
    setGift((gift  => {
      gift --;
      if (gift<0) {
        gift=images.length-1;
      }
      return gift;
    }))
  }

  return (

    <div className="container" >
    <button onClick={previousGift}>◀️</button>
    <img src={images[gift]} width="300px" alt= "gift"/>
    <button onClick={nextGift}>▶️</button>
         </div>


  )
}

export default Carousel;