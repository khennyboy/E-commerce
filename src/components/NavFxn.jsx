import { useCallback, useEffect } from 'react';

const useNavEffect = (openNav, setOpenNav, nav, navMenu) => {
  useEffect(() => {
    const handleResize = () => {
      if (openNav) {
        setOpenNav(false);
      }
    };

    const handleKeydown = (e) => {
      if (openNav && e.key === 'Escape') {
        setOpenNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [openNav, setOpenNav]);

  const handleDocumentClick = useCallback((event) => {
    if (
      openNav &&
      nav.current &&
      !nav.current.contains(event.target) &&
      navMenu.current &&
      !navMenu.current.contains(event.target)
    ) {
      setOpenNav(false);
    }
    console.log(openNav);
    console.log(event.target);
  }, [openNav, nav, navMenu, setOpenNav]);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [handleDocumentClick]);
};

export default useNavEffect;
