import FileExplorer from "./components/FileExplorer";
import { fileSystem } from "./constants/fileSystem";

function App() {
  return (
    <main className="flex justify-center">
      <FileExplorer fileSystem={fileSystem} />
    </main>
  );
}

export default App;
