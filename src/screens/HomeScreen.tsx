import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import InformationCard from '@components/InformationCard';
import ServiceShortcut from '@components/ServiceShortcut';
import SectionHeader from '@components/SectionHeader';
import UpcomingRideCard from '@components/UpcomingRideCard';
import { useTheme } from '@theme/index';
import { useMockLocation } from '@hooks/useMockLocation';
import { useAppContext } from '@context/AppContext';

const HomeScreen: React.FC = () => {
  const { colors, spacing, typography } = useTheme();
  const location = useMockLocation();
  const { user, services, activeRide, promotions, upcomingRides } = useAppContext();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background
    },
    content: {
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
    shortcutsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal: -spacing.xs,
      marginTop: spacing.sm
    },
    shortcut: {
      flexBasis: '48%',
      marginHorizontal: spacing.xs,
      marginBottom: spacing.md
    },
    promotionCard: {
      marginBottom: spacing.md
    }
  });

  const firstName = user.name.split(' ')[0];

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.content}>
        <Text style={styles.greetingText}>Hello, {firstName}</Text>
        <Text style={styles.subGreeting}>
          {location ? `You are near ${location.address}` : 'Detecting your location...'}
        </Text>

        <SectionHeader title="Continue your journey" subtitle="Pick up where you left off" style={{ marginTop: spacing.lg }} />
        {activeRide ? (
          <UpcomingRideCard
            ride={activeRide}
            actionLabel="View driver details"
            onPressAction={() => {}}
            style={{ marginBottom: spacing.lg }}
          />
        ) : (
          <InformationCard
            title="No active rides"
            subtitle="Book a ride or delivery to see live updates here"
            style={{ marginBottom: spacing.lg }}
          />
        )}

        <SectionHeader
          title="Quick services"
          subtitle="Access your most-used Grab features"
          actionLabel="Manage"
          onPressAction={() => {}}
        />
        <View style={styles.shortcutsGrid}>
          {services.map((service) => (
            <ServiceShortcut
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
              iconBackground={service.iconBackground}
              iconColor={service.iconColor}
              style={styles.shortcut}
            />
          ))}
        </View>

        <SectionHeader title="Upcoming rides" actionLabel="See all" onPressAction={() => {}} />
        {upcomingRides.length ? (
          upcomingRides.map((ride) => <UpcomingRideCard key={ride.id} ride={ride} />)
        ) : (
          <InformationCard
            title="Plan your next ride"
            subtitle="Schedule a ride ahead to skip the wait"
            style={{ marginBottom: spacing.lg }}
          />
        )}

        <SectionHeader title="Promotions for you" />
        {promotions.map((promo) => (
          <InformationCard
            key={promo.id}
            title={promo.title}
            subtitle={`${promo.description}\nValid until ${promo.expiry}`}
            style={styles.promotionCard}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
