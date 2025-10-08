import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '@theme/index';
import { RideBooking } from '@types';
import { formatCurrency, formatMinutes } from '@utils/format';

type Props = {
  ride: RideBooking;
  onPress?: () => void;
  actionLabel?: string;
  onPressAction?: () => void;
  style?: ViewStyle;
};

const UpcomingRideCard: React.FC<Props> = ({ ride, onPress, actionLabel, onPressAction, style }) => {
  const { colors, spacing, typography } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      borderRadius: spacing.lg,
      padding: spacing.lg,
      marginBottom: spacing.md,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: spacing.lg,
      elevation: 3
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    title: {
      fontSize: typography.heading3,
      fontWeight: '700',
      color: colors.text
    },
    subtitle: {
      marginTop: spacing.xs,
      color: colors.textSecondary,
      fontSize: typography.caption
    },
    timeline: {
      marginTop: spacing.sm,
      color: colors.text,
      fontSize: typography.body,
      fontWeight: '600'
    },
    action: {
      marginTop: spacing.md,
      color: colors.primary,
      fontWeight: '600',
      fontSize: typography.caption
    },
    statusPill: {
      backgroundColor: colors.primary,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
      borderRadius: spacing.lg
    },
    statusText: {
      color: '#fff',
      fontSize: typography.caption,
      fontWeight: '600'
    }
  });

  const statusLabel = ride.status.replace('_', ' ');
  const formattedStatus = statusLabel.charAt(0).toUpperCase() + statusLabel.slice(1);

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={onPress ? 0.85 : 1}>
      <View style={styles.row}>
        <Text style={styles.title}>
          {ride.pickup} → {ride.dropoff}
        </Text>
        <View style={styles.statusPill}>
          <Text style={styles.statusText}>{formattedStatus}</Text>
        </View>
      </View>
      <Text style={styles.timeline}>{ride.scheduledAt}</Text>
      <Text style={styles.subtitle}>
        {ride.driver} • {ride.vehicle}
      </Text>
      <Text style={styles.subtitle}>Plate {ride.plateNumber}</Text>
      <Text style={styles.subtitle}>
        {formatMinutes(ride.etaMinutes)} • {formatCurrency(ride.price, ride.currency)}
      </Text>
      {actionLabel ? (
        <TouchableOpacity onPress={onPressAction} accessibilityRole="button">
          <Text style={styles.action}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
};

export default UpcomingRideCard;
