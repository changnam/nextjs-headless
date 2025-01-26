// app/error.js
'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="error-container">
          <h2>Oops! Something went wrong.</h2>
          <p>{error.message || 'An unexpected error has occurred.'}</p>
          <button onClick={() => reset()}>Try Again</button>
        </div>
      </body>
    </html>
  );
}