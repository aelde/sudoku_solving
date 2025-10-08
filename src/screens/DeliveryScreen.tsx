import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { foodRecommendations, getParcelTracking } from '@services/deliveryService';
import InformationCard from '@components/InformationCard';
import PrimaryButton from '@components/PrimaryButton';
import { useTheme } from '@theme/index';

const DeliveryScreen: React.FC = () => {
  const { colors, spacing, typography } = useTheme();
  const parcel = getParcelTracking();

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
      marginBottom: spacing.md
    },
    subtitle: {
      color: colors.textSecondary,
      marginBottom: spacing.lg
    },
    listItem: {
      paddingVertical: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border
    },
    listTitle: {
      fontSize: typography.heading3,
      fontWeight: '600',
      color: colors.text
    },
    listMeta: {
      color: colors.textSecondary,
      marginTop: spacing.xs
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Deliveries</Text>
      <InformationCard
        title={parcel.status}
        subtitle={parcel.lastUpdated}
        rightContent={<PrimaryButton label="Track" onPress={() => {}} />}
      />

      <Text style={styles.subtitle}>Popular near you</Text>
      <FlatList
        data={foodRecommendations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listTitle}>{item.name}</Text>
            <Text style={styles.listMeta}>
              {item.distance} • Delivery fee {item.deliveryFee}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default DeliveryScreen;
