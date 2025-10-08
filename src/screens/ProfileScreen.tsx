import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@theme/index';
import { useAppContext } from '@context/AppContext';
import SectionHeader from '@components/SectionHeader';
import InformationCard from '@components/InformationCard';

const ProfileScreen: React.FC = () => {
  const { colors, spacing, typography } = useTheme();
  const { user } = useAppContext();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background
    },
    content: {
      padding: spacing.lg
    },
    avatar: {
      width: 72,
      height: 72,
      borderRadius: 36,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.md
    },
    avatarText: {
      color: '#fff',
      fontSize: typography.heading2,
      fontWeight: '700'
    },
    name: {
      fontSize: typography.heading1,
      fontWeight: '700',
      color: colors.text
    },
    membership: {
      color: colors.textSecondary,
      marginTop: spacing.xs
    },
    statsRow: {
      flexDirection: 'row',
      marginTop: spacing.lg
    },
    stat: {
      flex: 1,
      backgroundColor: colors.card,
      borderRadius: spacing.lg,
      padding: spacing.md,
      marginRight: spacing.md,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: spacing.lg,
      elevation: 3
    },
    statLabel: {
      fontSize: typography.caption,
      color: colors.textSecondary
    },
    statValue: {
      fontSize: typography.heading2,
      fontWeight: '700',
      color: colors.text,
      marginTop: spacing.xs
    },
    badgesWrapper: {
      marginTop: spacing.lg
    },
    badge: {
      backgroundColor: colors.card,
      padding: spacing.md,
      borderRadius: spacing.lg,
      marginBottom: spacing.sm,
      shadowColor: '#000',
      shadowOpacity: 0.04,
      shadowOffset: { width: 0, height: 6 },
      shadowRadius: spacing.md,
      elevation: 2
    },
    badgeText: {
      color: colors.text,
      fontWeight: '600'
    }
  });

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.avatarInitials}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.membership}>
          {user.membershipTier} member • Rated {user.rating.toFixed(2)} ★
        </Text>
        <Text style={styles.membership}>{user.joinedAt}</Text>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statLabel}>Completed trips</Text>
            <Text style={styles.statValue}>{user.totalTrips}</Text>
          </View>
          <View style={[styles.stat, { marginRight: 0 }]}>
            <Text style={styles.statLabel}>Verified contact</Text>
            <Text style={styles.statValue}>Yes</Text>
          </View>
        </View>

        <SectionHeader title="Badges" subtitle="Earn badges by staying active" style={styles.badgesWrapper} />
        {user.badges.map((badge) => (
          <View key={badge} style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        ))}

        <SectionHeader title="Account" subtitle="Manage how we contact you" />
        <InformationCard title="Phone" subtitle={user.phoneNumber} style={{ marginBottom: spacing.md }} />
        <InformationCard title="Email" subtitle={user.email} />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
