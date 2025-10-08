export type FoodRecommendation = {
  id: string;
  name: string;
  distance: string;
  deliveryFee: string;
};

export const foodRecommendations: FoodRecommendation[] = [
  { id: 'hawker-chan', name: 'Liao Fan Hawker Chan', distance: '0.8 km', deliveryFee: '$1.50' },
  { id: 'nasi-lemak', name: 'The Coconut Club', distance: '1.1 km', deliveryFee: '$2.20' },
  { id: 'bubble-tea', name: 'Koi The', distance: '0.4 km', deliveryFee: '$1.20' }
];

export type ParcelTracking = {
  id: string;
  status: string;
  lastUpdated: string;
};

export const getParcelTracking = (): ParcelTracking => ({
  id: 'parcel-102938',
  status: 'Courier is on the way to recipient',
  lastUpdated: 'Updated 12 mins ago'
});
