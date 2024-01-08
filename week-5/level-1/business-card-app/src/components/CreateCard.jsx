import { useState } from "react"



export function CreateCard(){
    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [interests,setInterests] = useState([]);
    const [linkedin,setLinkedin] = useState("");
    const [twitter,setTwitter] = useState("");

    return <div>
        <a href="/"><button style={styless.back}>Back</button></a>
    <div style={styless.card}>
        <input type="text" placeholder="Name" style={styles} onChange={(e)=>{
            const value =e.target.value;
            setName(value);
        }}/><br />
        <input type="text" placeholder="Description" style={styles} onChange={(e)=>{
            const value =e.target.value;
            setDesc(value);
        }}/><br />
        <input type="text" placeholder="Interests" style={styles} onChange={(e)=>{
            const value =e.target.value;
            
            setInterests(value);
        }}/><br />
        <input type="text" placeholder="Linkedin" style={styles} onChange={(e)=>{
            const value =e.target.value;
            setLinkedin(value);
        }}/><br />
        <input type="text" placeholder="Twitter" style={styles} onChange={(e)=>{
            const value =e.target.value;
            setTwitter(value);
        }}/><br />
        
        <button style={styless.create}
        onClick={()=>{
            fetch("http://localhost:3000/card",
            {
                method: "POST",
                body: JSON.stringify({
                    name:name,
                    description:desc,
                    links:{
                        linkedin:linkedin,
                        twitter:twitter
                    },
                    interests:[interests]
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(async (e)=>{
                const json = await e.json();
                alert("Card Created")
            })

        }}>Create</button>
    </div>
    </div>
}

const styles = {
    margin:10,
    padding:10,
    color: "rgba(44, 255, 248, 0.87)",
    backgroundColor:'#242424'
}

const styless = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8f9fa'
    },
    back:{
        marginTop: 20, 
        marginLeft: 20, 
        padding: 10, 
        width:100, 
        borderRadius: 8, 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f64c72',
        fontSize: 20,
        "font-family": "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
    },
    create:{
        marginTop: 20, 
        marginLeft: 10, 
        padding: 10, 
        width:100, 
        borderRadius: 8, 
        border:0,
        backgroundColor: '#f64c72',
        fontSize: 20,
        "font-family": "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
    }
}