import { useEffect, useState } from 'react';

export type Location = {
  latitude: number;
  longitude: number;
  address: string;
};

const MOCK_LOCATION: Location = {
  latitude: 1.3521,
  longitude: 103.8198,
  address: 'Singapore Central Business District'
};

export const useMockLocation = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocation(MOCK_LOCATION);
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  return location;
};
