function Components(props){
    return (
        <div className="todo-item">
            <input 
            type="checkbox" 
            checked = {props.item.status} 
            onChange = {() => props.check(props.item.id)} />
            <p >{props.item.task}</p> 
            <hr />
        </div>
    );
}

export default Components