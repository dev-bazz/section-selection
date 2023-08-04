import styles from "./App.module.scss";
import { Background, ButtonLink, Loader } from "./components";
import { useAppContext, useFirebase } from "./config";
import { useEffect } from "react";
import logo from "./assets/logo-sector.png";
import profile from "./assets/multicooker.png";
import sectorLogo from "./assets/person_apron.png";

function App() {
	const {
		data,
		appSector,
		setData,
		sessionData,
		setSessionData,
		setAppSector,
	} = useAppContext();
	const { fetchData, getDocSnapshopById } = useFirebase();

	const getOption = () => {
		const option = appSector
			?.flatMap((data) => data.options)
			.find((item) => item.value == sessionData?.sectors);
		console.log("myOption", option);
		return option;
	}; // -----

	useEffect(() => {
		const fetchDataCallBack = () => {
			Promise.all([fetchData()])
				.then(([res1]) => {
					setAppSector(res1);
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
			setSessionData(res);
		});
	}, [setSessionData]);

	return (
		<Background>
			<div className={styles.form}>
				<div
					style={{
						position: "absolute",

						top: "-44px",
					}}>
					<img src={logo} />
				</div>
				<h1 className={styles.form_title}>Welcome</h1>
				<p className={styles.form_description}>
					Please Click the Add Data button to add your data
				</p>
				<div className={styles.form_data}>
					{sessionData ? (
						<>
							<div
								style={{
									display: "flex",
									gap: "1rem",
								}}>
								<img src={sectorLogo} />
								<p>{sessionData?.name}</p>
							</div>
							<div
								style={{
									display: "flex",
									gap: "1rem",
								}}>
								<img src={profile} />
								<p>{getOption()?.label}</p>
							</div>
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
