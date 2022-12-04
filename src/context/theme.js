import { createContext,  useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
});

const defaultValue = {
    theme: JSON.parse(localStorage.getItem('theme'))?.palette?.mode === 'dark' ? darkTheme : lightTheme,
    toggleTheme: () => console.log()
}

const ThemeContext = createContext(defaultValue);

const MainThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultValue.theme);
    const toggleTheme = () => {
      setTheme(theme.palette.mode === "light" ? darkTheme : lightTheme);
      localStorage.setItem('theme', theme.palette.mode === "light" ? JSON.stringify(darkTheme) : JSON.stringify(lightTheme));
    };

    return ( 
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>);
};

export { ThemeContext, MainThemeProvider };
