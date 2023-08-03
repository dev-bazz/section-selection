import propTypes from "prop-types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useAppContext } from "../../config";
export function Button({ text = "Button" }) {
	return <button className={styles.button}>{text}</button>;
}

export function ButtonLink({ text = "Add Data" }) {
	const { sessionData } = useAppContext();

	return (
		<Link
			style={{
				display: "grid",
				placeItems: "center",
			}}
			to={"/sector"}
			className={styles.button}>
			{sessionData ? "Update Data" : text}
		</Link>
	);
}

/**
 * Prop Validations
 */
ButtonLink.propTypes = {
	text: propTypes.string,
};
Button.propTypes = {
	text: propTypes.string,
};
