import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import RideOptionCard from '@components/RideOptionCard';
import PrimaryButton from '@components/PrimaryButton';
import TextField from '@components/TextField';
import SectionHeader from '@components/SectionHeader';
import InformationCard from '@components/InformationCard';
import { useTheme } from '@theme/index';
import { useAppContext } from '@context/AppContext';

const RideBookingScreen: React.FC = () => {
  const { colors, spacing, typography } = useTheme();
  const { rideOptions, scheduleRide } = useAppContext();
  const [selectedOption, setSelectedOption] = useState(rideOptions[0] ?? null);
  const [pickup, setPickup] = useState('Marina Bay Sands');
  const [dropoff, setDropoff] = useState('Jewel Changi Airport');
  const [scheduledAt, setScheduledAt] = useState('Today • 19:30');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background
    },
    content: {
      padding: spacing.lg
    },
    heading: {
      fontSize: typography.heading1,
      fontWeight: '700',
      color: colors.text,
      marginBottom: spacing.xs
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

  const handleSchedule = () => {
    if (!pickup || !dropoff || !selectedOption) {
      return;
    }

    scheduleRide({
      id: `ride-${Date.now()}`,
      pickup,
      dropoff,
      scheduledAt,
      status: 'scheduled',
      driver: 'To be assigned',
      vehicle: selectedOption.name,
      plateNumber: 'Pending',
      etaMinutes: selectedOption.etaMinutes,
      price: selectedOption.price,
      currency: selectedOption.currency
    });
  };

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.content}>
        <Text style={styles.heading}>Book a Ride</Text>
        <Text style={styles.subheading}>Plan your journey across rides, airport transfers and more.</Text>

        <SectionHeader title="Trip details" />
        <TextField label="Pickup" value={pickup} onChangeText={setPickup} placeholder="Where should we pick you up?" />
        <TextField label="Drop-off" value={dropoff} onChangeText={setDropoff} placeholder="Where are you heading?" />
        <TextField label="When" value={scheduledAt} onChangeText={setScheduledAt} placeholder="Today • 19:30" />

        <SectionHeader title="Choose your ride" subtitle="Swipe to explore ride types" />
        <FlatList
          horizontal
          data={rideOptions}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: spacing.sm }}
          style={styles.list}
          renderItem={({ item }) => (
            <RideOptionCard
              option={item}
              isActive={selectedOption ? item.id === selectedOption.id : false}
              onPress={() => setSelectedOption(item)}
            />
          )}
          ListEmptyComponent={
            <InformationCard
              title="No ride options available"
              subtitle="Add ride categories to the dataset to display them here."
            />
          }
        />

        <PrimaryButton
          label={`Schedule ${selectedOption ? selectedOption.name : 'ride'}`}
          style={styles.button}
          onPress={handleSchedule}
        />
      </View>
    </ScrollView>
  );
};

export default RideBookingScreen;
