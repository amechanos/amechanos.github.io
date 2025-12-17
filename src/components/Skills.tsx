import React from 'react'

const skills = ['Godot', 'GDScript', 'Photoshop', 'Illustrator', 'Figma', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']

export default function Skills(){
  return (
    <section className="container" style={{ padding: '1.5rem 0' }}>
      <h3>Skills</h3>
      <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginTop:'.75rem' }}>
        {skills.map(s => (
          <span key={s} style={{ background:'var(--glass)', padding:'.35rem .6rem', borderRadius:8 }}>{s}</span>
        ))} 
      </div>
    </section>
  )
}
