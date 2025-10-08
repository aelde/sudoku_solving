import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import InformationCard from '@components/InformationCard';
import PrimaryButton from '@components/PrimaryButton';
import ServiceShortcut from '@components/ServiceShortcut';
import { useTheme } from '@theme/index';
import { getActiveRide } from '@services/rideService';
import { useMockLocation } from '@hooks/useMockLocation';

const HomeScreen: React.FC = () => {
  const { colors, spacing, typography } = useTheme();
  const location = useMockLocation();
  const activeRide = getActiveRide();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background
    },
    greeting: {
      padding: spacing.lg
    },
    greetingText: {
      fontSize: typography.heading1,
      fontWeight: '700',
      color: colors.text
    },
    subGreeting: {
      marginTop: spacing.xs,
      color: colors.textSecondary,
      fontSize: typography.body
    },
    shortcutsRow: {
      flexDirection: 'row',
      paddingHorizontal: spacing.lg,
      marginBottom: spacing.lg
    },
    sectionTitle: {
      fontSize: typography.heading2,
      fontWeight: '700',
      color: colors.text,
      paddingHorizontal: spacing.lg,
      marginBottom: spacing.sm
    },
    activeRideSubtitle: {
      color: colors.textSecondary,
      marginBottom: spacing.md
    }
  });

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Hello, Nurul</Text>
        <Text style={styles.subGreeting}>
          {location ? `You are at ${location.address}` : 'Detecting your location...'}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Continue your journey</Text>
      <InformationCard
        title={`${activeRide.pickup} → ${activeRide.destination}`}
        subtitle={`${activeRide.eta}\nDriver: ${activeRide.driver}`}
        rightContent={<PrimaryButton label="Open Ride" onPress={() => {}} />}
        style={{ marginHorizontal: spacing.lg }}
      />

      <Text style={[styles.sectionTitle, styles.activeRideSubtitle]}>Quick actions</Text>
      <View style={styles.shortcutsRow}>
        <ServiceShortcut title="Book a Ride" description="GrabCar, GrabBike" />
        <ServiceShortcut title="Order Food" description="GrabFood delivery" />
        <ServiceShortcut title="Send Parcel" description="Same-day delivery" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
