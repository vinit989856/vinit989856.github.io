import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App()
{
          const[first,setFirst]=useState(false);
          const[two,setTwo]=useState(true);


          function pressme(){

            setFirst(false);
            setTwo(true);
          }

          
          function pressme2()
          {

            setFirst(true);
            setTwo(false);
          }
          let mycom="";
          let  mycom2="";
          if(first) mycom=<button onClick={pressme}>Show</button>
          if(two) mycom2=<button onClick={pressme2}>Show</button>
  return (
        <>
         <h1>1st  paragraph</h1>
         <div>My name  is  vinit</div>
         {mycom}
         <br/><br/>
         <h1>2nd  paragraph</h1>
         <div>My name  is  jaimin</div>
        {mycom2}
        </>
  );
}

export default App;
