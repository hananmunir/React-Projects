function MemeComponent(props){
    return(
        <div>
            <img src={props.data.rndMemeUrl} alt ="Meme" />
            <h3>{props.data.topLine}</h3>
            <h3>{props.data.bottomLine}</h3>
        </div>
    )
}

export default MemeComponent