import React from 'react';
import PropTypes from "prop-types"

function Food(a){
  return (
  <div>
    <h1>I like {a.name}</h1>
    <h4>{a.rating}/5</h4>
    <img src={a.picture} alt={a.name}/>
  </div>
  )

}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired

}

const foodILike = [
  {
    id : 1,
    name : "bab",
    img : "bab_img",
    rating : 1.2
  },
  {
    id : 2,
    name : "gook",
    img : "gook_img",
    rating : 5.9
  }
]


function App() {
  return (
    <div className="App">
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.img} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
