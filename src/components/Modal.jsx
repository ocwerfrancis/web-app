// import React, { Component } from 'react'

// class Modals extends Component {
    
//     render() { 
//         return ( 
//         <div className='modal'>
//           <p>Are you sure?</p>
//           <button className='btn btn-secondary btn-sm m-2'>Cancel</button>
//           <button className="btn btn-primary">Confirm</button>  
//         </div> );
//     }
// }
 
// export default Modals;

function Modal(props){

  function cancelHandler(){
    props.onCancel(true);
  }

  function confirmHandler(){
    props.onConfirm(false);
  }

  return ( 
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn-secondary btn-sm m-2' onClick={cancelHandler}>Cancel</button>
      <button className="btn btn-danger" onClick={confirmHandler}>Confirm</button>  
    </div> );
}
export default Modal;