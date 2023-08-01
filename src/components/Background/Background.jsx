import PropTypes from "prop-types";
import styles from "./style.module.scss";

export function Background({ children }) {
	return <section className={styles.container}>{children}</section>;
}

Background.propTypes = {
	children: PropTypes.node,
};
