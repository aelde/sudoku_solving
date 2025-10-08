import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@theme/index';

const ProfileScreen: React.FC = () => {
  const { colors, spacing, typography } = useTheme();
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
    text: {
      color: colors.textSecondary,
      fontSize: typography.body,
      lineHeight: typography.body * 1.4
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>
        Manage your account details, saved places, notifications and security settings here.
        This placeholder screen shows how the profile area could be structured in a future iteration.
      </Text>
    </View>
  );
};

export default ProfileScreen;
