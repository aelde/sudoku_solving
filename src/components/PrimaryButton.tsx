import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle } from 'react-native';
import { useTheme } from '@theme/index';

type Props = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
};

const PrimaryButton: React.FC<Props> = ({ label, onPress, style }) => {
  const { colors, spacing, typography } = useTheme();
  const themedStyles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      paddingVertical: spacing.md,
      borderRadius: spacing.md,
      alignItems: 'center'
    },
    label: {
      color: '#fff',
      fontSize: typography.body,
      fontWeight: '600'
    }
  });

  return (
    <TouchableOpacity style={[themedStyles.button, style]} onPress={onPress} activeOpacity={0.9}>
      <Text style={themedStyles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
