import Link from 'next/link'
import style from '../styles/Navbar.module.css'
import {useState} from 'react';


function Navbar(){

	const [transform, setTransform] = useState(false);
	console.log(transform);
	return(
		<div className={style.container}>
			<span className={style.logo}>Logo</span>
			<ul className={style.navElements}>
				<Link href="/"><a>Features</a></Link>
				<Link href="/"><a>Premium</a></Link>
				<Link href="/"><a>Homes</a></Link>
				
			</ul>
			<ul className={style.navLogin}>
				<Link href='/' ><a>Log in</a></Link>
				<Link href='/' ><a>Sign up</a></Link>
			</ul>
			<div onClick={()=> setTransform(!transform)} className={style.barMenu}>
				<div className={style.bar1}></div>
				<div className={style.bar2}></div>
			</div>
		</div>
	)
}
export default Navbar;