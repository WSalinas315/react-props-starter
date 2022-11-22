
export default function CreatureList(props) {

    return (
        <ul>
            {props.creatures.map(creature =>
                (<li key={creature.id}>{creature.name} is from {creature.origin}</li>)
            )}
        </ul>
    )
}