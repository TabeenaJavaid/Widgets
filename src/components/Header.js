import React from "react";
import Link from "./Link";

const Header = () =>{
return (
<div className="ui secondary pointing menu" >
<Link href="/" className="item">Translate</Link>
<Link href="/search" className="item">Encyclopedia</Link>
<Link href="/dropdown" className="item">Dropdown</Link>
</div>
);
}

export default Header;