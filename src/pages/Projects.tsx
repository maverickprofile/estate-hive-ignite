import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Edit, MoreVertical, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const projects = [
  {
    id: 'EH001',
    name: 'Golden Heights',
    status: 'active',
    leads: 45,
    conversionRate: '12.5%',
    avgTimeToClose: '45 days',
    location: 'Sector 12, Gurgaon',
    lastUpdated: '2 hours ago',
  },
  {
    id: 'EH002',
    name: 'Royal Residency',
    status: 'planning',
    leads: 23,
    conversionRate: '8.2%',
    avgTimeToClose: '60 days',
    location: 'Sector 18, Noida',
    lastUpdated: '1 day ago',
  },
  {
    id: 'EH003',
    name: 'Paradise Towers',
    status: 'active',
    leads: 67,
    conversionRate: '15.8%',
    avgTimeToClose: '38 days',
    location: 'Dwarka, Delhi',
    lastUpdated: '30 min ago',
  },
  {
    id: 'EH004',
    name: 'Green Valley',
    status: 'completed',
    leads: 89,
    conversionRate: '22.1%',
    avgTimeToClose: '42 days',
    location: 'Sector 15, Gurgaon',
    lastUpdated: '3 days ago',
  },
];

const statusStyles = {
  active: 'bg-success text-white',
  planning: 'bg-warning text-white',
  completed: 'bg-primary text-white',
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center border-b border-border pb-4"
      >
        <div>
          <h1 className="text-3xl font-bold">Project Listings</h1>
          <p className="text-muted-foreground">
            Manage your property projects and track lead performance
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          Add New Project
        </Button>
      </motion.div>

      {/* Projects Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>All Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Leads</TableHead>
                  <TableHead>Conversion Rate</TableHead>
                  <TableHead>Avg Time to Close</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project, index) => (
                  <motion.tr
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-secondary/50 cursor-pointer transition-colors"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <TableCell className="font-mono text-sm">
                      {project.id}
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{project.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusStyles[project.status]}>
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold">{project.leads}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-success font-medium">
                        {project.conversionRate}
                      </span>
                    </TableCell>
                    <TableCell>{project.avgTimeToClose}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Project
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule Visit
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
    </div>
  );
}