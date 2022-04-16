import { useState } from "react";
import Nav from "./component/Nav";
import ThemeButtons from "./component/ThemeButtons";
import { THEMES } from "./Config";

export default function App() {

  const [theme, setTheme] = useState('retro');

  const changeTheme = () => {
    let rand = Math.floor(Math.random() * THEMES.length);
    if (THEMES[rand] === theme) {
      rand++;
    }
    setTheme(THEMES[rand]);
  }

  return (
    <div className="min-h-screen bg-primary text-center" data-theme={theme}>
      <Nav changeTheme={changeTheme} />
      <div className="hero min-h-screen bg-base-300">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{theme}</h1>
            <p className="py-6">Test out different daisyUI themes.</p>
            <button className="btn btn-secondary" onClick={changeTheme}>Change Theme</button>
          </div>
        </div>
      </div>
      <ThemeButtons setTheme={setTheme} themes={THEMES} />
    </div>
  )
}
