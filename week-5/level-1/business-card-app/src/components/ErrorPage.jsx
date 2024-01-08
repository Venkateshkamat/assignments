import {useRouteError} from 'react-router-dom';
import '../styles/styles.css'

export function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    
    return <div style={{
        fontSize:70,
        marginTop:-50
    }}>
        <center><h1>404</h1></center>
        <center><h2>&lt;PAGE NOT FOUND /&gt;</h2></center>
        <center><a href="/"><button style={{ width:200, 
            height:50, 
            fontSize:35, backgroundColor:'#f64c72', border:0, borderRadius:6}}>Back</button></a></center>
    </div>
}