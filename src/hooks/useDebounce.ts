import { useCallback, useEffect, useRef, useState } from "react"

export default function useDebounce(callback, delay: 500) {
    const timer = useRef();

    const debouncedCallback = useCallback((...args) => {
        if(timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(...args)
        }, delay);
    }, [callback, delay])

    return debouncedCallback;
}