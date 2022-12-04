import { Header, SignIn } from "../../components";
import { MainThemeProvider } from "../../context/theme";

function SignInPage() {
  return (
    <div className="App">
      <MainThemeProvider>
        <Header />
        <SignIn />
      </MainThemeProvider>
    </div>
  );
}

export { SignInPage };
