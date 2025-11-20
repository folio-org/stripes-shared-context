import { createContext, useContext } from 'react';

export const modulesInitialValue = {
  app: [],
  handler: [],
  plugin: [],
  settings: [],
};

export const ModulesContext = createContext(modulesInitialValue);