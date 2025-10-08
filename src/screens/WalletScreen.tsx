import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '@components/PrimaryButton';
import { useTheme } from '@theme/index';

const WalletScreen: React.FC = () => {
  const { colors, spacing, typography } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: spacing.lg
    },
    balanceCard: {
      backgroundColor: colors.card,
      borderRadius: spacing.lg,
      padding: spacing.lg,
      marginBottom: spacing.lg,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: spacing.lg,
      elevation: 3
    },
    balanceLabel: {
      color: colors.textSecondary,
      fontSize: typography.caption
    },
    balance: {
      fontSize: typography.heading1,
      fontWeight: '700',
      color: colors.text,
      marginTop: spacing.xs
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    heading: {
      fontSize: typography.heading2,
      fontWeight: '700',
      color: colors.text,
      marginBottom: spacing.md
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>GrabPay Balance</Text>
        <Text style={styles.balance}>$124.65</Text>
      </View>

      <Text style={styles.heading}>Quick actions</Text>
      <View style={styles.actions}>
        <PrimaryButton label="Top Up" style={{ flex: 1, marginRight: spacing.sm }} onPress={() => {}} />
        <PrimaryButton label="Transfer" style={{ flex: 1, marginLeft: spacing.sm }} onPress={() => {}} />
      </View>
    </View>
  );
};

export default WalletScreen;
