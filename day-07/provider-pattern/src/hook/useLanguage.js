import { useContext } from "react";
import { LanguageContext } from "../context";

const useLanguage = () => {
    const { language, changeLanguage } = useContext(LanguageContext);
    return { language, changeLanguage };
}

export { useLanguage };