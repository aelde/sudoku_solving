export type RideCategory = {
  id: string;
  name: string;
  eta: string;
  price: string;
};

export const rideCategories: RideCategory[] = [
  { id: 'grabcar', name: 'GrabCar', eta: '3 min away', price: '$12.30' },
  { id: 'grabcar-plus', name: 'GrabCar Plus', eta: '5 min away', price: '$15.50' },
  { id: 'grabshare', name: 'GrabShare', eta: '7 min away', price: '$7.80' },
  { id: 'bike', name: 'GrabBike', eta: '2 min away', price: '$5.20' }
];

export type ActiveRide = {
  id: string;
  pickup: string;
  destination: string;
  driver: string;
  status: 'arriving' | 'waiting' | 'on_trip';
  eta: string;
};

export const getActiveRide = (): ActiveRide => ({
  id: 'ride-001',
  pickup: 'Marina Bay Sands',
  destination: 'Changi Airport T3',
  driver: 'Nurul Aisyah',
  status: 'arriving',
  eta: 'Driver arriving in 4 min'
});
