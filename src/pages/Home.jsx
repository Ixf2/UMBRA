import { Link } from 'react-router'
import Hero from '../components/hero/Hero.jsx'
import CharacterCard from '../components/charactercard/CharacterCard.jsx'
import { initialCharacters } from '../data/characters.js'

export default function Home({ onSelect }) {
  return <>
    <Hero />
    <div className="ornament" aria-hidden="true"><span>❖</span></div>
    <section aria-labelledby="characters-title">
      <div className="section-heading">
        <h2 id="characters-title">Personajes recientes</h2>
        <button className="text-button" type="button" disabled title="Próximamente">Ver todos <span aria-hidden="true">→</span></button>
      </div>
      <div className="character-grid">{initialCharacters.slice(0, 2).map(character => <CharacterCard key={character.id} character={character} onSelect={onSelect} />)}</div>
    </section>
    <p className="closing-quote">«Incluso en la oscuridad, una historia perdura.»</p>
    <p className="guest-note">Estás explorando como invitado. <Link to="/login">Iniciar sesión</Link></p>
  </>
}
