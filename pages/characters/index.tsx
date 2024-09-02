import {useCharacters} from "assets/hooks/useCharacters";
import {Character} from "assets/hooks/types";
import {CharacterCard} from "components/characterCard/CharacterCard";
import {HeadMeta} from "components/headMeta/HeadMeta";
import {getLayout} from "components/layout/Layout";
import Link from "next/link";


function Characters() {
    const characters = useCharacters()
    return (
        <>
            <HeadMeta title={'Characters'}/>
            {characters && characters.map((character: Character) => (
                <Link href={`/characters/${character.id}`} key={character.id}>
                    <CharacterCard character={character}/>
                </Link>
            ))}
        </>
    );
}

Characters.getLayout = getLayout;
export default Characters;

