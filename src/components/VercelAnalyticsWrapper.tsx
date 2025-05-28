'use client';

import { Analytics } from '@vercel/analytics/react';

export default function VercelAnalyticsWrapper() {

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