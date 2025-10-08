import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@theme/index';

type Props = {
  name: string;
  eta: string;
  price: string;
  isActive?: boolean;
  onPress?: () => void;
};

const RideOptionCard: React.FC<Props> = ({ name, eta, price, isActive, onPress }) => {
  const { colors, spacing, typography } = useTheme();
  const themedStyles = StyleSheet.create({
    container: {
      backgroundColor: isActive ? colors.primary : colors.card,
      borderRadius: spacing.lg,
      padding: spacing.md,
      marginRight: spacing.md,
      minWidth: 140
    },
    title: {
      fontSize: typography.heading3,
      fontWeight: '700',
      color: isActive ? '#fff' : colors.text
    },
    meta: {
      marginTop: spacing.xs,
      color: isActive ? '#E5F8F0' : colors.textSecondary,
      fontSize: typography.caption
    },
    price: {
      marginTop: spacing.sm,
      fontSize: typography.body,
      fontWeight: '600',
      color: isActive ? '#fff' : colors.text
    }
  });

  return (
    <TouchableOpacity style={themedStyles.container} onPress={onPress} activeOpacity={0.85}>
      <Text style={themedStyles.title}>{name}</Text>
      <Text style={themedStyles.meta}>{eta}</Text>
      <Text style={themedStyles.price}>{price}</Text>
    </TouchableOpacity>
  );
};

export default RideOptionCard;
