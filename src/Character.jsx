import "./App.css";

function Character(props) {
    return (
        <>
            <div className="CharacterContainer">
                <h1>{props.name}</h1>
                <h2>{props.clan}</h2>
                <p>{props.title}</p>
                <p>{props.description}</p>
                <img src={props.clanLogo} alt="" />
                <img src={props.imgLink} alt="" /> <br />
                <button onClick={props.button}>Click me</button>
            </div>
        </>
    )
}

export default Character;
