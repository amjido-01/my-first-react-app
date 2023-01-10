import { faMapPin } from "@fortawesome/free-solid-svg-icons"

const Btn = (props) => {
    const triggerFun = () => {
        alert(props.message)
    }
    return(
        <button onClick={triggerFun}>{props.value}</button>
    )
}

const Toolbar2 = () => {
    return(
       <div>
            <Btn value='click me' message='hy'></Btn>
            <Btn value='click me' message='hy again'></Btn>
       </div>
    )
}

export default Main() {
    return(
        <Toolbar2></Toolbar2>
    )
}