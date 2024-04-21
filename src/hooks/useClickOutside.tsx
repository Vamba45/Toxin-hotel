import { useEffect } from 'react';


export default function useOnClickOutside(refs: any[], handler) {
  useEffect(
    () => {
      const listener = (event) => {
        
        for(let i = 0; i < refs.length; i++) {
            if (!refs[i].current || refs[i].current.contains(event.target)) {
                return;
            }
        }   

        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [refs, handler]
  );
}