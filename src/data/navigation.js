export const menuItems = [
  { label: 'Inicio', path: '/inicio', icon: 'home' },
  { label: 'Iniciar sesión', path: '/login' },
]

export const mainTabs = [
  { label: 'Inicio', path: '/inicio', icon: 'home' },
  { label: 'Biblioteca', path: '/biblioteca', icon: 'book', pending: true },
  { label: 'Inspiración', path: '/inspiracion', icon: 'sparkle', pending: true },
  { label: 'Perfil', path: '/perfil', icon: 'user', pending: true },
]
export const pageTitles = Object.fromEntries(menuItems.map(item => [item.path, item.label]))
