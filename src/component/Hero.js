export default function Hero({ changeTheme, theme }){
    return (
        <div className="hero py-20 bg-base-300">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{theme}</h1>
                    <p className="py-6">Test out different daisyUI themes.</p>
                    <button className="btn btn-secondary" onClick={changeTheme}>Change Theme</button>
                </div>
            </div>
        </div>
    )
}