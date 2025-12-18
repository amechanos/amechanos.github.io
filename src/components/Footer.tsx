import SocialLinks from './SocialLinks'

export default function Footer(){
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--glass)', background: 'rgba(1, 1, 24, 0.6))' }}>
      <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap: '1rem' }}>
        <div>© {new Date().getFullYear()} jhxu </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
