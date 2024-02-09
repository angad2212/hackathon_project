import React, { useState } from 'react'
import './Form.css'
import{v4 as uuidV4} from 'uuid';
export default function Form() {
  const [roomId,setRoomId]=useState('');
  const [userName,setUserName]=useState('');
      const createRoom = (e)=>{
          e.preventDefault();
          const id = uuidV4();
         setRoomId(id);
        }
        
        
  
  return (

    <div className = "container">
        <div className="createRoom mx-5 p-4">
        <h3 className='mb-5 '>Create Room</h3>
      <div className="mb-3 ">
  <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" onChange={(e)=>setUserName(e.target.value)} value={userName} placeholder="Enter Your Name"/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">RoomID</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" onChange={(e)=>setRoomId(e.target.value)} value={roomId} placeholder=""/>
  
</div>
<button type="button"  onClick={createRoom}className="btn btn-success col-md-12">Create Room</button>
        </div>
        <div className="joinRoom p-4 mx-5">

<h3 className='mb-5'>Join Room</h3>
      <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name"/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">RoomID</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Room Id"/>
</div>
<button type="button" className="btn btn-success col-md-12">Join Room</button>
        </div>
    </div>
    
    )
}
