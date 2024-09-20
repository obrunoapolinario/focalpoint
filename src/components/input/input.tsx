import styles from './input.module.scss'
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = ({ ...props }) => {
    return <input {...props} className={styles.input} />
}