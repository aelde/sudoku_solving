import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { rideCategories } from '@services/rideService';
import RideOptionCard from '@components/RideOptionCard';
import PrimaryButton from '@components/PrimaryButton';
import { useTheme } from '@theme/index';

const RideBookingScreen: React.FC = () => {
  const { colors, spacing, typography } = useTheme();
  const [selectedRide, setSelectedRide] = useState(rideCategories[0]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: spacing.lg
    },
    heading: {
      fontSize: typography.heading1,
      fontWeight: '700',
      color: colors.text,
      marginBottom: spacing.sm
    },
    subheading: {
      color: colors.textSecondary,
      marginBottom: spacing.lg
    },
    list: {
      marginVertical: spacing.md
    },
    button: {
      marginTop: spacing.lg
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book a Ride</Text>
      <Text style={styles.subheading}>Select the service that best fits your journey.</Text>
      <FlatList
        horizontal
        data={rideCategories}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: spacing.sm }}
        style={styles.list}
        renderItem={({ item }) => (
          <RideOptionCard
            name={item.name}
            eta={item.eta}
            price={item.price}
            isActive={item.id === selectedRide.id}
            onPress={() => setSelectedRide(item)}
          />
        )}
      />
      <PrimaryButton label={`Confirm ${selectedRide.name}`} style={styles.button} onPress={() => {}} />
    </View>
  );
};

export default RideBookingScreen;
