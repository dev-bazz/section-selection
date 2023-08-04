import { createContext } from "react";
import PropTypes from "prop-types";
import { useContext, useState } from "react";

const appContext = createContext();
export default function AppProvider({ children }) {
	const [data, setData] = useState(false);
	const [appSector, setAppSector] = useState(null);
	const [sessionData, setSessionData] = useState(null);

	return (
		<appContext.Provider
			value={{
				data,
				setData,
				appSector,
				sessionData,
				setSessionData,
				setAppSector,
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
