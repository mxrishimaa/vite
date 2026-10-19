import { Link } from 'react-router-dom';
import styles from './Header.module.css'

export function Header({brand, description, children}) {
    return (
        <header className={styles.header}>
            <Link className={styles.brand}>
                <span className={styles.logo}>GT</span>
                <div>
                    <strong>{brand}</strong>
                    <span>{description}</span>
                </div>
            </Link>
            <nav className={styles.navigation} aria-label='Navegação Principal'>
                {children}
            </nav>
        </header>
    );
}

