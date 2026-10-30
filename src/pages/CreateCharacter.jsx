import PrototypeForm from '../components/forms/PrototypeForm.jsx'
import { characterRaces, characterTypes } from '../data/characterOptions.js'

const fields = [
  { name: 'name', label: 'Nombre del personaje', required: true, minLength: 2, maxLength: 60, placeholder: 'El nombre de tu leyenda' },
  { name: 'type', label: 'Clase', required: true, options: characterTypes, defaultValue: 'Guerrero' },
  { name: 'race', label: 'Raza', required: true, options: characterRaces },
  { name: 'level', label: 'Nivel', type: 'number', required: true, min: 1, max: 20, defaultValue: 1, hint: 'Un número entero entre 1 y 20.' },
  { name: 'story', label: 'Historia', type: 'textarea', maxLength: 3000, placeholder: 'Toda leyenda tiene un comienzo…' },
]

export default function CreateCharacter() {
  return <PrototypeForm fields={fields} submitLabel="Revisar personaje de prueba."
    successMessage="Personaje de prueba validado." />
}
