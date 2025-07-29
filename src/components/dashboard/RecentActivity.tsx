import { motion } from 'framer-motion';
import { Calendar, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    id: 1,
    type: 'site_visit',
    title: 'Site visit scheduled',
    description: 'Amit Sharma - Golden Heights, Sector 12',
    time: '2 min ago',
    icon: Calendar,
    priority: 'hot',
  },
  {
    id: 2,
    type: 'whatsapp',
    title: 'WhatsApp inquiry',
    description: 'Priya Gupta interested in 3BHK units',
    time: '15 min ago',
    icon: MessageCircle,
    priority: 'warm',
  },
  {
    id: 3,
    type: 'call',
    title: 'Follow-up call completed',
    description: 'Rahul Verma - Ready to visit next week',
    time: '1 hour ago',
    icon: Phone,
    priority: 'hot',
  },
  {
    id: 4,
    type: 'location',
    title: 'Location search',
    description: 'High interest in Gurgaon properties',
    time: '2 hours ago',
    icon: MapPin,
    priority: 'cold',
  },
];

const priorityStyles = {
  hot: 'bg-hot text-white',
  warm: 'bg-warm text-white',
  cold: 'bg-cold text-white',
};

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <activity.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium">{activity.title}</p>
                  <Badge
                    className={`text-xs ${priorityStyles[activity.priority]}`}
                  >
                    {activity.priority}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {activity.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}