export default function Portrait({ character, ...props }) {
  const portraits = ['/images/elara-valen.png', '/images/kael-grim.png']
  const image = character.imageDataUrl || character.image || portraits[character.portrait]

  if (!image) {
    return <div className="character-portrait portrait-placeholder" role="img" aria-label={`Retrato pendiente de ${character.name}`} {...props}>
      <span aria-hidden="true">{character.name.split(' ').map(word => word[0]).slice(0, 2).join('')}</span>
    </div>
  }

  return (
    <img
      className="character-portrait"
      src={image}
      alt={`Retrato de ${character.name}`}
      width="400"
      height="400"
      style={{ objectPosition: character.imagePosition || 'center' }}
      {...props}
    />
  )
}
