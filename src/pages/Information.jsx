import { useState } from 'react'
import { Link } from 'react-router'
import Icon from '../components/icon/Icon.jsx'

export function Inspiration() {
  return <section className="inspiration-panel">
    <Icon name="sparkle" size={30} />
    <h2>El comienzo de una leyenda</h2>
    <p>Tu personaje recibe una carta escrita con su propia letra, fechada cien años en el futuro. ¿Qué advertencia contiene?</p>
    <Link className="primary-button" to="/crear-personaje">Imaginar un personaje</Link>
  </section>
}

export function Profile() {
  return <section className="profile-panel">
    <Icon name="user" size={36} />
    <h2>Estás explorando como invitado</h2>
    <p>No has iniciado sesión. Puedes explorar los personajes de ejemplo y probar la navegación.</p>
    <Link className="primary-button" to="/login">Ir a Iniciar sesión</Link>
    <Link className="secondary-button" to="/registro">Ir a Registro</Link>
    <Link className="inline-link" to="/accesibilidad">Preferencias de accesibilidad</Link>
  </section>
}

export function Accessibility({ preferences, onChange, error }) {
  const [message, setMessage] = useState('')
  function update(key, checked) {
    onChange({ [key]: checked })
    setMessage('Preferencias de accesibilidad aplicadas.')
  }
  return <section className="information-page">
    <p>Puedes adaptar la lectura. Los cambios se aplican en todas las pantallas.</p>
    <label className="preference-option"><input type="checkbox" checked={preferences.highContrast} onChange={event => update('highContrast', event.target.checked)} />Aumentar el contraste</label>
    <label className="preference-option"><input type="checkbox" checked={preferences.largeText} onChange={event => update('largeText', event.target.checked)} />Aumentar el tamaño del texto</label>
    <p className="feedback" role="status">{error || message || 'Las preferencias se guardan en este navegador cuando el almacenamiento está disponible.'}</p>
    <h2>Navegación con teclado</h2>
    <p>Usa Tab y Mayús + Tab para recorrer los controles, Enter para activar enlaces y Escape para cerrar menús y diálogos. En la barra inferior también puedes usar las flechas, Inicio y Fin.</p>
    <Link className="secondary-button" to="/inicio">Volver a Inicio</Link>
  </section>
}

export function Help() {
  return <section className="information-page">
    <p>Umbra es un espacio para imaginar personajes y sus historias. Esta entrega permite recorrer las interfaces y comprobar sus mensajes.</p>
    <details><summary>¿Cómo navego por Umbra?</summary><p>Usa el menú superior para acceder a todas las secciones y la barra inferior para Inicio, Biblioteca, Inspiración y Perfil.</p></details>
    <details><summary>¿Necesito iniciar sesión?</summary><p>Puedes explorar como invitado. Los formularios de acceso y registro validan datos de prueba; todavía no crean cuentas ni inician sesiones.</p></details>
    <details><summary>¿Dónde se guardan mis personajes?</summary><p>En esta entrega se muestran personajes de ejemplo. El formulario de personaje no guarda datos. El CRUD y la conexión con servicios pertenecen a la siguiente fase.</p></details>
    <details><summary>¿Qué ocurre si pierdo la conexión?</summary><p>Se muestra un aviso. Las interfaces ya cargadas pueden seguir funcionando mientras la página permanezca abierta; todavía no hay un modo sin conexión para recargar la aplicación.</p></details>
    <details><summary>¿Cómo mejoro la legibilidad?</summary><p>En Accesibilidad puedes aumentar el contraste y el tamaño del texto. La interfaz también respeta la preferencia del sistema de reducir el movimiento.</p></details>
    <Link className="secondary-button" to="/accesibilidad">Abrir Accesibilidad</Link>
    <Link className="inline-link" to="/inicio">Volver a Inicio</Link>
  </section>
}

export function NotFound() {
  return <section className="information-page error-page">
    <p className="error-code" aria-hidden="true">404</p>
    <h2>Este camino no lleva a ninguna historia</h2>
    <p>La dirección no existe o ha cambiado. Puedes volver a Inicio o consultar Ayuda para continuar.</p>
    <Link className="primary-button" to="/inicio">Volver a Inicio</Link>
    <Link className="secondary-button" to="/ayuda">Consultar Ayuda</Link>
  </section>
}
