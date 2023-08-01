import { createContext } from "react";
import PropTypes from "prop-types";
import { useContext, useState } from "react";

const appContext = createContext();
export default function AppProvider({ children }) {
	const [data, setData] = useState(false);
	return (
		<appContext.Provider
			value={{
				data,
				setData,
			}}>
			{children}
		</appContext.Provider>
	);
}

AppProvider.propTypes = {
	children: PropTypes.node,
};

export const useAppContext = () => {
	return useContext(appContext);
};
