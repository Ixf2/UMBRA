import { useState } from 'react'
import Icon from '../components/icon/Icon.jsx'
import { validateForm } from '../utils/validateForm.js'
import './Login.css'

const fields = [
  { name: 'email', label: 'Correo electrónico', type: 'email', required: true },
  { name: 'password', label: 'Contraseña', type: 'password', required: true, minLength: 8, requireSpecial: true },
]

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const nextErrors = validateForm(fields, new FormData(form))
    setErrors(nextErrors)
    setMessage('')
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      form.elements.namedItem(firstError).focus()
      return
    }
    setMessage('El formulario es válido.')
  }

  return <section className="login-page" aria-labelledby="login-title">
    <div className="login-intro">
      <Icon name="sigil" size={60} />
      <h1 id="login-title">Cruza el umbral</h1>
      <p>Tus historias te esperan en la oscuridad.</p>
    </div>

    <div className="login-divider" aria-hidden="true"><span>❖</span></div>

    <p className="form-hint" id="login-demo-notice">Demostración: los campos con * son obligatorios. Usa datos de prueba; se guarda en el storage.</p>
    <form className="login-form" noValidate aria-describedby="login-demo-notice" onSubmit={handleSubmit}>
      <div className="login-field">
        <label htmlFor="login-email">Correo electrónico *</label>
        <div className="login-input">
          <Icon name="mail" size={18} />
          <input id="login-email" name="email" type="email" autoComplete="email" required maxLength={254}
            placeholder="Tu correo electrónico" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'login-email-error' : undefined} />
        </div>
        {errors.email && <p className="field-error" id="login-email-error" role="alert">{errors.email}</p>}
      </div>

      <div className="login-field">
        <label htmlFor="login-password">Contraseña *</label>
        <div className="login-input">
          <Icon name="lock" size={18} />
          <input id="login-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required minLength={8}
            placeholder="Introduce tu contraseña" aria-invalid={Boolean(errors.password)} aria-describedby={['login-password-hint', errors.password && 'login-password-error'].filter(Boolean).join(' ')} />
          <button type="button" className="login-password-toggle" aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            aria-pressed={showPassword} onClick={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye' : 'eye-off'} size={18} />
          </button>
        </div>
        <p className="form-hint" id="login-password-hint">Al menos 8 caracteres y un carácter especial, como !, @, # o $.</p>
        {errors.password && <p className="field-error" id="login-password-error" role="alert">{errors.password}</p>}
      </div>

      <div className="login-options">
        <label className="login-remember"><input name="remember" type="checkbox" /> <span>Recordarme</span></label>
        <button className="login-recovery" type="button" disabled title="Próximamente">¿Olvidaste tu contraseña?</button>
      </div>

      <button className="primary-button login-submit" type="submit"><Icon name="login" size={18} />Iniciar sesión</button>
      {message && <p className="feedback" role="status">{message}</p>}
    </form>

    <div className="login-divider login-account-divider"><span>¿Aún no tienes una cuenta?</span></div>
    <button className="login-create-account" type="button" disabled title="Próximamente"><Icon name="user-plus" size={18} />Crear cuenta</button>
    <p className="login-terms">Al entrar, aceptas los Términos de uso<br />y la Política de privacidad de Umbra.</p>
    <p className="login-motto">Cada alma tiene una historia.</p>
  </section>
}
