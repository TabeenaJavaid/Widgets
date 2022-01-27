import React from 'react';

const Link = ({className,href, children}) =>{
    const onClick=(event)=>{
        if(event.metaKey|| event.ctrlKey){
            return;
        }
     event.preventDefault();
     window.history.pushState({},'',href);

     const navEvent = new PopStateEvent('popstate');
     window.dispatchEvent(navEvent);
    }
return <a style={{fontSize:'15px',border:'1px solid grey',width:'33.3%',justifyContent:'center',backgroundColor:'#264653',color:'white'}}onClick={onClick} className={className} href={href}>{children}</a>
}


export default Link;