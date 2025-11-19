import { createContext, useContext } from 'react';

export const AppOrderInitialValue = {
  /**
     * whether or not the persisted preference request is in progress.
    */
  isLoading: true,
  /**
   *  Persisted array of app objects for re-ordering - the user-preferred app order.
   *  The objects in the array have the shape:
   *  { name: string - the module package name, sans scope and `ui-` prefix }
   */
  listOrder: [],
  /**
   * list of app link information ordered by user preference, falling back to the order from stripes-config.
  */
  apps: [],
  /**
   * Function to update the preference. Accepts an list of objects with shape:
   * { name: string - the module package name, sans scope and `ui-` prefix }
   */
  updateList: () => { },
  /**
   * Function to delete any the app order preference and reset the list.
  */
  reset: () => { },
}

/**
 * AppOrderContext - wraps the main navigation components and the module view, passing its
 * value object to both.
 */
export const AppOrderContext = createContext(AppOrderInitialValue);
