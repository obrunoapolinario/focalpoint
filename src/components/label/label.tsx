import styles from './label.module.scss'
import { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export const Label: React.FC<LabelProps> = ({ ...props }) => {
    return <label {...props} className={styles.label} />
}
