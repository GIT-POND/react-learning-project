import React from 'react'
import { NavPanel } from '../Components'

const Settings = () => {
  return (
    <div className='home-bg'>
      <NavPanel/>
      <section className='center-pnl'>
        <h4 style={{position:'sticky',top:'0',padding:'.5em 2em', backgroundImage:'linear-gradient(to right,rgba(255, 86, 120, 1), #fff59b)'}}>SETTINGS</h4>
      </section>
      <section className='right-pnl'></section>
    </div>
  )
}

export default Settings