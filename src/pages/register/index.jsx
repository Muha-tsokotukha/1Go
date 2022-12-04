import { Header, SignUp } from "../../components";
import { MainThemeProvider } from "../../context/theme";

function SignUpPage() {
  return (
    <div className="App">
      <MainThemeProvider>
        <Header />
        <SignUp />
      </MainThemeProvider>
    </div>
  );
}

export { SignUpPage };
