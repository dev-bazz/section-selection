import { useState } from "react";
import styles from "./App.module.scss";
import { Background, ButtonLink, Loader } from "./components";
import { useAppContext, useFirebase } from "./config";
import { useEffect, useCallback, useRef } from "react";

function App() {
	const { data, appSector, setData, sessionData, setSessionData } =
		useAppContext();
	const { fetchData, getDocSnapshopById } = useFirebase();
	const [current, setCurrent] = useState(false);
	// -----

	useEffect(() => {
		const fetchDataCallBack = () => {
			Promise.all([fetchData()])
				.then(([res1]) => {
					console.log(res1);
					appSector.current = res1;
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setData(true);
				});
		};
		fetchDataCallBack();
		getDocSnapshopById().then((res) => {
			console.log("miki", res);
			setSessionData(res);
		});
	}, [setSessionData]);

	return (
		<Background>
			<div className={styles.form}>
				<h1 className={styles.form_title}>Welcome</h1>
				<p className={styles.form_description}>
					Please Click the Add Data button to add your data
				</p>
				<div className={styles.form_data}>
					{sessionData ? (
						<>
							<p>{sessionData?.name}</p>
							<p>{sessionData?.sectors}</p>
						</>
					) : (
						<p>No Data Added</p>
					)}
				</div>
				<ButtonLink />
			</div>
			{data || <Loader />}
		</Background>
	);
}

export default App;
