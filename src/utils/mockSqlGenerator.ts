
export const generateMockSqlQuery = (naturalLanguage: string): string => {
  const input = naturalLanguage.toLowerCase();
  
  if (input.includes('customer') && input.includes('new york')) {
    return `SELECT * FROM customers 
WHERE city = 'New York'
ORDER BY total_orders DESC;`;
  }
  
  if (input.includes('top') && input.includes('order') && input.includes('revenue')) {
    return `SELECT o.id, o.product, o.amount, c.name as customer_name
FROM orders o
JOIN customers c ON o.customer_id = c.id
ORDER BY o.amount DESC
LIMIT 10;`;
  }
  
  if (input.includes('product') && input.includes('sales')) {
    return `SELECT p.name, p.category, COUNT(o.id) as total_sales, SUM(o.amount) as revenue
FROM products p
LEFT JOIN orders o ON p.name = o.product
GROUP BY p.id, p.name, p.category
ORDER BY revenue DESC
LIMIT 5;`;
  }
  
  if (input.includes('employee') && input.includes('hire') && input.includes('year')) {
    return `SELECT name, department, salary, hire_date
FROM employees
WHERE hire_date >= '2024-01-01'
ORDER BY hire_date DESC;`;
  }
  
  if (input.includes('monthly') && input.includes('revenue')) {
    return `SELECT 
    strftime('%Y-%m', date) as month,
    SUM(amount) as monthly_revenue
FROM orders
WHERE date >= '2024-01-01'
GROUP BY strftime('%Y-%m', date)
ORDER BY month DESC;`;
  }
  
  // Default query
  return `SELECT * FROM customers
ORDER BY total_orders DESC
LIMIT 10;`;
};
