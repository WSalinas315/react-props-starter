// export default function CreatureItem(props) {
//     return (
//         <li>{props.creature.name} is from {props.creature.origin}</li>
//     )
// }

export default function CreatureItem({creature}) {
    return (
        <li>{creature.name} is from {creature.origin}</li>
    )
}