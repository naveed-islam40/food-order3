import { useEffect, useState } from "react";

const useActiveSubcategory = (subcategoryIds: string[], buffer = 150) => {
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + buffer;

      let current: string | null = null;
      let closestTop = -Infinity;

      for (const id of subcategoryIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;

        // Only consider sections already scrolled into view (above the buffer line)
        if (top <= scrollY && top > closestTop) {
          closestTop = top;
          current = id;
        }
      }

      if (current && current !== activeSubCategory) {
        setActiveSubCategory(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [subcategoryIds, buffer, activeSubCategory]);

  return activeSubCategory;
};

export default useActiveSubcategory;
