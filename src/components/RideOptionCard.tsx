import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@theme/index';
import { RideOption } from '@types';
import { formatCurrency, formatMinutes } from '@utils/format';

type Props = {
  option: RideOption;
  isActive?: boolean;
  onPress?: () => void;
};

const RideOptionCard: React.FC<Props> = ({ option, isActive, onPress }) => {
  const { colors, spacing, typography } = useTheme();
  const { name, price, currency, etaMinutes, capacity, bestFor, features, carbonOffsetKg } = option;

  const themedStyles = StyleSheet.create({
    container: {
      backgroundColor: isActive ? colors.primary : colors.card,
      borderRadius: spacing.lg,
      padding: spacing.lg,
      marginRight: spacing.md,
      minWidth: 220
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    title: {
      fontSize: typography.heading3,
      fontWeight: '700',
      color: isActive ? '#fff' : colors.text
    },
    price: {
      fontSize: typography.body,
      fontWeight: '600',
      color: isActive ? '#fff' : colors.text
    },
    meta: {
      marginTop: spacing.sm,
      color: isActive ? '#E5F8F0' : colors.textSecondary,
      fontSize: typography.caption
    },
    bestFor: {
      marginTop: spacing.xs,
      color: isActive ? '#fff' : colors.text,
      fontSize: typography.caption
    },
    featureList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: spacing.sm
    },
    feature: {
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
      borderRadius: spacing.md,
      backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : '#F1F5F9',
      color: isActive ? '#fff' : colors.textSecondary,
      fontSize: typography.caption,
      marginRight: spacing.xs,
      marginBottom: spacing.xs
    },
    carbon: {
      marginTop: spacing.sm,
      color: isActive ? '#E5F8F0' : colors.textSecondary,
      fontSize: typography.caption
    }
  });

  return (
    <TouchableOpacity style={themedStyles.container} onPress={onPress} activeOpacity={0.85}>
      <View style={themedStyles.header}>
        <Text style={themedStyles.title}>{name}</Text>
        <Text style={themedStyles.price}>{formatCurrency(price, currency)}</Text>
      </View>
      <Text style={themedStyles.meta}>
        {formatMinutes(etaMinutes)} • Up to {capacity} pax
      </Text>
      <Text style={themedStyles.bestFor}>{bestFor}</Text>
      <View style={themedStyles.featureList}>
        {features.map((feature) => (
          <Text key={feature} style={themedStyles.feature}>
            {feature}
          </Text>
        ))}
      </View>
      {carbonOffsetKg ? (
        <Text style={themedStyles.carbon}>Offsets {carbonOffsetKg}kg CO₂</Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default RideOptionCard;
