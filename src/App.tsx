import { useState, useEffect } from "react";
import CardMotion from "./components/Card.tsx";
import { CharacterProps } from "./core/interfaces/characters.ts";

export default function App() {
    const [state, setState] = useState<CharacterProps[]>([]);
    const URL = 'https://rickandmortyapi.com/api/character/'

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setState(data.results)
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="grid p-4 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 gap-4">
            {state.map((item) => (
                <CardMotion key={item.id} character={item} />
            ))}
        </div>
    )
}
