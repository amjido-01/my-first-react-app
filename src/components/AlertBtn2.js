const Btn = (props) => {
    const triggerFun = () => {
        alert(props.message)
    }
    return(
        <button onClick={triggerFun}>{props.value}</button>
    )
}

export const Toolbar2 = () => {
    return(
       <div>
            <Btn value='click me' message='hy'></Btn>
            <Btn value='click me' message='hy again'></Btn>
       </div>
    )
}