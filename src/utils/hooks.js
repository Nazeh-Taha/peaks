import { useEffect, useRef, useState } from "react";

/**
 * Hook clicks outside of the passed ref
 */
export function useOutside(ref, action) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [action, ref]);
}

/**
 * Hook to call an async function only once
 */
export const useEffectOnce = (effect) => {
  const effectFn = useRef(effect);
  const destroyFn = useRef();
  const effectCalled = useRef(false);
  const rendered = useRef(false);
  const [, setVal] = useState(0);

  if (effectCalled.current) {
    rendered.current = true;
  }

  useEffect(() => {
    // only execute the effect first time around
    if (!effectCalled.current) {
      destroyFn.current = effectFn.current();
      effectCalled.current = true;
    }

    // this forces one render after the effect is run
    setVal((val) => val + 1);

    return () => {
      // if the comp didn't render since the useEffect was called,
      // we know it's the dummy React cycle
      if (!rendered.current) {
        return;
      }

      // otherwise this is not a dummy destroy, so call the destroy func
      if (destroyFn.current) {
        destroyFn.current();
      }
    };
  }, []);
};

// hook allows you to debounce any fast changing value.
export const useDebounce = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};
