import {useState} from 'react';

export default function CreatureForm({addNewCreature}) {

    const [newCreatureName, setNewCreatureName] = useState('');
    const [newCreatureOrigin, setNewCreatureOrigin] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newCreature ={
            name: newCreatureName,
            origin: newCreatureOrigin
        }

        addNewCreature(newCreature);


        setNewCreatureName('');
        setNewCreatureOrigin('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                onChange={(event) => setNewCreatureName(event.target.value)}
                value={newCreatureName}
            />
            <label>Origin:</label>
            <input
                onChange={(event) => setNewCreatureOrigin(event.target.value)}
                value={newCreatureOrigin} />
            <button type="submit">Add New Creature</button>
        </form>
    )
}