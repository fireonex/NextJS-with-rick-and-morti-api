import {useEffect, useState} from "react";
import axios from "axios";
import {Character} from "assets/hooks/types";
import {useRouter} from "next/router";

export const useCharacter = () => {
    const [character, setCharacter] =  useState<Character | null>(null);

    const router = useRouter();

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}character/${router.query.id}/`)
            .then(res => setCharacter(res.data))
    }, []);
    return character
}

