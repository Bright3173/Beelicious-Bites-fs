'use client';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="bb-loader">
          <img
            src="/assets/img/logo/pastry-logo.jpg"
            width="85px"
            height="85px"
            alt="loader"
          />
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

export default Loader;
