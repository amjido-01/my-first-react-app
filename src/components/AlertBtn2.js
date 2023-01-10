const Btn = ({ onSmash, value, message}) => {
    return(
        <button onClick={ onSmash }>{ value }</button>
    )
}

const Toolbar2 = ({ onSmash }) => {
    return(
       <div>
            <Btn onSmash={ onSmash }></Btn>
       </div>
    )
}

export const Main = () => {
    const message = 'hello';
    const onSmash = () => {
        alert(message)
    }
    return(
        <Toolbar2 onClick={ onSmash }></Toolbar2>
    )
}