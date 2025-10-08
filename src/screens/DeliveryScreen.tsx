import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import InformationCard from '@components/InformationCard';
import DeliveryStatusCard from '@components/DeliveryStatusCard';
import SectionHeader from '@components/SectionHeader';
import { useTheme } from '@theme/index';
import { useAppContext } from '@context/AppContext';
import { formatCurrency, formatMinutes } from '@utils/format';

const DeliveryScreen: React.FC = () => {
  const { colors, spacing, typography } = useTheme();
  const { deliveries, parcel, promotions } = useAppContext();

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
      marginBottom: spacing.sm
    },
    subtitle: {
      color: colors.textSecondary,
      marginBottom: spacing.lg
    },
    deliveryCard: {
      backgroundColor: colors.card,
      borderRadius: spacing.lg,
      padding: spacing.lg,
      marginBottom: spacing.md,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: spacing.lg,
      elevation: 3
    },
    deliveryTitle: {
      fontSize: typography.heading3,
      fontWeight: '700',
      color: colors.text
    },
    deliveryMeta: {
      marginTop: spacing.xs,
      color: colors.textSecondary,
      fontSize: typography.caption
    },
    amount: {
      marginTop: spacing.sm,
      fontWeight: '600',
      color: colors.text
    },
    promotionsWrapper: {
      marginTop: spacing.lg
    }
  });

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.content}>
        <Text style={styles.heading}>Deliveries</Text>
        <Text style={styles.subtitle}>Track parcels, meals and grocery orders in one place.</Text>

        <SectionHeader title="Parcel delivery" actionLabel="Track" onPressAction={() => {}} />
        <DeliveryStatusCard parcel={parcel} />

        <SectionHeader title="Active orders" subtitle="Live updates from your couriers" />
        {deliveries.length ? (
          deliveries.map((delivery) => (
            <View key={delivery.id} style={styles.deliveryCard}>
              <Text style={styles.deliveryTitle}>{delivery.merchant}</Text>
              <Text style={styles.deliveryMeta}>{delivery.category}</Text>
              <Text style={styles.deliveryMeta}>
                {delivery.status.toUpperCase()} • {formatMinutes(delivery.etaMinutes)}
              </Text>
              <Text style={styles.deliveryMeta}>{delivery.lastUpdated}</Text>
              <Text style={styles.amount}>{formatCurrency(delivery.total, delivery.currency)}</Text>
            </View>
          ))
        ) : (
          <InformationCard
            title="No ongoing deliveries"
            subtitle="Once you place an order, live updates will appear here."
            style={{ marginBottom: spacing.lg }}
          />
        )}

        <SectionHeader title="Suggested deals" subtitle="Boost your savings with Grab" style={styles.promotionsWrapper} />
        {promotions.map((promo) => (
          <InformationCard
            key={promo.id}
            title={promo.title}
            subtitle={`${promo.description}\nValid until ${promo.expiry}`}
            style={{ marginBottom: spacing.md }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default DeliveryScreen;
