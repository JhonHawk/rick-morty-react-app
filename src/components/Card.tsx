import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export interface CharacterProps {
    count: number
    pages: number
    next: string
    prev: any
}

export interface CharacterProps {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Location
    image: string
    episode: string[]
    url: string
    created: string
}

export interface Origin {
    name: string
    url: string
}

export interface Location {
    name: string
    url: string
}

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
