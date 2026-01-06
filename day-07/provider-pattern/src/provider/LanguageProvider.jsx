import { useState } from "react";
import { LanguageContext } from "../context";

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("english");
    const changeLanguage = (val) => {
        setLanguage(val);
    }
    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;