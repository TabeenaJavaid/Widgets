import React,{useState} from 'react';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import './App.css';


const options =[
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Brown',
        value: 'brown'
    },
    {
        label: 'The Color Pink',
        value: 'pink'
    },
    {
        label: 'The Color Orange',
        value: 'orange'
    },
    {
        label: 'The Color Grey',
        value: 'grey'
    },
    {
        label: 'The Color Black',
        value: 'black'
    },
    {
        label: 'The Color Yellow',
        value: 'yellow'
    },
    {
        label: 'The Color Purple',
        value: 'purple'
    }
]

export default ()=>{
    const [selected,setSelected] = useState(options[0])
    return (
        <div style={{marginTop:'10px'}}> 
         <Header/>
         <div className='box'>
         <Route path='/'>
             <Translate/>
         </Route>
         <Route path='/search'>
             <Search />
         </Route>
         <Route path='/dropdown'>
             <Dropdown 
             label='Select a color'
             options={options}
             selected={selected}
             onSelectedChange={setSelected}/>
        
             <h4 style={{color: `${selected.value}`}}>You selected {selected.value} color!</h4>
         </Route>
        
         </div>
         
</div>
    
    );
};