import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav">
            <Link to='/'> 
                <div>Home</div>
            </Link>
            <Link to='/Funanal'>
                <div>Functional Analysis</div>
            </Link>
            <Link to='/DiffGeo'>
                <div>Differential Geometry</div>
            </Link>

        </div>
    )
}