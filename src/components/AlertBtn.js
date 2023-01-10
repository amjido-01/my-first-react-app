const AlertBtn = ({ message, children }) => {
    const clickHandler = () => {
        alert(message);
    };
    return(
        <button onClick={clickHandler}>
            { children }
        </button>
    )
}

export const Toolbar = () => {
    return(
        <AlertBtn message='hello' children='click me'/>
    )
}