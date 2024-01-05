export function BusinessCard(props) {
    let count=1;
    return <div>
        {props.bCard.map((card)=>{
            return <div>
                <h1>Serial No. {count++}</h1>
                <h1>Name : {card.name}</h1>
                <h1>description : {card.description}</h1>
                <a href={card.links} target="_blank"><button style={{
                    padding: 10,
                    fontSize: 15,
                    borderRadius:10
                }}>Github</button></a>
                <h1>Interests : {card.interests}</h1><hr />
            </div>
        })}
    </div>
}