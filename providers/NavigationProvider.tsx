// NavigationProvider.native.tsx
import React, { createContext, useContext } from "react";
import { createNavigationContainerRef, StackActions } from "@react-navigation/native";
import type { ParamListBase } from "@react-navigation/native";

type NavContext = {
  push: (screen: string, params?: any) => void;
  navigate: (screen: string, params?: any) => void;
  goBack: () => void;
};

const NavigationContext = createContext<NavContext | null>(null);

// export this ref so App.tsx can attach it to NavigationContainer
export const navigationRef = createNavigationContainerRef<ParamListBase>();

export const useAppNavigation = () => {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error("useAppNavigation must be used within NavigationProvider");
  return ctx;
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const normalizeToScreen = (route: string) => {
    // strip leading slash if present
    if (route.startsWith("/")) route = route.slice(1);
    // make first letter uppercase (so "/test" -> "Test")
    return route.charAt(0).toUpperCase() + route.slice(1);
  };

  const push = (screen: string, params?: any) => {
    const screenName = normalizeToScreen(screen);
    console.log("RWC Android push to ", screenName, params);
    if (navigationRef.isReady()) {
      // push a new route on the native stack
      navigationRef.dispatch(StackActions.push(screen as never, params as never));
    } else {
      console.warn("Navigation not ready yet (push)", screen);
    }
  };

  const navigate = (screen: string, params?: any) => {
    console.log("RWC Android Navigating to", screen, params);
    if (navigationRef.isReady()) {
      navigationRef.navigate(screen, params);
    } else {
      console.warn("Navigation not ready yet (navigate)", screen);
    }
  };

  const goBack = () => {
    if (navigationRef.isReady() && navigationRef.canGoBack()) navigationRef.goBack();
  };

  return (
    <NavigationContext.Provider value={{ push, navigate, goBack }}>
      {children}
    </NavigationContext.Provider>
  );
};
