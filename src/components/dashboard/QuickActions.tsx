import { motion } from 'framer-motion';
import { Plus, Upload, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const actions = [
  {
    title: 'Add New Project',
    description: 'Create a new property listing',
    icon: Plus,
    variant: 'default' as const,
  },
  {
    title: 'Upload Leads',
    description: 'Import leads from CSV',
    icon: Upload,
    variant: 'outline' as const,
  },
  {
    title: 'Send Campaign',
    description: 'WhatsApp/Email broadcast',
    icon: MessageSquare,
    variant: 'outline' as const,
  },
  {
    title: 'Schedule Calls',
    description: 'Bulk call scheduling',
    icon: Phone,
    variant: 'outline' as const,
  },
];

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant={action.variant}
                className="w-full justify-start gap-3 h-auto p-4 hover:scale-105 transition-transform duration-200"
              >
                <action.icon className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-medium">{action.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}