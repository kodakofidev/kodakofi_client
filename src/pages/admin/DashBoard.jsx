import React from 'react';

export const DashBoard = () => {
  // Static data for the dashboard
  const orderStats = [
    { title: 'Pending', count: 12, color: 'bg-yellow-100 text-yellow-800', icon: '⏱️' },
    { title: 'Process', count: 8, color: 'bg-blue-100 text-blue-800', icon: '⚙️' },
    { title: 'Complete', count: 45, color: 'bg-green-100 text-green-800', icon: '✅' },
  ];

  // Static data for sales table
  const salesData = [
    { id: 1, name: 'Café Latte', sold: 54, income: 1890000 },
    { id: 2, name: 'Cappuccino', sold: 42, income: 1470000 },
    { id: 3, name: 'Espresso', sold: 38, income: 1140000 },
    { id: 4, name: 'Americano', sold: 35, income: 1050000 },
    { id: 5, name: 'Mocha', sold: 28, income: 980000 },
    { id: 6, name: 'Macchiato', sold: 25, income: 875000 },
    { id: 7, name: 'Cold Brew', sold: 22, income: 770000 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Order Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {orderStats.map((stat, index) => (
          <div key={index} className={`${stat.color} rounded-lg shadow-md p-6`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{stat.title}</p>
                <p className="text-3xl font-bold mt-2">{stat.count}</p>
                <p className="text-sm mt-2">Orders</p>
              </div>
              <div className="text-4xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Sales Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Product Sales</h2>
          <p className="text-gray-500 mt-1">Overview of top-selling products</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sold</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {salesData.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.sold} units</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rp {product.income.toLocaleString('id-ID')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">7</span> products
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded bg-white text-sm">Previous</button>
              <button className="px-4 py-2 border rounded bg-orange text-white text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
