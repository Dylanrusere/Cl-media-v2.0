import React, { useEffect, useState } from 'react';
import '../pages/Pages.css'; // Make sure to include your CSS for the preloader styles

export const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader once the page has fully loaded
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    loading && (
      <div id="preloader" className={`preloader ${!loading ? 'preloader_hidden' : ''}`}>
        <div className="pulse"></div>
      </div>
    )
  );
};
