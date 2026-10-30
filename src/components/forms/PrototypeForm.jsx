import { useId, useState } from 'react'
import { useNavigate } from 'react-router'
import Modal from '../modal/Modal.jsx'
import { validateForm } from '../../utils/validateForm.js'

export default function PrototypeForm({ fields, submitLabel, successMessage }) {
  const id = useId()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')
  const [dirty, setDirty] = useState(false)
  const [confirmCancel, setConfirmCancel] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const nextErrors = validateForm(fields, new FormData(form))
    setErrors(nextErrors)
    setSuccess('')
    if (Object.keys(nextErrors).length) {
      requestAnimationFrame(() => form.querySelector('[aria-invalid="true"]')?.focus())
      return
    }
    form.reset()
    setDirty(false)
    setSuccess(successMessage)
  }

  return <>
    <p className="prototype-notice" id={`${id}-notice`}>Demostración de interfaz. Los datos introducidos no se envían ni se guardan.</p>
    <form className="character-form" noValidate aria-describedby={`${id}-notice`} onSubmit={handleSubmit}
      onChange={() => { setDirty(true); setSuccess('') }}>
      <p className="form-hint">Los campos marcados con * son obligatorios.</p>
      {Object.keys(errors).length > 0 && <p className="feedback error" role="alert">Revisa los campos indicados antes de continuar.</p>}
      {fields.map(field => {
        const inputId = `${id}-${field.name}`
        const props = {
          id: inputId, name: field.name, required: field.required,
          defaultValue: field.defaultValue, minLength: field.minLength, maxLength: field.maxLength,
          'aria-invalid': Boolean(errors[field.name]),
          'aria-describedby': [field.hint && `${inputId}-hint`, errors[field.name] && `${inputId}-error`].filter(Boolean).join(' ') || undefined,
        }
        return <div className={field.type === 'checkbox' ? 'form-field checkbox-field' : 'form-field'} key={field.name}>
          {field.type === 'checkbox' ? <label className="checkbox-label"><input {...props} type="checkbox" />{field.label}{field.required && ' *'}</label> : <>
            <label htmlFor={inputId}>{field.label}{field.required && ' *'}</label>
            {field.options ? <select {...props}>{field.options.map(option => <option key={option}>{option}</option>)}</select>
              : field.type === 'textarea' ? <textarea {...props} rows="4" placeholder={field.placeholder} />
                : <input {...props} type={field.type || 'text'} autoComplete={field.autoComplete} min={field.min} max={field.max} placeholder={field.placeholder} />}
          </>}
          {field.hint && <p id={`${inputId}-hint`} className="form-hint">{field.hint}</p>}
          {errors[field.name] && <p id={`${inputId}-error`} className="field-error">{errors[field.name]}</p>}
        </div>
      })}
      <p className={success ? 'feedback success' : 'visually-hidden'} role="status" aria-live="polite">{success}</p>
      <button className="primary-button" type="submit">{submitLabel}</button>
      <button className="secondary-button" type="button" onClick={() => dirty ? setConfirmCancel(true) : navigate('/inicio')}>Cancelar y volver a Inicio</button>
    </form>
    {confirmCancel && <Modal title="¿Descartar lo escrito?" onClose={() => setConfirmCancel(false)}>
      <p className="page-description">Los campos introducidos se perderán si sales de este formulario.</p>
      <div className="action-stack">
        <button className="primary-button" onClick={() => setConfirmCancel(false)}>Seguir editando</button>
        <button className="secondary-button" onClick={() => navigate('/inicio')}>Descartar y salir</button>
      </div>
    </Modal>}
  </>
}
