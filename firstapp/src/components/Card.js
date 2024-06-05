function Dingus() {
    return <h1>DINGUS</h1>;
};

function Card(props) {
    return (
        <div className={props.classes}>
            <Dingus />
            <h2>
                {props.h2}
            </h2>
            <h3>
                {props.h3}
            </h3>
        </div>
    );
};

export default Card;