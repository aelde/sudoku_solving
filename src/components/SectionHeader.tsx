import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '@theme/index';

interface Props {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onPressAction?: () => void;
  style?: ViewStyle;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle, actionLabel, onPressAction, style }) => {
  const { colors, spacing, typography } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: subtitle ? 'flex-start' : 'center',
      marginBottom: spacing.sm
    },
    textContainer: {
      flex: 1,
      marginRight: spacing.md
    },
    title: {
      fontSize: typography.heading2,
      fontWeight: '700',
      color: colors.text
    },
    subtitle: {
      marginTop: spacing.xs,
      color: colors.textSecondary,
      fontSize: typography.caption
    },
    action: {
      color: colors.primary,
      fontWeight: '600',
      fontSize: typography.caption
    }
  });

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {actionLabel ? (
        <TouchableOpacity onPress={onPressAction} accessibilityRole="button">
          <Text style={styles.action}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SectionHeader;
