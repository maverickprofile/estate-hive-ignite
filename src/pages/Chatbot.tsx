import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, Settings, Play, Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export default function Chatbot() {
  const [whatsappTemplate, setWhatsappTemplate] = useState(
    "Hi {{lead_name}}! 👋\n\nThank you for your interest in {{project_name}}. I'm here to help you find your dream home.\n\nWould you like to:\n1. Schedule a site visit\n2. Get pricing details\n3. View floor plans\n4. Talk to our expert\n\nReply with the number of your choice!"
  );

  const [voicebotScript, setVoicebotScript] = useState(
    "Hello {{lead_name}}, this is an automated call from Estate Hive regarding your inquiry about {{project_name}}. Our property consultant will connect with you shortly to assist with your requirements. Thank you for your interest."
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b border-border pb-4"
      >
        <h1 className="text-3xl font-bold">Chatbot & Auto-Engage Setup</h1>
        <p className="text-muted-foreground">
          Configure automated responses and engagement workflows
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Configuration */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="whatsapp" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
              <TabsTrigger value="voicebot">Voicebot</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
            </TabsList>

            {/* WhatsApp Tab */}
            <TabsContent value="whatsapp">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      WhatsApp Auto-Reply Template
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="whatsapp-template">Message Template</Label>
                      <Textarea
                        id="whatsapp-template"
                        value={whatsappTemplate}
                        onChange={(e) => setWhatsappTemplate(e.target.value)}
                        rows={8}
                        className="mt-2"
                        placeholder="Enter your WhatsApp auto-reply template..."
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Use variables: {`{{lead_name}}, {{project_name}}, {{phone}}, {{email}}`}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="whatsapp-enabled">Enable Auto-Reply</Label>
                      <Switch id="whatsapp-enabled" defaultChecked />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="bg-gradient-primary">
                        <Save className="w-4 h-4 mr-2" />
                        Save Template
                      </Button>
                      <Button variant="outline">
                        <Play className="w-4 h-4 mr-2" />
                        Test Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Voicebot Tab */}
            <TabsContent value="voicebot">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Voicebot Script Editor
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="voicebot-script">Voice Script</Label>
                      <Textarea
                        id="voicebot-script"
                        value={voicebotScript}
                        onChange={(e) => setVoicebotScript(e.target.value)}
                        rows={6}
                        className="mt-2"
                        placeholder="Enter your voicebot script..."
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="voice-language">Language</Label>
                        <Input id="voice-language" defaultValue="Hindi + English" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="voice-speed">Speech Speed</Label>
                        <Input id="voice-speed" defaultValue="Normal" className="mt-2" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="voicebot-enabled">Enable Voicebot</Label>
                      <Switch id="voicebot-enabled" defaultChecked />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="bg-gradient-primary">
                        <Save className="w-4 h-4 mr-2" />
                        Save Script
                      </Button>
                      <Button variant="outline">
                        <Play className="w-4 h-4 mr-2" />
                        Test Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Email Tab */}
            <TabsContent value="email">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Email Campaign Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-gradient-primary rounded-lg text-white">
                        <p className="text-2xl font-bold">68%</p>
                        <p className="text-sm opacity-90">Open Rate</p>
                      </div>
                      <div className="text-center p-4 bg-gradient-primary rounded-lg text-white">
                        <p className="text-2xl font-bold">24%</p>
                        <p className="text-sm opacity-90">Click Rate</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email-subject">Email Subject</Label>
                        <Input 
                          id="email-subject" 
                          defaultValue="Your Dream Home Awaits - {{project_name}}"
                          className="mt-2" 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-enabled">Enable Email Campaigns</Label>
                        <Switch id="email-enabled" defaultChecked />
                      </div>
                      
                      <Button className="w-full bg-gradient-primary">
                        <Settings className="w-4 h-4 mr-2" />
                        Configure Email Templates
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column - Trigger Conditions */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Trigger Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">2 clicks → Auto-call</span>
                    <Switch defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Automatically call leads after 2 page interactions
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Email opened → WhatsApp</span>
                    <Switch defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Send WhatsApp message if email opened but no reply
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Virtual tour → Follow-up</span>
                    <Switch />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Auto follow-up after virtual tour completion
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">WhatsApp Messages Sent</span>
                  <Badge>1,247</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Auto-calls Made</span>
                  <Badge>456</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Email Campaigns</span>
                  <Badge>89</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Response Rate</span>
                  <Badge className="bg-success text-white">78%</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}