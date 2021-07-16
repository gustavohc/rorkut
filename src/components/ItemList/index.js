

function ItemList(props) {
  return (
    <a href={props.link}>
      <img src={props.image}/>
      <span>{props.title}</span>
    </a>
  )
}

export default ItemList;