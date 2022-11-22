import CreatureItem from '../CreatureItem/CreatureItem';

export default function CreatureList(props) {
    return (
        <ul>
            {props.creatures.map(creature => (
                // <li key={creature.id}>{creature.name} is from {creature.origin}</li>)
                <CreatureItem key={creature.id} creature={creature} />
            ))}
        </ul>
    )
}