import React from "react";

const LowStockWarning = ({ quantity }) => {
  const isLowStock = quantity <= 5;

  if (!isLowStock) return null;

  return <div style={styles.warning}>⚠️ Low Stock: Only {quantity} left!</div>;
};

export default LowStockWarning;
