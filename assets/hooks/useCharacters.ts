import {useEffect, useState} from "react";
import axios from "axios";
import {Character} from "assets/hooks/types";

export const useCharacters = () => {
    const [characters, setCharacters] =  useState<Character[] | null>(null);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}character/`)
            .then(res => setCharacters(res.data.results))
    }, []);
    return characters
}

