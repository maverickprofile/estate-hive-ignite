import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar, User, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    id: 1,
    type: 'hot',
    title: 'Ramesh Nair opened WhatsApp 3x',
    description: 'Auto-dialed at 3:42 PM - Very interested in 2BHK units',
    time: '5 min ago',
    action: 'Call Now',
    project: 'Golden Heights',
    icon: MessageCircle,
  },
  {
    id: 2,
    type: 'warm',
    title: 'Sneha Patel clicked Instagram ad',
    description: 'Viewed property gallery but no reply yet',
    time: '15 min ago',
    action: 'Send WhatsApp',
    project: 'Royal Residency',
    icon: User,
  },
  {
    id: 3,
    type: 'hot',
    title: 'Aditya Jain requested site visit',
    description: 'Scheduled via chatbot for tomorrow 2 PM',
    time: '25 min ago',
    action: 'Confirm Visit',
    project: 'Paradise Towers',
    icon: Calendar,
  },
  {
    id: 4,
    type: 'warm',
    title: 'Priya Sharma downloaded brochure',
    description: 'Interested in payment plans and EMI options',
    time: '45 min ago',
    action: 'Follow Up',
    project: 'Green Valley',
    icon: User,
  },
  {
    id: 5,
    type: 'cold',
    title: 'Vikash Kumar viewed virtual tour',
    description: 'Spent 3 minutes on tour but no interaction',
    time: '1 hour ago',
    action: 'Send Info',
    project: 'Golden Heights',
    icon: Clock,
  },
  {
    id: 6,
    type: 'hot',
    title: 'Anjali Gupta called back',
    description: 'Ready to visit this weekend - very hot lead',
    time: '2 hours ago',
    action: 'Schedule',
    project: 'Royal Residency',
    icon: Phone,
  },
];

const priorityStyles = {
  hot: {
    bg: 'bg-hot/10',
    text: 'text-hot',
    border: 'border-hot',
    badge: 'bg-hot text-white',
  },
  warm: {
    bg: 'bg-warm/10',
    text: 'text-warm',
    border: 'border-warm',
    badge: 'bg-warm text-white',
  },
  cold: {
    bg: 'bg-cold/10',
    text: 'text-cold',
    border: 'border-cold',
    badge: 'bg-cold text-white',
  },
};

export default function Leads() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center border-b border-border pb-4"
      >
        <div>
          <h1 className="text-3xl font-bold">Lead Activity Feed</h1>
          <p className="text-muted-foreground">
            Real-time lead interactions and engagement tracking
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Filter by Priority</Button>
          <Button variant="outline" size="sm">Export Activity</Button>
        </div>
      </motion.div>

      {/* Activity Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Lead Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>
              
              {/* Activities */}
              <div className="space-y-6">
                {activities.map((activity, index) => {
                  const styles = priorityStyles[activity.type];
                  return (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative flex items-start gap-4"
                    >
                      {/* Timeline Icon */}
                      <div className={`relative z-10 w-12 h-12 rounded-full ${styles.bg} ${styles.border} border-2 flex items-center justify-center`}>
                        <activity.icon className={`w-5 h-5 ${styles.text}`} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge className={styles.badge}>
                              {activity.type.toUpperCase()}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {activity.project}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {activity.time}
                          </span>
                        </div>
                        
                        <h3 className="font-semibold mb-1">{activity.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {activity.description}
                        </p>
                        
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className={activity.type === 'hot' ? 'bg-gradient-primary' : ''}
                            variant={activity.type === 'hot' ? 'default' : 'outline'}
                          >
                            {activity.action}
                          </Button>
                          <Button size="sm" variant="ghost">
                            Assign
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}