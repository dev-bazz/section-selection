import { createContext } from "react";
import PropTypes from "prop-types";
import { useContext, useState, useRef } from "react";
import { useEffect } from "react";

const appContext = createContext();
export default function AppProvider({ children }) {
	const [data, setData] = useState(false);
	const appSector = useRef([]);
	const [sessionData, setSessionData] = useState(null);

	return (
		<appContext.Provider
			value={{
				data,
				setData,
				appSector,
				sessionData,
				setSessionData,
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
