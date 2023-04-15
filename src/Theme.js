import React from 'react';

export const Themes = React.createContext()

export default function Theme(){
    const themes = 'true'
    setTimeout(() => {
        console.log('2000')
      }, 2000);
    return(
        <>
        <Themes.Provider value={themes}>
        </Themes.Provider>
        </>
    )
}