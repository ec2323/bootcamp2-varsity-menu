import React, {useState, useEffect} from 'react'

const MenuItem = props => {
  
  const [clicked, setClicked] = useState(false);

  return (
    <button class={clicked ? "menu-item selected" : "menu-item"} onClick={function(){
      if(!clicked){
        props.addItem({
          name: props.name,
          price : props.price
        })
      }else{
        props.removeItem({name: props.name})
      }
      setClicked(!clicked)
      }}>
      <img src={props.picture} alt={props.name} />
      <dt>{props.name}</dt>
      <dd>{props.price}</dd>
    </button>
  )
}
export default MenuItem
