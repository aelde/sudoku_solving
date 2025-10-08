import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@theme/index';
import { WalletTransaction } from '@types';
import { formatCurrency } from '@utils/format';

type Props = {
  transaction: WalletTransaction;
};

const TransactionRow: React.FC<Props> = ({ transaction }) => {
  const { colors, spacing, typography } = useTheme();
  const isCredit = transaction.type === 'credit';
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: spacing.md,
      borderBottomColor: colors.border,
      borderBottomWidth: 1
    },
    label: {
      fontSize: typography.body,
      color: colors.text,
      flex: 1,
      marginRight: spacing.md
    },
    timestamp: {
      fontSize: typography.caption,
      color: colors.textSecondary,
      marginTop: spacing.xs
    },
    amount: {
      fontSize: typography.body,
      fontWeight: '600',
      color: isCredit ? colors.success : colors.text
    }
  });

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{transaction.label}</Text>
        <Text style={styles.timestamp}>{transaction.timestamp}</Text>
      </View>
      <Text style={styles.amount}>
        {isCredit ? '+' : '-'}
        {formatCurrency(transaction.amount, transaction.currency)}
      </Text>
    </View>
  );
};

export default TransactionRow;
