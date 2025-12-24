import { useEffect, useRef, useState } from "react";

export default function useObserve(options = {}) {
  const ref = useRef(null);
  const [view, setView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setView(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return [ref, view];
}
