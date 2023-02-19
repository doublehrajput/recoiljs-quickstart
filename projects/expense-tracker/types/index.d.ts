export interface Transaction {
  id: number;
  text: string;
  amount: number;
}

export interface TransactionListItemProps extends Transaction {
  onDelete: Function;
}
