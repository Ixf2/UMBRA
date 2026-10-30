import { useState } from 'react'
import { Link } from 'react-router'
import CharacterCard from '../components/charactercard/CharacterCard.jsx'
import Icon from '../components/icon/Icon.jsx'
import { initialCharacters } from '../data/characters.js'

export default function Library({ onSelect }) {
  const [search, setSearch] = useState('')
  const characters = initialCharacters.filter(character => `${character.name} ${character.type}`.toLocaleLowerCase('es').includes(search.trim().toLocaleLowerCase('es')))

  return <section aria-labelledby="library-title">
    <div className="section-heading"><h2 id="library-title">Personajes de ejemplo</h2><Link className="text-button" to="/crear-personaje">＋ Crear personaje</Link></div>
    <label className="search-field"><Icon name="search" /><input aria-label="Buscar por nombre o clase" type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Buscar personaje…" /></label>
    <p className="search-results" role="status">{characters.length} {characters.length === 1 ? 'personaje encontrado' : 'personajes encontrados'}.</p>
    <div className="character-grid">{characters.map(character => <CharacterCard key={character.id} character={character} onSelect={onSelect} />)}</div>
    {characters.length === 0 && <div className="empty-state"><p>No hay personajes que coincidan con «{search}».</p><button className="secondary-button" onClick={() => setSearch('')}>Limpiar búsqueda</button></div>}
    <p className="page-description">Esta biblioteca muestra datos de ejemplo para la entrega de Inicio y navegación.</p>
  </section>
}
