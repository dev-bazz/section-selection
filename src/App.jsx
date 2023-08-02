import { useLocation } from "react-router-dom";
import styles from "./App.module.scss";
import { Background, ButtonLink } from "./components";
import { useAppContext } from "./config";

function App() {
	const { state } = useLocation();
	const { data } = useAppContext();
	return (
		<Background>
			<div className={styles.form}>
				<h1 className={styles.form_title}>Welcome</h1>
				<p className={styles.form_description}>
					Please Click the Add Data button to add your data
				</p>
				<div className={styles.form_data}>
					{data ? (
						<>
							<p>{state.name}</p>
							<p>{state.sectors}</p>
						</>
					) : (
						<p>No Data Added</p>
					)}
				</div>
				<ButtonLink />
			</div>
		</Background>
	);
}

export default App;
