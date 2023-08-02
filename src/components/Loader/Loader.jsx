import styles from "./styles.module.scss";
import Lottie from "react-lottie";
import animationData from "../../assets/Loader.json";

export function Loader() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className={styles.loader}>
			<div className={styles.spinner}>
				<Lottie
					options={defaultOptions}
					height={300}
					width={300}
				/>
			</div>
		</div>
	);
}
