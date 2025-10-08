import { AppState } from '@types';

export const mockAppState: AppState = {
  user: {
    id: 'user-001',
    name: 'Nurul Aisyah',
    membershipTier: 'Platinum',
    rating: 4.92,
    totalTrips: 845,
    phoneNumber: '+65 9123 4567',
    email: 'nurul.aisyah@example.com',
    badges: ['Top Rider', 'Always On Time'],
    avatarInitials: 'NA',
    joinedAt: 'Member since 2016'
  },
  services: [
    {
      id: 'ride',
      title: 'Book a Ride',
      description: 'GrabCar, Bike & more',
      iconName: 'map-pin',
      iconBackground: '#E7F9F2',
      iconColor: '#0ACF83'
    },
    {
      id: 'food',
      title: 'Order Food',
      description: 'GrabFood favourites',
      iconName: 'coffee',
      iconBackground: '#FFF4E5',
      iconColor: '#FF8A00'
    },
    {
      id: 'mart',
      title: 'GrabMart',
      description: 'Groceries in minutes',
      iconName: 'shopping-bag',
      iconBackground: '#F0F4FF',
      iconColor: '#4C6FFF'
    },
    {
      id: 'parcel',
      title: 'Send Parcel',
      description: 'Express door-to-door',
      iconName: 'send',
      iconBackground: '#FDF2F8',
      iconColor: '#DB2777'
    }
  ],
  rideOptions: [
    {
      id: 'grabcar',
      name: 'GrabCar',
      price: 14.8,
      currency: 'SGD',
      etaMinutes: 4,
      capacity: 4,
      bestFor: 'Everyday comfort',
      features: ['A/C sedan', 'Up to 4 seats']
    },
    {
      id: 'grabcar-plus',
      name: 'GrabCar Plus',
      price: 21.5,
      currency: 'SGD',
      etaMinutes: 6,
      capacity: 4,
      bestFor: 'Premium experience',
      features: ['Leather seats', 'Bottled water']
    },
    {
      id: 'grabshare',
      name: 'GrabShare',
      price: 9.4,
      currency: 'SGD',
      etaMinutes: 8,
      capacity: 2,
      bestFor: 'Cost savings',
      features: ['Shared ride', 'Max 2 pax']
    },
    {
      id: 'bike',
      name: 'GrabBike',
      price: 6.1,
      currency: 'SGD',
      etaMinutes: 3,
      capacity: 1,
      bestFor: 'Beating the traffic',
      features: ['Motorbike', 'Helmet provided'],
      carbonOffsetKg: 1.2
    }
  ],
  activeRide: {
    id: 'ride-1029',
    pickup: 'Marina Bay Financial Centre',
    dropoff: 'Changi Airport Terminal 3',
    scheduledAt: 'Today • 18:40',
    status: 'arriving',
    driver: 'Rahim bin Shamsul',
    vehicle: 'Toyota Prius+',
    plateNumber: 'SJB2391D',
    etaMinutes: 5,
    price: 24.5,
    currency: 'SGD'
  },
  upcomingRides: [
    {
      id: 'ride-1030',
      pickup: 'Bugis Junction',
      dropoff: 'National Gallery',
      scheduledAt: 'Tomorrow • 09:15',
      status: 'scheduled',
      driver: 'To be assigned',
      vehicle: 'GrabCar',
      plateNumber: 'Pending',
      etaMinutes: 0,
      price: 8.2,
      currency: 'SGD'
    }
  ],
  pastRides: [
    {
      id: 'ride-1004',
      pickup: 'ION Orchard',
      dropoff: 'Paya Lebar Quarter',
      scheduledAt: '12 May • 19:05',
      status: 'completed',
      driver: 'Nur Afiq',
      vehicle: 'Honda Vezel',
      plateNumber: 'SDE4820B',
      etaMinutes: 0,
      price: 18.9,
      currency: 'SGD'
    }
  ],
  deliveries: [
    {
      id: 'delivery-201',
      merchant: 'Hawker Chan',
      category: 'Food Delivery',
      etaMinutes: 22,
      status: 'preparing',
      lastUpdated: 'Updated 4 mins ago',
      total: 12.8,
      currency: 'SGD'
    },
    {
      id: 'delivery-205',
      merchant: 'GrabMart - FairPrice Finest',
      category: 'Grocery',
      etaMinutes: 35,
      status: 'delivering',
      lastUpdated: 'Rider picked up 3 mins ago',
      total: 46.4,
      currency: 'SGD'
    }
  ],
  parcel: {
    id: 'parcel-9483',
    status: 'Courier en route to recipient',
    riderName: 'Muhd Fadhil',
    contact: '+65 8899 2234',
    expectedDelivery: 'Today • 21:00',
    lastUpdated: 'Updated 5 mins ago'
  },
  wallet: {
    balance: {
      currency: 'SGD',
      amount: 124.65,
      rewardsPoints: 890,
      tier: 'Platinum'
    },
    transactions: [
      {
        id: 'txn-789',
        label: 'GrabFood • Maxwell Food Centre',
        timestamp: 'Today, 12:14',
        amount: 18.4,
        currency: 'SGD',
        type: 'debit',
        category: 'food'
      },
      {
        id: 'txn-780',
        label: 'GrabPay Top Up',
        timestamp: 'Yesterday, 21:42',
        amount: 50,
        currency: 'SGD',
        type: 'credit',
        category: 'transfer'
      },
      {
        id: 'txn-776',
        label: 'GrabCar • Tiong Bahru → CBD',
        timestamp: '12 May, 08:31',
        amount: 13.2,
        currency: 'SGD',
        type: 'debit',
        category: 'ride'
      }
    ]
  },
  promotions: [
    {
      id: 'promo-ride',
      title: '15% off airport rides',
      description: 'Use code AIRPORT15 before 30 Jun',
      expiry: '30 Jun 2024'
    },
    {
      id: 'promo-food',
      title: 'Free delivery this weekend',
      description: 'Applicable for orders above $25',
      expiry: 'Sun, 26 May'
    }
  ]
};
