
import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div style={{minHeight:'100vh',display:'grid',placeItems:'center',background:'#0b0b0b',color:'#eaeaea',textAlign:'center',padding:'2rem'}}>
      <main>
        <h1 style={{fontSize:'2rem',marginBottom:12}}>Anime Genesis — Home</h1>
        <p style={{opacity:.8, marginBottom:20}}>If you can see this, routing works.</p>
        <Link to="/gencore" style={{background:'#7c3aed',padding:'10px 16px',borderRadius:12,color:'#fff',fontWeight:700,textDecoration:'none'}}>Open GENCORE</Link>
      </main>
    </div>
  )
}
