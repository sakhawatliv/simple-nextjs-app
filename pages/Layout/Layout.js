import Link from 'next/link'

function Layout(props){
    return(
        <div>
            <h1>Main Layout</h1>
            <Link href="/"><button>Home</button></Link>
            <Link href="/about"><button>About</button></Link>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default Layout;