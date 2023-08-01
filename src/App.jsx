import styles from "./App.module.scss";
import { Background, ButtonLink } from "./components";

function App() {
	return (
		<Background>
			<div className={styles.form}>
				<h1 className={styles.form_title}>Welcome</h1>
				<p className={styles.form_description}>
					Please Click the Add Data button to add your data
				</p>
				<div className={styles.form_data}>
					<p>No Data Added</p>
				</div>
				<ButtonLink />
			</div>
		</Background>
	);
}

export default App;
