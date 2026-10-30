import { useEffect, useRef, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import Header from './components/header/Header.jsx'
import BottomNavigation from './components/bottomnavigation/BottomNavigation.jsx'
import Modal from './components/modal/Modal.jsx'
import Portrait from './components/charactercard/Portrait.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { pageTitles } from './data/navigation.js'
import './App.css'

export default function App() {
  const { pathname } = useLocation()
  const main = useRef(null)
  const [modal, setModal] = useState(null)
  const page = pageTitles[pathname.replace(/\/$/, '')] || 'Inicio'
  const isLogin = pathname.replace(/\/$/, '') === '/login'

  useEffect(() => {
    document.title = `UMBRA · ${page}`
    main.current.focus({ preventScroll: true })
    window.scrollTo(0, 0)
  }, [pathname, page])

  const className = isLogin ? 'app-frame login-frame' : 'app-frame'

  return (
    <div className={className}>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Header login={isLogin} onNotify={() => setModal({ type: 'notifications' })} />
      <main ref={main} className="main-content" id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" replace />} />
          <Route path="/inicio" element={<Home onSelect={character => setModal({ type: 'character', character })} />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/inicio" replace />} />
        </Routes>
      </main>
      {!isLogin && <BottomNavigation />}
      {modal && <Modal title={modal.type === 'character' ? modal.character.name : 'Notificaciones'} onClose={() => setModal(null)}>
        {modal.type === 'notifications' ? <p className="page-description">No tienes notificaciones nuevas. Estás explorando Umbra como invitado.</p> : <>
          <Portrait character={modal.character} />
          <p className="eyebrow">{modal.character.type} · Nivel {modal.character.level}</p>
          <p className="character-story">{modal.character.story}</p>
        </>}
      </Modal>}
    </div>
  )
}
