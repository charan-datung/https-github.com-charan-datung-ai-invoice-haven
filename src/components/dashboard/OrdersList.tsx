import { cn, formatPeso } from '@/lib/utils';

type OrderStatus = 'Pending' | 'Confirmed' | 'Ready for Pickup' | 'Completed' | 'Cancelled';

interface Order {
  id: string;
  customer: string;
  items: string;
  total: number;
  status: OrderStatus;
  time: string;
}

const statusStyles: Record<OrderStatus, string> = {
  Pending: 'bg-kanto-gold/15 text-kanto-gold',
  Confirmed: 'bg-kanto-teal/15 text-kanto-teal',
  'Ready for Pickup': 'bg-kanto-green/15 text-kanto-green',
  Completed: 'bg-kanto-gray-light text-kanto-gray',
  Cancelled: 'bg-kanto-red/15 text-kanto-red',
};

const mockOrders: Order[] = [
  {
    id: 'ORD-1001',
    customer: 'Maria Santos',
    items: '3x Adobo, 2x Rice',
    total: 210,
    status: 'Pending',
    time: '2 min ago',
  },
  {
    id: 'ORD-1002',
    customer: 'Juan Dela Cruz',
    items: '1x Sinigang, 1x Rice, 1x Coke',
    total: 145,
    status: 'Confirmed',
    time: '15 min ago',
  },
  {
    id: 'ORD-1003',
    customer: 'Ana Reyes',
    items: '5x Pandesal, 2x Kape',
    total: 75,
    status: 'Ready for Pickup',
    time: '28 min ago',
  },
  {
    id: 'ORD-1004',
    customer: 'Pedro Bautista',
    items: '2x Lechon Kawali, 3x Rice',
    total: 320,
    status: 'Completed',
    time: '1 hour ago',
  },
  {
    id: 'ORD-1005',
    customer: 'Rosa Garcia',
    items: '1x Kare-Kare',
    total: 180,
    status: 'Cancelled',
    time: '2 hours ago',
  },
];

const OrdersList = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-kanto-brown mb-6">Orders</h2>

      {/* Desktop table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-kanto-cream/70 border-b border-kanto-cream">
                <th className="text-left px-4 py-3 font-semibold text-kanto-brown">Order #</th>
                <th className="text-left px-4 py-3 font-semibold text-kanto-brown">Customer</th>
                <th className="text-left px-4 py-3 font-semibold text-kanto-brown">Items</th>
                <th className="text-right px-4 py-3 font-semibold text-kanto-brown">Total</th>
                <th className="text-center px-4 py-3 font-semibold text-kanto-brown">Status</th>
                <th className="text-right px-4 py-3 font-semibold text-kanto-brown">Time</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className={cn(
                    'border-b border-kanto-cream last:border-b-0 hover:bg-kanto-cream/30 transition-colors',
                    index % 2 === 0 ? 'bg-white' : 'bg-kanto-cream/10'
                  )}
                >
                  <td className="px-4 py-3 font-medium text-kanto-brown">{order.id}</td>
                  <td className="px-4 py-3 text-kanto-brown/80">{order.customer}</td>
                  <td className="px-4 py-3 text-kanto-brown/70 max-w-[200px] truncate">
                    {order.items}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-kanto-brown">
                    {formatPeso(order.total)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={cn(
                        'inline-block px-3 py-1 rounded-full text-xs font-semibold',
                        statusStyles[order.status]
                      )}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-kanto-gray text-xs">
                    {order.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
