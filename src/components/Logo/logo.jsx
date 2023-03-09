import s from "./style.module.css"

export function Logo ({img}) {
    return (
            <img className={s.container} src={img} alt="logo"/>
    )
}