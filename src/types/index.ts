export type ServiceShortcut = {
  id: string;
  title: string;
  description: string;
  iconName: string;
  iconBackground: string;
  iconColor: string;
};

export type RideOption = {
  id: string;
  name: string;
  price: number;
  currency: string;
  etaMinutes: number;
  capacity: number;
  bestFor: string;
  features: string[];
  carbonOffsetKg?: number;
};

export type RideBookingStatus = 'arriving' | 'waiting' | 'on_trip' | 'completed' | 'cancelled' | 'scheduled';

export type RideBooking = {
  id: string;
  pickup: string;
  dropoff: string;
  scheduledAt: string;
  status: RideBookingStatus;
  driver: string;
  vehicle: string;
  plateNumber: string;
  etaMinutes: number;
  price: number;
  currency: string;
};

export type DeliveryOrderStatus = 'preparing' | 'delivering' | 'delivered';

export type DeliveryOrder = {
  id: string;
  merchant: string;
  category: string;
  etaMinutes: number;
  status: DeliveryOrderStatus;
  lastUpdated: string;
  total: number;
  currency: string;
};

export type ParcelTracking = {
  id: string;
  status: string;
  riderName: string;
  contact: string;
  expectedDelivery: string;
  lastUpdated: string;
};

export type WalletBalance = {
  currency: string;
  amount: number;
  rewardsPoints: number;
  tier: string;
};

export type WalletTransactionType = 'credit' | 'debit';

export type WalletTransactionCategory = 'ride' | 'food' | 'delivery' | 'transfer' | 'reward';

export type WalletTransaction = {
  id: string;
  label: string;
  timestamp: string;
  amount: number;
  currency: string;
  type: WalletTransactionType;
  category: WalletTransactionCategory;
};

export type Promotion = {
  id: string;
  title: string;
  description: string;
  expiry: string;
};

export type UserProfile = {
  id: string;
  name: string;
  membershipTier: string;
  rating: number;
  totalTrips: number;
  phoneNumber: string;
  email: string;
  badges: string[];
  avatarInitials: string;
  joinedAt: string;
};

export type AppState = {
  user: UserProfile;
  services: ServiceShortcut[];
  rideOptions: RideOption[];
  activeRide: RideBooking | null;
  upcomingRides: RideBooking[];
  pastRides: RideBooking[];
  deliveries: DeliveryOrder[];
  parcel: ParcelTracking;
  wallet: {
    balance: WalletBalance;
    transactions: WalletTransaction[];
  };
  promotions: Promotion[];
};

export type AppContextValue = AppState & {
  scheduleRide: (ride: RideBooking) => void;
  completeRide: (rideId: string) => void;
  addTransaction: (transaction: WalletTransaction) => void;
};
