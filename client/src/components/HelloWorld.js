import { useEffect, useState } from 'react';

const HelloWorld = () => {
  const [message, setMessage] = useState('Loading...');
  useEffect(() => {
    (async () => {
      const healthcheck = `${process.env.API_URL}/api/v1/health`;
      const response = await fetch(healthcheck);
      const res = await response.json();
      setMessage(res.message);
    })();
  }, []);

  return (
    <p data-testid="main-text">
      {message}
    </p>
  );
};

export default HelloWorld;
