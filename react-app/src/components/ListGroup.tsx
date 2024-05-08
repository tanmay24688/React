import { useState } from "react";
//import { MouseEvent } from "react";

interface Props{
    items:string[];
    heading:string;
    onSelectItem:(item:string)=>void;
}
function ListGroup({items,heading,onSelectItem}:Props) {
  //  items = [];
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No Items found</p>
  //       </>
  //     );

  //or
  //const message=items.length===0?<p>No Items found</p>:null
  //or
  // const getMessage=()=>{
  //     return items.length===0?<p>No Items found</p>:null
  // }
  //let selectedIndex = 0;
  const [selectedIndex,setSelectedIndex]=useState(-1);
  //const [name,setName]=useState('')
 // arr[0] //variable
 // arr[1]//updater function
  //const handleClick=(event:MouseEvent)=>console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          //   <li className="list-group-item" key={item} onClick={handleClick}>{item}</li> //key is requied else it'll throw warning. Its like id.
          //   <li className={selectedIndex===index ?'list-group-item active':'list-group-item'} key={item} onClick={handleClick}>{item}</li> //key is requied else it'll throw warning. Its like id.
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item)
            }}
          >
            {item}
          </li> //key is requied else it'll throw warning. Its like id.
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
