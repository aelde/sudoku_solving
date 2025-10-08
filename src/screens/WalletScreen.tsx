import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PrimaryButton from '@components/PrimaryButton';
import SectionHeader from '@components/SectionHeader';
import TransactionRow from '@components/TransactionRow';
import { useTheme } from '@theme/index';
import { useAppContext } from '@context/AppContext';
import { formatCurrency } from '@utils/format';

const WalletScreen: React.FC = () => {
  const { colors, spacing, typography } = useTheme();
  const { wallet } = useAppContext();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background
    },
    content: {
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
    rewards: {
      marginTop: spacing.sm,
      color: colors.textSecondary,
      fontSize: typography.caption
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: spacing.lg
    }
  });

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.content}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>GrabPay Balance</Text>
          <Text style={styles.balance}>{formatCurrency(wallet.balance.amount, wallet.balance.currency)}</Text>
          <Text style={styles.rewards}>
            {wallet.balance.tier} • {wallet.balance.rewardsPoints} reward points
          </Text>
        </View>

        <SectionHeader title="Quick actions" />
        <View style={styles.actions}>
          <PrimaryButton label="Top Up" style={{ flex: 1, marginRight: spacing.sm }} onPress={() => {}} />
          <PrimaryButton label="Transfer" style={{ flex: 1, marginLeft: spacing.sm }} onPress={() => {}} />
        </View>

        <SectionHeader title="Recent transactions" actionLabel="View all" onPressAction={() => {}} />
        {wallet.transactions.map((transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </View>
    </ScrollView>
  );
};

export default WalletScreen;
