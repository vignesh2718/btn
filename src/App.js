import React  ,{useState}from 'react';
import './App.css';
import './index.css';


function App() {
  const [count, setCount] = useState(0);
  function inc(){
    setCount(count+1);
    // console.log(count);
  }
  function dec(){
      setCount(count-1);
      // console.log(count);
  }
  // const[change, setChange] = useState("change me");
  // function changeName(){
  //   setChange("Iam a Web developer");
  // }
  

  return (
    <div className="button">
      <h1 className='title'>{count}</h1>
      <button className='inc_btn' onClick={inc}>Increase</button>
      <button className='dec_btn' onClick={dec}>Decrease</button>
    

  
    {/* <h3 className='title'>{change}</h3> */}
  {/* <button className='btn' onClick={changeName}>{change}</button> */}
</div>
  );
}

export default App;
