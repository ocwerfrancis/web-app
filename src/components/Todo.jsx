// import React, { Component } from 'react';
import  { useState} from 'react';
import Backdrop from './Backdrop';
import Modal from "./Modal";
// import Todo from "./components/Todo";

// class Todo extends Component {

//     const [modalisopen, setModalIsOpen ] = useState(false);
   
//     handleDelete = (props) =>{
        
//     }   

//     render() { 
//         return ( 
//             <div>
//               <div className='card'>
//                     <h2>Learn React</h2>
//                     <div className='actions'>
//                     <button onClick={this.handleDelete} className='btn btn-danger btn-sm'>Delete</button>   
//                     </div>
//                 </div>  
//             </div>
//          );
//     }
// }
 
// export default Todo;

function Todo(props) {

    const [modalisopen, setModalIsOpen ] = useState(false);
   
   function handleDelete (props){
      setModalIsOpen(true);  
    }
    function handleModal(props){
        setModalIsOpen(false)
    }

    
        return (  
            <div>
              <div className='card'>
                    <h2>{props.text}</h2>
                    <div className='actions'>
                    <button onClick={handleDelete} className='btn btn-danger btn-sm'>Delete</button>   
                    </div>
                    {modalisopen && <Modal onCancel={handleModal} onConfirm={handleModal}/>}
                    {modalisopen && <Backdrop onCancel={handleModal}/>}
            
                </div>  
            </div>
         );
    
}
export default Todo;