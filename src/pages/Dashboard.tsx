import { motion } from 'framer-motion';
import {
  Users,
  Eye,
  Calendar,
  TrendingDown,
  DollarSign,
  Building
} from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentActivity from '@/components/dashboard/RecentActivity';

const stats = [
  {
    title: 'Total Leads Generated',
    value: '158',
    change: '+12% from last month',
    changeType: 'positive' as const,
    icon: Users,
  },
  {
    title: 'Virtual Tour Requests',
    value: '21',
    change: '+5% from last week',
    changeType: 'positive' as const,
    icon: Eye,
  },
  {
    title: 'Site Visits Scheduled',
    value: '34',
    change: '+8% from last month',
    changeType: 'positive' as const,
    icon: Calendar,
  },
  {
    title: 'Drop-Off Rate',
    value: '18%',
    change: '-3% from last month',
    changeType: 'positive' as const,
    icon: TrendingDown,
  },
  {
    title: 'Sales Closed via EH',
    value: '₹1.32 Cr',
    change: '+25% from last month',
    changeType: 'positive' as const,
    icon: DollarSign,
  },
  {
    title: 'Active Projects',
    value: '12',
    change: '+2 new this month',
    changeType: 'positive' as const,
    icon: Building,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-border pb-4"
      >
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Monitor your Estate Hive Pro performance and lead generation
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={stat.title} {...stat} index={index} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions />
        <RecentActivity />
      </div>
    </div>
  );
}