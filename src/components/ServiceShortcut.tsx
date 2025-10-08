import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '@theme/index';

type Props = {
  title: string;
  description: string;
  onPress?: () => void;
  style?: ViewStyle;
};

const ServiceShortcut: React.FC<Props> = ({ title, description, onPress, style }) => {
  const { colors, spacing, typography } = useTheme();
  const themedStyles = StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      borderRadius: spacing.md,
      padding: spacing.md,
      flex: 1,
      marginHorizontal: spacing.xs,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: spacing.sm,
      elevation: 2
    },
    title: {
      fontSize: typography.heading3,
      fontWeight: '700',
      color: colors.text
    },
    description: {
      fontSize: typography.caption,
      color: colors.textSecondary,
      marginTop: spacing.xs
    }
  });

  return (
    <TouchableOpacity style={[themedStyles.container, style]} onPress={onPress} activeOpacity={0.85}>
      <Text style={themedStyles.title}>{title}</Text>
      <Text style={themedStyles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export default ServiceShortcut;
