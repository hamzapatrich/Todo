import Link from 'next/link'
import style from '../styles/Navbar.module.css'
import {useState} from 'react';


function Navbar(){
	
	let navElements = (style) => {
		return (
			<ul className={style}>
				<Link href="/"><a>Features</a></Link>
				<Link href="/"><a>Premium</a></Link>
				<Link href="/"><a>Homes</a></Link>
				
			</ul>
		)
	}

	const [transform, setTransform] = useState(false);
	
	return(
		<>
			<div className={style.container}>
				<span className={style.logo}>Logo</span>
				{navElements(style.navElements)}
				
				<ul className={style.navLogin}>
					<Link href='/' ><a>Log in</a></Link>
					<Link href='/' ><a>Sign up</a></Link>
				</ul>
				<div onClick={()=> setTransform(!transform)} className={`${style.barMenu} ${transform ? 'open' : 'close'} `}>
					<div className= {`${style.bar1} ${transform ? style.openbar1 : 'close'}`}></div>
					<div className= {`${style.bar2} ${transform ? style.openbar2 : 'close'}`}></div>
				</div>
				
			</div>
			{
				transform 
					?  <div className={style.smMenuContainer} > 
						{navElements(style.smMenu)}
						<button type ='button'>Login in</button>
						<button type='button'>Sign up</button>
					</div> : null
			}
		</>
	)
}
export default Navbar;

