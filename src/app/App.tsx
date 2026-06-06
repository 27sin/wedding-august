import { useState, useEffect } from 'react';
import MobileVersion from '../imports/СайтПриглашениеНаСвадьбуМобилка/СайтПриглашениеНаСвадьбуМобилка';
import DesktopVersion from '../imports/СайтПриглашениеНаСвадьбуДесктоп/СайтПриглашениеНаСвадьбуДесктоп';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 800);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#FAFBF9]">
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </div>
  );
}