"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Calendar,
  Briefcase,
  Globe,
  Edit,
  Mail,
  Phone,
} from "lucide-react";

const activities = [
  {
    id: 1,
    action: "Updated profile picture",
    time: "2 hours ago",
    type: "profile",
  },
  {
    id: 2,
    action: "Generated 25 AI images",
    time: "5 hours ago",
    type: "ai",
  },
  {
    id: 3,
    action: "Upgraded to Pro Plan",
    time: "Yesterday",
    type: "billing",
  },
  {
    id: 4,
    action: "Created workspace 'Marketing'",
    time: "2 days ago",
    type: "workspace",
  },
  {
    id: 5,
    action: "Invited 3 team members",
    time: "3 days ago",
    type: "team",
  },
  {
    id: 6,
    action: "Published blog post via AI Writer",
    time: "1 week ago",
    type: "ai",
  },
];

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          View and manage your personal profile.
        </p>
      </div>

      {/* Profile Card */}
      <Card className="shadow-sm overflow-hidden">
        {/* Cover */}
        <div className="h-36 bg-brand-gradient pattern-dots relative">
          <Button
            variant="secondary"
            size="sm"
            className="absolute top-4 right-4"
          >
            <Edit className="h-3.5 w-3.5 mr-1.5" />
            Edit Cover
          </Button>
        </div>

        <CardContent className="relative pt-0 pb-6">
          {/* Avatar */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12">
            <Avatar className="h-24 w-24 border-4 border-card shadow-lg">
              <AvatarFallback className="bg-brand-gradient text-white text-2xl font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 sm:mb-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-sm text-muted-foreground">
                    Senior Product Designer
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Edit className="h-3.5 w-3.5 mr-1.5" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-muted-foreground mt-4 max-w-2xl">
            Passionate about building beautiful, AI-powered products that solve
            real problems. Currently leading design at NexBoard, crafting the
            future of SaaS dashboards.
          </p>

          {/* Info Grid */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5" />
              NexBoard Inc.
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              San Francisco, CA
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              Joined March 2024
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5" />
              nexboard.io
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { label: "AI Generations", value: "12,847" },
              { label: "Projects", value: "24" },
              { label: "Team Members", value: "8" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-3 rounded-lg bg-muted/50"
              >
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Info */}
        <Card className="shadow-sm">
          <CardContent className="p-5 space-y-4">
            <h3 className="font-semibold text-sm">Contact Information</h3>
            <Separator />
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">john.doe@nexboard.io</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Address</p>
                  <p className="font-medium">
                    123 Innovation Drive, SF, CA 94105
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Plan
              </h4>
              <Badge className="bg-brand-gradient text-white border-0">
                Pro Plan
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Activity Timeline */}
        <Card className="shadow-sm lg:col-span-2">
          <CardContent className="p-5">
            <h3 className="font-semibold text-sm mb-4">Recent Activity</h3>
            <div className="space-y-0">
              {activities.map((activity, i) => (
                <div key={activity.id} className="flex gap-3">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {i < activities.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
