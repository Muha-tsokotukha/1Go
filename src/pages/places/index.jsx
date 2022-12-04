import { Header, ListOfPlaces } from "../../components";
import { MainThemeProvider } from "../../context/theme";

function PlacesPage() {
  return (
    <div className="App">
      <MainThemeProvider>
        <Header />
        <ListOfPlaces />
      </MainThemeProvider>
    </div>
  );
}

export { PlacesPage };
