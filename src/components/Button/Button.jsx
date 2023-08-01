import propTypes from "prop-types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
export function Button({ text = "Button" }) {
	return <button className={styles.button}>{text}</button>;
}

export function ButtonLink({ text = "Add Data" }) {
	return (
		<Link
			style={{
				display: "grid",
				placeItems: "center",
			}}
			to={"/sector"}
			className={styles.button}>
			{text}
		</Link>
	);
}

/**
 * Prop Validations
 */
ButtonLink.prototype = {
	text: propTypes.string,
};
Button.propTypes = {
	text: propTypes.string,
};
