import styles from './button.module.scss'
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'ghost' | 'danger'
  }

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
    const buttonClass = `${styles.button} ${styles[`button--${variant}`]}`
    return (
        <button className={buttonClass} {...props}>{children}</button>
    );
}