
export const mockDatabase = {
  tables: {
    customers: [
      { id: 1, name: "John Smith", email: "john@example.com", city: "New York", total_orders: 15 },
      { id: 2, name: "Sarah Johnson", email: "sarah@example.com", city: "Los Angeles", total_orders: 8 },
      { id: 3, name: "Mike Brown", email: "mike@example.com", city: "Chicago", total_orders: 12 },
      { id: 4, name: "Emily Davis", email: "emily@example.com", city: "Houston", total_orders: 6 },
      { id: 5, name: "David Wilson", email: "david@example.com", city: "Phoenix", total_orders: 9 }
    ],
    orders: [
      { id: 1, customer_id: 1, product: "Laptop", amount: 1299.99, date: "2024-01-15" },
      { id: 2, customer_id: 2, product: "Phone", amount: 899.99, date: "2024-01-20" },
      { id: 3, customer_id: 1, product: "Tablet", amount: 499.99, date: "2024-02-05" },
      { id: 4, customer_id: 3, product: "Monitor", amount: 299.99, date: "2024-02-10" },
      { id: 5, customer_id: 4, product: "Keyboard", amount: 149.99, date: "2024-02-15" },
      { id: 6, customer_id: 1, product: "Mouse", amount: 79.99, date: "2024-03-01" },
      { id: 7, customer_id: 2, product: "Headphones", amount: 199.99, date: "2024-03-05" },
      { id: 8, customer_id: 5, product: "Speaker", amount: 249.99, date: "2024-03-10" }
    ],
    products: [
      { id: 1, name: "Laptop", category: "Electronics", price: 1299.99, stock: 25 },
      { id: 2, name: "Phone", category: "Electronics", price: 899.99, stock: 50 },
      { id: 3, name: "Tablet", category: "Electronics", price: 499.99, stock: 30 },
      { id: 4, name: "Monitor", category: "Electronics", price: 299.99, stock: 15 },
      { id: 5, name: "Keyboard", category: "Accessories", price: 149.99, stock: 40 }
    ],
    employees: [
      { id: 1, name: "Alice Cooper", department: "Sales", salary: 75000, hire_date: "2024-01-10" },
      { id: 2, name: "Bob Miller", department: "Engineering", salary: 95000, hire_date: "2024-02-15" },
      { id: 3, name: "Carol White", department: "Marketing", salary: 68000, hire_date: "2024-03-01" },
      { id: 4, name: "Dan Green", department: "Support", salary: 55000, hire_date: "2024-01-25" }
    ]
  },

  executeQuery: function(sql: string) {
    // Simple mock query execution
    const lowerSql = sql.toLowerCase();
    
    if (lowerSql.includes('customers')) {
      if (lowerSql.includes('new york')) {
        return this.tables.customers.filter(c => c.city === "New York");
      }
      return this.tables.customers.slice(0, 5);
    }
    
    if (lowerSql.includes('orders')) {
      if (lowerSql.includes('top') || lowerSql.includes('limit')) {
        return this.tables.orders.slice(0, 5);
      }
      return this.tables.orders;
    }
    
    if (lowerSql.includes('products')) {
      return this.tables.products;
    }
    
    if (lowerSql.includes('employees')) {
      if (lowerSql.includes('2024')) {
        return this.tables.employees.filter(e => e.hire_date.includes('2024'));
      }
      return this.tables.employees;
    }
    
    // Default return
    return this.tables.customers.slice(0, 3);
  }
};
