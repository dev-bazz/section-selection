import styles from "./App.module.scss";
import { Background, ButtonLink } from "./components";

function App() {
	return (
		<Background>
			<form className={styles.form}>
				<h1 className={styles.form_title}>Welcome</h1>
				<p className={styles.form_description}>
					Please enter your name and pick the Sectors you are currently involved
					in.
				</p>
				<div className={styles.form_data}>
					<p>No Data Added</p>
				</div>
				<ButtonLink />
			</form>
		</Background>
	);
}

export default App;
