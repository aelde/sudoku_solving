import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';
import { AppContextValue, AppState, RideBooking, WalletTransaction } from '@types';
import { mockAppState } from '@data/mockData';

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>(mockAppState);

  const scheduleRide = useCallback((ride: RideBooking) => {
    setState((prev) => ({
      ...prev,
      upcomingRides: [ride, ...prev.upcomingRides],
      activeRide:
        ride.status === 'arriving' || ride.status === 'waiting' || ride.status === 'on_trip'
          ? ride
          : prev.activeRide
    }));
  }, []);

  const completeRide = useCallback((rideId: string) => {
    setState((prev) => {
      const isActiveRide = prev.activeRide?.id === rideId;
      const upcomingMatch = prev.upcomingRides.find((ride) => ride.id === rideId);
      const completedRide = isActiveRide ? prev.activeRide : upcomingMatch;
      return {
        ...prev,
        activeRide: isActiveRide ? null : prev.activeRide,
        upcomingRides: prev.upcomingRides.filter((ride) => ride.id !== rideId),
        pastRides: completedRide
          ? [{ ...completedRide, status: 'completed' }, ...prev.pastRides]
          : prev.pastRides
      };
    });
  }, []);

  const addTransaction = useCallback((transaction: WalletTransaction) => {
    setState((prev) => {
      const balanceDelta = transaction.type === 'credit' ? transaction.amount : -transaction.amount;
      const nextBalance = Number((prev.wallet.balance.amount + balanceDelta).toFixed(2));
      return {
        ...prev,
        wallet: {
          balance: {
            ...prev.wallet.balance,
            amount: nextBalance < 0 ? 0 : nextBalance
          },
          transactions: [transaction, ...prev.wallet.transactions]
        }
      };
    });
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      ...state,
      scheduleRide,
      completeRide,
      addTransaction
    }),
    [state, scheduleRide, completeRide, addTransaction]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
