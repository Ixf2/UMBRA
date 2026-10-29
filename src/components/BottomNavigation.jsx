import Icon from './Icon';
import { routes } from '../navigation.js';

const tabs = [
  {
    label: 'Inicio',
    icon: 'home'
  },
  {
    label: 'Biblioteca',
    icon: 'book'
  },
  {
    label: 'Inspiración',
    icon: 'sparkle'
  },
  {
    label: 'Perfil',
    icon: 'user'
  },
];

export default function BottomNavigation({ activeTab }) {
  return <nav className="bottom-navigation" aria-label="Navegación principal" onKeyDown={event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    const links = [...event.currentTarget.querySelectorAll('a')]
    const index = links.indexOf(document.activeElement)
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? links.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + links.length) % links.length
    event.preventDefault()
    links[next].focus()
  }}>
    {tabs.map(tab => <a
      key={tab.label}
      href={`#${routes[tab.label]}`}
      className={activeTab === tab.label ? 'nav-item active' : 'nav-item'}
    aria-current={activeTab === tab.label ? 'page' : undefined}
  >
    <Icon name={tab.icon} />
    <span className="nav-label">{tab.label}</span>
  </a>
  )
}
</nav >
}
