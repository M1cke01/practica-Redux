import React from "react";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import SearchBar from "./components/SearchBar"
import { AppContainer, AppHeader, HeaderTitle } from "./styles";


const App = () => {
  return (
    <div>
      <AppContainer>
        <AppHeader>
          <HeaderTitle>Music</HeaderTitle>
        </AppHeader>
        <SearchBar />
        <SearchResults />
        <Library />
      </AppContainer>
    </div>
    
  );
}

export default App;
