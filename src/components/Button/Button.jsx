import propTypes from "prop-types";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../../config";
export function Button({ text = "Button" }) {
	return <button className={styles.button}>{text}</button>;
}

export function ButtonLink({ text = "Add Data" }) {
	const { data } = useAppContext();
	const [textType, setTextType] = useState(true);
	return (
		<Link
			style={{
				display: "grid",
				placeItems: "center",
			}}
			to={"/sector"}
			className={styles.button}>
			{data ? "Update Data" : text}
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
