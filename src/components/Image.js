const Image = (props) => {
    return (
        <img width={props.width} className="image" src={props.src} alt='avatar'/>
    )
}

export default Image