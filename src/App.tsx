import { Post } from "./Post.tsx";
import * as Header from "./components/Header";
import * as Sidebar from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      <Header.Header />

      <div className={styles.wrapper}>
        <Sidebar.Sidebar />
        <main>
          <Post
            author="kleyson castro"
            content="Isso ´e um texto de test para post"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
