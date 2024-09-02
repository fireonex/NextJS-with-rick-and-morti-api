import Image from "next/image";
import {Character} from "@/assets/hooks/types";
import styles from "./CharacterCard.module.scss";

type Props = {
    character: Character;
}

export const CharacterCard = ({character}: Props) => {
    return (
        <div className={styles.characterCard}>
            <div>{character.name}</div>
            <Image src={character.image}
                   alt={'picture of ' + character.name}
                   width={200}
                   height={200}
            />
        </div>
    )
}