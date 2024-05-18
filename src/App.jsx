import React, { useState, useEffect } from "react";
import AllComponent from "./components/allComponent";
import { Spinner } from "./components/Spinner";

function App() {
  const [loadDocument, setLoadDocument] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoadDocument(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="w-5/6 mx-auto largeTablet:w-[90%] tablet:w-[95%] android:w-full android:px-[10px] mb-12">
      {loadDocument ? <Spinner /> : <AllComponent />}
    </div>
  );
}

export default App;
