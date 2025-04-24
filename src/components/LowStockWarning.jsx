import React from 'react';

const LowStockWarning = ({ quantity }) => {
  return quantity <= 5 ? (
    <div className="alert alert-warning">
      Low Stock Warning (≤5 items left)
    </div>
  ) : null;
};

export default LowStockWarning;