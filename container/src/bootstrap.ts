// Extend Window interface for React Refresh properties
declare global {
  interface Window {
    $RefreshReg$: () => void;
    $RefreshSig$: () => (type: any) => any;
    __vite_plugin_react_preamble_installed__: boolean;
  }
}

// use the remote's origin/port
// @ts-ignore - Remote module import
import RefreshRuntime from "http://localhost:2001/@react-refresh";
RefreshRuntime.injectIntoGlobalHook(window);
window.$RefreshReg$ = () => { };
window.$RefreshSig$ = () => (type) => type;
window.__vite_plugin_react_preamble_installed__ = true;