import { useState } from "react";

// export default function CreatureItem(props) {
//     return (
//         <li>{props.creature.name} is from {props.creature.origin}</li>
//     )
// }

export default function CreatureItem({ creature }) {

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <>
            <li onClick={() => setIsFavorite(!isFavorite)}>{creature.name} is from {creature.origin}</li>
            {creature.origin === 'USA' && <h1>USA USA USA USA</h1>}
            {creature.name === 'Minotaur' ? <h2>Zeus's boy!</h2> : <h3>Do you even demigod?</h3>}
            {isFavorite && <p>⭐️</p>}
        </>
    )
}