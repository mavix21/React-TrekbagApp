import { BackgroundHeading } from "./components/BackgroundHeading.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { ItemList } from "./components/ItemList.jsx";

import { Sidebar } from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        {/*<ItemsContextProvider>*/}
        <Header />
        <ItemList />
        <Sidebar />
        {/*</ItemsContextProvider>*/}
      </main>
      <Footer />
    </>
  );
}

export default App;
