import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Mail, Shield, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const teamMembers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh@estatehive.com',
    role: 'Admin',
    access: 'Full Access',
    lastActive: '2 min ago',
    projects: 12,
    leads: 45,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@estatehive.com',
    role: 'Sales Manager',
    access: 'Sales & Leads',
    lastActive: '15 min ago',
    projects: 8,
    leads: 89,
  },
  {
    id: 3,
    name: 'Amit Gupta',
    email: 'amit@estatehive.com',
    role: 'Sales Executive',
    access: 'Leads Only',
    lastActive: '1 hour ago',
    projects: 3,
    leads: 23,
  },
  {
    id: 4,
    name: 'Sneha Patel',
    email: 'sneha@estatehive.com',
    role: 'Marketing Coordinator',
    access: 'Analytics & Reports',
    lastActive: '3 hours ago',
    projects: 12,
    leads: 156,
  },
];

const roleStyles = {
  'Admin': 'bg-destructive text-white',
  'Sales Manager': 'bg-primary text-white',
  'Sales Executive': 'bg-success text-white',
  'Marketing Coordinator': 'bg-warning text-white',
};

export default function Team() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center border-b border-border pb-4"
      >
        <div>
          <h1 className="text-3xl font-bold">Team & Access Controls</h1>
          <p className="text-muted-foreground">
            Manage team members, roles, and access permissions
          </p>
        </div>
        <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary">
              <Plus className="w-4 h-4 mr-2" />
              Invite Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite Team Member</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="invite-email">Email Address</Label>
                <Input
                  id="invite-email"
                  placeholder="member@company.com"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="invite-role">Role</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="sales-manager">Sales Manager</SelectItem>
                    <SelectItem value="sales-executive">Sales Executive</SelectItem>
                    <SelectItem value="marketing">Marketing Coordinator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="invite-access">Access Level</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select access level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Access</SelectItem>
                    <SelectItem value="sales">Sales & Leads</SelectItem>
                    <SelectItem value="leads">Leads Only</SelectItem>
                    <SelectItem value="analytics">Analytics & Reports</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2 pt-4">
                <Button 
                  className="bg-gradient-primary flex-1"
                  onClick={() => setIsInviteOpen(false)}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Invitation
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsInviteOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Team Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Access</TableHead>
                  <TableHead>Projects</TableHead>
                  <TableHead>Leads</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member, index) => (
                  <motion.tr
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-secondary/50 transition-colors"
                  >
                    <TableCell>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {member.email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={roleStyles[member.role]}>
                        {member.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{member.access}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold">{member.projects}</span>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold">{member.leads}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">
                        {member.lastActive}
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Member
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Shield className="w-4 h-4 mr-2" />
                            Change Access
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Remove Member
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Access Control Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Members', value: '4', description: 'Active team members' },
          { title: 'Admin Users', value: '1', description: 'Full system access' },
          { title: 'Sales Team', value: '2', description: 'Sales and lead access' },
          { title: 'Pending Invites', value: '2', description: 'Awaiting response' },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="font-medium mt-2">{stat.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}