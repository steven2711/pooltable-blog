import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function GoBackBtn() {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    if (typeof window !== undefined) {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const router = useRouter();

  return (
    <>
      {windowWidth < 1280 ? (
        <button
          onClick={() => router.back()}
          className="cursor-pointer uppercase hover:text-indigo-300 text-xl mt-3 mb-3"
        >
          &#60; go back
        </button>
      ) : null}
    </>
  );
}
