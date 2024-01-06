import { useState } from "react"



export function CreateCard(){
    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [interests,setInterests] = useState([]);
    const [linkedin,setLinkedin] = useState("");
    const [twitter,setTwitter] = useState("");

    return <div>
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
        <button 
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
}

const styles = {
    margin:10,
    padding:10
}
