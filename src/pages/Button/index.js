import clsx from 'clsx'
import styles from './button.module.css'
function Button({primary, success}){
    return(
        <button className={clsx( styles.btn, {[styles.primary]:primary, [styles.success]:success} )}>Click me</button>
    )
}

export default Button
