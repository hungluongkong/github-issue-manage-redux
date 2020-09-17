
export const isEqualAllProps = <TInterface extends Object>(
  prevProps: TInterface,
  nextProps: TInterface,
): boolean => JSON.stringify(prevProps) === JSON.stringify(nextProps);
