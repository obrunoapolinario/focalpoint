import { Logo } from '@/app/icons/logo';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <p className={styles.content}>
                Bem-vindo de volta, Marcus
                <span className={styles.content__details}>Segunda, 01 de dezembro de 2025</span>
            </p>
        </header>
    )
}

export default Header;