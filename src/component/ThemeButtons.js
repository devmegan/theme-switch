export default function ThemeButtons({ themes, setTheme }) {
    return (
        <div className="bg-base-100 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 p-10">
            {themes.map((theme) => 
            <button 
                className="btn btn-sm btn-primary" 
                data-theme={theme}
                key={theme}
                onClick={() => setTheme(theme)}
            >
                {theme}
            </button>
        )}
        </div>
    )
}