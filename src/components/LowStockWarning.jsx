import React from 'react';

const LowStockWarning = ({ quantity }) => {
  const isLowStock = quantity <= 5;

  if (!isLowStock) return null;

  return (
    <div style={styles.warning}></div>
  )}