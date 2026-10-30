import { useState } from 'react'

const key = 'umbra.accessibility.v1'
const defaults = { highContrast: false, largeText: false }

function readPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem(key))
    return { highContrast: saved?.highContrast === true, largeText: saved?.largeText === true }
  } catch {
    return defaults
  }
}

export function usePreferences() {
  const [preferences, setPreferences] = useState(readPreferences)
  const [preferenceError, setPreferenceError] = useState('')

  function updatePreferences(changes) {
    const updated = { ...preferences, ...changes }
    setPreferences(updated)
    try {
      localStorage.setItem(key, JSON.stringify(updated))
      setPreferenceError('')
    } catch {
      setPreferenceError('El navegador no permite guardar tus preferencias. Se aplicarán durante esta demo.')
    }
  }

  return { preferences, updatePreferences, preferenceError }
}
