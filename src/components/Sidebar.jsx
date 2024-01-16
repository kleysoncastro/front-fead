import styles from "./Sidebar.module.css";
import imagem_logo from "../assets/header-logo.svg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=500&t=st=1705422265~exp=1705422865~hmac=223cdc1380b463dfaacb32a53e34b8ab9dab5b78cc7a4e0f10cf64cd9d0f2db3"
        className={styles.cover}
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/34436443?v=4"
        />
        <strong>Kleyson Castro</strong>
        <span>Developer/Hardware</span>

        <footer>
          <a href="#">Editar Perfil</a>
        </footer>
      </div>
    </aside>
  );
}
