import { createContext, useContext, useEffect, useReducer } from "react";

const Context = createContext(null);
const { Provider } = Context;

const initialState = {
  themeColor: "#ffffff",
  formData: {},
};

// const saveToLocal = (state) => {
//   localStorage.setItem("settings", JSON.stringify(state));
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "formData": {
      const newState = { ...state, formData: action.formData };

      return newState;
    }
    case "setup": {
      const settings = JSON.parse(localStorage.getItem("settings") || "{}");

      return { ...state, ...settings };
    }
    case "init": {
      localStorage.removeItem("settings");

      return { ...state, ...initialState };
    }
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "setup" });
  }, []);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

export default AppProvider;

export const useAppState = () => useContext(Context);
