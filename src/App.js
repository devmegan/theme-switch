import { useState } from "react";

export default function App() {

  const [theme, setTheme] = useState('retro');

  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lowfi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
  ];

  const changeTheme = () => {
    let rand = Math.floor(Math.random() * themes.length);
    if (themes[rand] === theme) {
      rand++;
    }
    setTheme(themes[rand]);
  }

  return (
    <div className="min-h-screen bg-primary text-center" data-theme={theme}>
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
              <a href="https://daisyui.com/docs/themes/">DaisyUI</a>
            </li>
            <li>
              <a href="https://github.com/devmegan/theme-switch">Repo</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-300">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{theme}</h1>
            <p className="py-6">Test out different daisyUI themes.</p>
            <button className="btn btn-secondary" onClick={changeTheme}>Change Theme</button>
          </div>
        </div>
      </div>
    </div>
  )
}