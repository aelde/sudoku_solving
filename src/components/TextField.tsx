import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '@theme/index';

type Props = TextInputProps & {
  label: string;
};

const TextField: React.FC<Props> = ({ label, style, ...inputProps }) => {
  const { colors, spacing, typography } = useTheme();
  const styles = StyleSheet.create({
    container: {
      marginBottom: spacing.md
    },
    label: {
      marginBottom: spacing.xs,
      color: colors.textSecondary,
      fontSize: typography.caption
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: spacing.md,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      fontSize: typography.body,
      color: colors.text
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={colors.textSecondary}
        {...inputProps}
      />
    </View>
  );
};

export default TextField;
