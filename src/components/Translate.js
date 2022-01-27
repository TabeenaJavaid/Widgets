import React,{useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options =[
    {
        label: 'Afrikaans',
        value:'af'
    },
    {
        label: 'Russian',
        value:'ru'
    },
    {
        label: 'Spanish',
        value:'es'
    },
    {
        label: 'Turkish',
        value:'tr'
    },
    {
        label: 'Urdu',
        value:'ur'
    },
    {
        label: 'Japanese',
        value:'ja'
    },
    {
        label: 'Tamil',
        value:'ta'
    },
    {
        label: 'Arabic',
        value:'ar'
    },
    {
        label: 'Hindi',
        value:'hi'
    },{
        label: 'Chinese',
        value:'zh'
    },{
        label: 'Danish',
        value:'da'
    },{
        label: 'Gujarati',
        value:'gu'
    },{
        label: 'Irish',
        value:'ga'
    },{
        label: 'Persian',
        value:'fa'
    },{
        label: 'Portuguese',
        value:'pt'
    },{
        label: 'Swedish',
        value:'sv'
    },{
        label: 'French',
        value:'fr'
    },{
        label: 'German',
        value:'de'
    },{
        label: 'Italian',
        value:'it'
    },{
        label: 'Dutch',
        value:'nl'
    }

]


const Translate=() =>{
    const[Language, setLanguage] = useState(options[0])
    const [text,setText]=useState("hello");
    return (
    <div>
        <div className='ui form' >
        <div className='field'>
         <label style={{fontSize:'18px'}}>Enter Text</label>
        <input  value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
        </div>
        <Dropdown
        label = 'Select a language'
        options={options}
        selected={Language}
        onSelectedChange={setLanguage}
        />
        <h3  className='ui header'>Output</h3>
        <Convert text={text} Language={Language}/>
    </div>
        )
};

export default Translate;