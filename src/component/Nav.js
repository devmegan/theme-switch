import { HREFS } from "../Config"

export default function Nav({ changeTheme }){
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <button 
                    className="btn btn-secondary" 
                    onClick={changeTheme}
                >
                    Change Theme
                </button>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <a href={HREFS.daisyui}>DaisyUI</a>
                    </li>
                    <li>
                        <a href={HREFS.repo}>Repo</a>
                    </li>
                </ul>
            </div>
      </div>
    )
}