import { Post } from "./Post.tsx";
import { Header } from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <Post
        author="kleyson castro"
        content="Isso ´e um texto de test para post"
      />
    </div>
  );
}

export default App;
