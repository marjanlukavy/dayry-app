import Sidebar from "../Sidebar";
import styles from "./RootLayout.module.css";

const RootLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default RootLayout;
