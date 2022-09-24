import React, { useState } from 'react'

import loaderContext from './loader.context';


interface ILoaderProviderProps {
    children: React.ReactNode
}

const LoaderProvider: React.FC<ILoaderProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const startLoading =  () => setLoading(true);
    const stopLoading = () => setLoading(false);

    return (
      <loaderContext.Provider value={{ loading, startLoading, stopLoading }}>
        { children}
      </loaderContext.Provider>
    )
}

export default LoaderProvider;