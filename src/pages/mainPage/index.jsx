import { Header, CallToAction, Categories } from "../../components";
import { MainThemeProvider } from "../../context/theme";

function MainPage() {
  return (
    <div className="App">
      <MainThemeProvider>
        <Header />
        <CallToAction />
        <Categories />
      </MainThemeProvider>
    </div>
  );
}

export { MainPage };
