import React from 'react'
import Pound from '../svg/Pound'

function TaskBarBtn({ setShowModal }) {
    const handleClick = () => {
        setShowModal(true);
    }

  return (
    <div>
        <button className='task-bar-btn' onClick={handleClick}> <Pound /> Update payment method</button>
    </div>
  )
}

export default TaskBarBtn