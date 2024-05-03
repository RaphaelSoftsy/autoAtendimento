const Container = (props) => {
    return(
        <div className="container">
            <h2>{props.title}</h2>
            <ul>
                {props.itens.map( subject => (
                    <li> {subject.txt} </li>
                ))}
            </ul>
        </div>
    )
}