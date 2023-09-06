import { useState, useEffect } from "react";
import CardMotion, {CharacterProps} from "./components/Card.tsx";

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
        <div className="grid grid-cols-4 gap-4 w-full">
            {state.map((item) => (
                <CardMotion key={item.id} character={item} />
            ))}
        </div>
    )
}
