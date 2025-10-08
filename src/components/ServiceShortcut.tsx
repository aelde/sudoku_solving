import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '@theme/index';

type Props = {
  title: string;
  description: string;
  iconName: React.ComponentProps<typeof Feather>['name'];
  iconBackground: string;
  iconColor: string;
  onPress?: () => void;
  style?: ViewStyle;
};

const ServiceShortcut: React.FC<Props> = ({
  title,
  description,
  iconName,
  iconBackground,
  iconColor,
  onPress,
  style
}) => {
  const { colors, spacing, typography } = useTheme();
  const themedStyles = StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      borderRadius: spacing.lg,
      padding: spacing.lg,
      flex: 1,
      marginHorizontal: spacing.xs,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: spacing.md,
      elevation: 2
    },
    iconWrapper: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: iconBackground,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.md
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
      <View style={themedStyles.iconWrapper}>
        <Feather name={iconName as any} size={20} color={iconColor} />
      </View>
      <Text style={themedStyles.title}>{title}</Text>
      <Text style={themedStyles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export default ServiceShortcut;
