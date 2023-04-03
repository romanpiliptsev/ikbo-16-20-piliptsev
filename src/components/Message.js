const Message = (props) => {
    return (
        <div className="message">
            <h1 className="message__heading">
                {props.author}
            </h1>
            <p className="message__text">
                {props.text}
            </p>
            <br/>
        </div>
    )
}

export default Message