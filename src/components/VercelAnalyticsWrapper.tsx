'use client';

import { Analytics } from '@vercel/analytics/react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function VercelAnalyticsWrapper() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Analytics
      beforeSend={(event) => {
        if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
          console.log('Vercel Analytics: Ignoring localhost traffic.');
          return null;
        }

        if (typeof window !== 'undefined' && localStorage.getItem('va-disable-me') === 'true') {
          console.log('Vercel Analytics: Ignoring traffic from disabled user.');
          return null; 
        }
        
        return event;
      }}
    />
  );
}