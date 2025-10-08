import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@theme/index';
import { ParcelTracking } from '@types';

type Props = {
  parcel: ParcelTracking;
};

const DeliveryStatusCard: React.FC<Props> = ({ parcel }) => {
  const { colors, spacing, typography } = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      borderRadius: spacing.lg,
      padding: spacing.lg,
      marginBottom: spacing.lg,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 12 },
      shadowRadius: spacing.lg,
      elevation: 3
    },
    trackingId: {
      fontSize: typography.caption,
      color: colors.textSecondary,
      marginBottom: spacing.xs
    },
    status: {
      fontSize: typography.heading3,
      fontWeight: '700',
      color: colors.text
    },
    detail: {
      marginTop: spacing.sm,
      fontSize: typography.caption,
      color: colors.textSecondary
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.trackingId}>Tracking #{parcel.id}</Text>
      <Text style={styles.status}>{parcel.status}</Text>
      <Text style={styles.detail}>Assigned to {parcel.riderName}</Text>
      <Text style={styles.detail}>Contact {parcel.contact}</Text>
      <Text style={styles.detail}>Expected {parcel.expectedDelivery}</Text>
      <Text style={styles.detail}>{parcel.lastUpdated}</Text>
    </View>
  );
};

export default DeliveryStatusCard;
