import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@theme/index';

type Props = {
  title: string;
  subtitle?: string;
  rightContent?: React.ReactNode;
  style?: ViewStyle;
};

const InformationCard: React.FC<Props> = ({ title, subtitle, rightContent, style }) => {
  const { colors, spacing, typography } = useTheme();
  const themedStyles = StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      borderRadius: spacing.lg,
      padding: spacing.lg,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.md,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: spacing.lg,
      elevation: 3
    },
    textContainer: {
      flex: 1,
      marginRight: spacing.md
    },
    title: {
      fontSize: typography.heading2,
      color: colors.text,
      fontWeight: '700'
    },
    subtitle: {
      fontSize: typography.body,
      color: colors.textSecondary,
      marginTop: spacing.xs
    }
  });

  return (
    <View style={[themedStyles.container, style]}>
      <View style={themedStyles.textContainer}>
        <Text style={themedStyles.title}>{title}</Text>
        {subtitle ? <Text style={themedStyles.subtitle}>{subtitle}</Text> : null}
      </View>
      {rightContent}
    </View>
  );
};

export default InformationCard;
