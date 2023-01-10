const Btn = ({ onSmash, value, message}) => {
    return(
        <button onClick={ onSmash }>{ value }</button>
    )
}

const Toolbar2 = ({}) => {
    return(
       <div>
            <Btn value='click me' message='hy'></Btn>
            <Btn value='click me' message='hy again'></Btn>
       </div>
    )
}

export const Main = () => {

}