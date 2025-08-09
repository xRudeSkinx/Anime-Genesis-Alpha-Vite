
import React from 'react'
import { Link } from 'react-router-dom'

export default function Gencore() {
  return (
    <div style={{minHeight:'100vh',display:'grid',placeItems:'center',background:'#0b0b0b',color:'#eaeaea',textAlign:'center',padding:'2rem'}}>
      <main>
        <h1 style={{fontSize:'2rem',marginBottom:12}}>🧠 GENCORE — Sandbox</h1>
        <p style={{opacity:.8, marginBottom:20}}>Sandbox route is working.</p>
        <Link to="/" style={{background:'#374151',padding:'10px 16px',borderRadius:12,color:'#fff',fontWeight:700,textDecoration:'none'}}>Back Home</Link>
      </main>
    </div>
  )
}
