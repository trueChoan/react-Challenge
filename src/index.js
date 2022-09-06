import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
export function Contact(props)  {

  return (
    <div  className=" text-center friend-item" >
   <div className="contact-info"><h3>{props.myName}</h3>
   <h4>{props.email}</h4>
   <h4>{props.tel}</h4></div>
  <button className="delete-btn ">delete</button></div> 
  )
}
export const App = (
  // write your React Code here

  <div > 
    <h1 className="text-center ">My contacts list 📱</h1>
<div id="container">
  <Contact myName = "Emmanuel" email='emmanuel@email.com' tel='23423434'/>
  <Contact myName = "Johana" email='johana@email.com' tel='23423435'/>
  <Contact myName = "Lucas" email='Lucas@email.com' tel='23423436'/>
  <Contact myName = "Marie" email='Marie@email.com' tel='23423437'/>
  <Contact myName = "Pedro" email='Pedro@email.com' tel='23423438'/>
  </div></div>
);

ReactDOM.render(App, document.getElementById('root'));
