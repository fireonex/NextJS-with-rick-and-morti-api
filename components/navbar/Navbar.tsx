import Link from "next/link";
import styles from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/characters">Characters</Link>
        </div>
    );
};