import { useState } from "react";
import Hero from "./component/Hero";
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
      <Hero changeTheme={changeTheme} theme={theme} />
      <ThemeButtons setTheme={setTheme} themes={THEMES} />
    </div>
  )
}
