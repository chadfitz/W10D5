import GalleryNavigation from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt";

function App() {
  return (
      <GalleryNavigation galleries={harvardArt.records} peach="delicious"/> //key of records. value of harvardArt.records
    );
}

export default App;
