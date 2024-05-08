import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
//import ListGroup from "./components/ListGroup";

// const handleSelectItem = (item: string) => {
//   console.log(item);
// };


function App() {
  //  let items = ["New York", "San Franscisco", "Tokyo", "London", "Paris"];
  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
  
  
  // return <div className="alert alert-primary" ><Alert>Alert </Alert>
  //  Lorem ipsum dolor <span>hi</span>
  //  <Button onClick={()=>console.log('Clicked')} color='primary'>My Button</Button>
  //  </div>;
  const [alertVisiable,setAlertVisibility]=useState(false);
  return(
    <div>
     {alertVisiable && <Alert onClose={()=>setAlertVisibility(false)}>
        My Alert
      </Alert>}
      <Button onClick={()=>setAlertVisibility(true)} color='primary'>My Button</Button>
    </div>
  )
}

export default App;
