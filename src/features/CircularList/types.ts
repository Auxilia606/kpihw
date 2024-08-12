export type CircularListProps<T> = {
  data: T[];
  renderItem: (params: {item: T; index: number}) => React.JSX.Element;
  radius?: number;
};
