import React, { useEffect, useState } from "react";

export const TranslateContext = React.createContext();

TranslateContext.displayName = 'Translate';

export const TranslateProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    function translate() {
        setLanguage(prevLanguage => prevLanguage === 'en' ? 'pt' : 'en');
    }

    return (
        <>
            <TranslateContext.Provider
                value={{
                    language,
                    translate
                }}
            >
                {children}
            </TranslateContext.Provider>
        </>
    )
}