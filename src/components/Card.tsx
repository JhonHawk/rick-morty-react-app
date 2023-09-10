import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { CharacterProps } from "../core/interfaces/characters";

export default function CardMotion({character}: { character: CharacterProps }) {
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{character.location.name}</p>
                <small className="text-default-500">Status: {character.status}</small>
                <h4 className="font-bold text-large">{character.name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 w-full">
                {/*<img src={character.image} alt="Card background" className="object-cover rounded-xl w-full"/>*/}
                <div className="flex w-full justify-center">
                    <Image
                        isZoomed
                        alt="Card background"
                        className="object-cover rounded-xl w-full mx-auto"
                        src={character.image}
                    />
                </div>
            </CardBody>
        </Card>
    );
}
