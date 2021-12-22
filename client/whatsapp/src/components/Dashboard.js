import './css/Dashboard.css';

import React from 'react'

import Sidebar from './Sidebar';

export default function Dashboard({id}) {
  return (
    <div className='d-flex dashboard-wrapper'>
        <Sidebar id={id}></Sidebar>
    </div>
  )
}
