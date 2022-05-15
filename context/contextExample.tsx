import React, { createContext, useContext } from 'react'

export const ExampleContext = createContext({})

export const useExampleContext = () => useContext(ExampleContext)

const contextExampleProvider = ({children}: any) => {
  const value= {}
  return (
    <ExampleContext.Provider value={value}>

    </ExampleContext.Provider>
  )
}

export default contextExampleProvider
