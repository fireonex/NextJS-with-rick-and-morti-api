import * as React from 'react';
import {PropsWithChildren, ReactElement} from 'react';
import {NextPage} from "next";
import styles from "@/styles/Home.module.css";
import {Navbar} from "@/components/navbar/Navbar";


export const Layout: NextPage<PropsWithChildren> = (props) => {
    return (
        <main className={`${styles.main}`}>
            <Navbar/>
            {props.children}
        </main>
    )
};

export const getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}