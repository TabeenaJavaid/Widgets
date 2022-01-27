import React,{useState, useEffect} from "react";
import axios from "axios";

const Convert = ({Language,text}) => {
    const[translated,setTranslated] =useState('');
    const[debouncedText,setDebouncedText]=useState(text);

    useEffect(()=>{
        const timerId =setTimeout(()=>setDebouncedText(text),1000)
        return ()=> {
            clearTimeout(timerId)
        };
    },[text])

useEffect(()=>{
const doTranslation = async () =>{
    const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
    params:{
    q: debouncedText,
    target: Language.value,
    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
}});
setTranslated(data.data.translations[0].translatedText);
}
doTranslation();
},[Language,debouncedText]);
return(
<div style={{border:'1px solid grey',height:'200px',fontSize:'18px'}}>
    <h1 className="ui header">{translated}</h1>
</div>
    );
}

export default Convert;