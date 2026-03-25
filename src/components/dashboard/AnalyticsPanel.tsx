import { Eye, ShoppingCart, TrendingUp, Star } from 'lucide-react';
import { cn, formatPeso } from '@/lib/utils';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const stats = [
  {
    label: 'Total Views',
    value: '1,234',
    icon: Eye,
    color: 'bg-blue-50 text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    label: 'Orders Today',
    value: '23',
    icon: ShoppingCart,
    color: 'bg-kanto-green/10 text-kanto-green',
    iconBg: 'bg-kanto-green/20',
  },
  {
    label: 'Revenue This Week',
    value: formatPeso(8450),
    icon: TrendingUp,
    color: 'bg-kanto-orange/10 text-kanto-orange',
    iconBg: 'bg-kanto-orange/20',
  },
  {
    label: 'Average Rating',
    value: '4.6',
    icon: Star,
    color: 'bg-kanto-gold/10 text-kanto-gold',
    iconBg: 'bg-kanto-gold/20',
  },
];

const weeklyViews = [
  { day: 'Mon', views: 156 },
  { day: 'Tue', views: 203 },
  { day: 'Wed', views: 187 },
  { day: 'Thu', views: 245 },
  { day: 'Fri', views: 198 },
  { day: 'Sat', views: 312 },
  { day: 'Sun', views: 278 },
];

const AnalyticsPanel = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-kanto-brown mb-6">Analytics</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-4 shadow-sm"
            >
              <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center mb-3', stat.iconBg)}>
                <Icon className={cn('w-5 h-5', stat.color.split(' ')[1])} />
              </div>
              <p className="text-2xl font-bold text-kanto-brown">{stat.value}</p>
              <p className="text-xs text-kanto-gray mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold text-kanto-brown mb-4">Views — Last 7 Days</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyViews}>
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: '#8B7355' }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: '#8B7355' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #F5F0E8',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                }}
              />
              <Bar
                dataKey="views"
                fill="#E8663C"
                radius={[6, 6, 0, 0]}
                maxBarSize={48}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
