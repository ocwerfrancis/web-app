// import React, { Component } from 'react'

// class Backdrop extends Component {
    
//     render() { 
//         return ( 
//             <div className='backdrop'/>
//          );
//     }
// }
 
// export default Backdrop;

function Backdrop(props){
    return (
    <div className='backdrop' onClick={props.onCancel}/>
    );
}
export default Backdrop;