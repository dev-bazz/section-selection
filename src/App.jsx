import { Link } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
	return (
		<div className={styles.container}>
			<h1>Hello World</h1>
			<Link to="/sector">Sector</Link>
		</div>
	);
}

export default App;
