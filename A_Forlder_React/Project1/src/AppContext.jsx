import React, { createContext } from 'react';
import Child1context from './contextcomponent/Child1context';
import Child2context from './contextcomponent/Child2context';
import Child3cmntext from './contextcomponent/Child3cmntext';

const MyContext = createContext();

function AppContext() {
  const data = {
    name: "Anant",
    branch: "CSE",
    section: "A"
  };

  return (
    <div> 
      <MyContext.Provider value={data}>
        <Child1context />
        <Child2context />
        <Child3cmntext /> 
      </MyContext.Provider>
    </div>
  );
}

export {
  MyContext
};

export default AppContext;
