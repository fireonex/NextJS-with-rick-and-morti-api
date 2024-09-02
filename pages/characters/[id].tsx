import {CharacterCard} from "components/characterCard/CharacterCard";
import {HeadMeta} from "components/headMeta/HeadMeta";
import {getLayout} from "components/layout/Layout";
import {useCharacter} from "assets/hooks/useCharacter";


function CharacterComponent() {
    const character = useCharacter()
    return (
        <>
            <HeadMeta title={'Character'}/>
            {character &&
                <CharacterCard character={character}/>
            }
        </>
    );
}

CharacterComponent.getLayout = getLayout;
export default CharacterComponent;

