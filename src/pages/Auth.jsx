import { Link } from 'react-router'
import PrototypeForm from '../components/forms/PrototypeForm.jsx'

const email = { name: 'email', label: 'Correo electrónico', type: 'email', required: true, autoComplete: 'email', hint: 'Usa el formato nombre@dominio.es.', maxLength: 254 }

export default function Auth({ register = false }) {
  const fields = [
    ...(register ? [{ name: 'name', label: 'Nombre', required: true, minLength: 2, maxLength: 60, autoComplete: 'name' }] : []),
    email,
    { name: 'password', label: 'Contraseña', type: 'password', required: true, minLength: register ? 8 : undefined, autoComplete: register ? 'new-password' : 'current-password', hint: register ? 'Al menos 8 caracteres. Usa una contraseña de prueba.' : 'Usa credenciales de prueba en esta demostración.' },
    ...(register ? [
      { name: 'confirmPassword', label: 'Repetir contraseña', type: 'password', required: true, matches: 'password', autoComplete: 'new-password' },
      { name: 'demoAcknowledged', label: 'Entiendo que este registro es una demostración y no crea una cuenta.', type: 'checkbox', required: true },
    ] : []),
  ]

  return <section className="auth-page" aria-label={register ? 'Formulario de registro' : 'Formulario de acceso'}>
    <PrototypeForm fields={fields} submitLabel={register ? 'Validar registro de prueba' : 'Validar acceso de prueba'}
      successMessage={register ? 'Formulario de registro validado. No se ha creado una cuenta; el registro real se conectará en la próxima fase.' : 'Formulario de acceso validado. Sigues como invitado; la autenticación se conectará en la próxima fase.'} />
    <p className="account-link">{register ? '¿Ya tienes cuenta?' : '¿Primera vez en Umbra?'} <Link to={register ? '/login' : '/registro'}>{register ? 'Iniciar sesión' : 'Ir a Registro'}</Link></p>
    <Link className="inline-link" to="/ayuda">Necesito ayuda</Link>
  </section>
}
