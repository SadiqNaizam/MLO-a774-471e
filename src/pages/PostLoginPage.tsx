import React, { useEffect } from 'react';
import Header from '@/components/layout/Header'; // Custom Header component
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BarChart, Settings, Users } from 'lucide-react';

const PostLoginPage: React.FC = () => {
  useEffect(() => {
    console.log('PostLoginPage (Dashboard) loaded');
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header /> {/* Header already contains NavigationMenu and Avatar */}
      <main className="flex-1 p-4 md:p-8 container mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
          <p className="text-muted-foreground">Here's an overview of your application.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                User Profile
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">John Doe</div>
              <p className="text-xs text-muted-foreground">
                john.doe@example.com
              </p>
              <Button variant="outline" size="sm" className="mt-4">View Profile</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Activity Feed
              </CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Recent Activity</div>
              <p className="text-xs text-muted-foreground">
                +5 new sign-ups this week
              </p>
              <Button variant="link" size="sm" className="px-0 mt-2">View Details</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Achievements
              </CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5 Badges Earned</div>
              <p className="text-xs text-muted-foreground">
                Keep up the great work!
              </p>
              <Button variant="secondary" size="sm" className="mt-4">Explore Achievements</Button>
            </CardContent>
          </Card>
        </div>

        <section className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Perform common tasks quickly from here.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button><Settings className="mr-2 h-4 w-4" /> Go to Settings</Button>
              <Button variant="outline">Manage Users</Button>
              <Button variant="ghost">View Reports</Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} Your AppName. All rights reserved.
      </footer>
    </div>
  );
};

export default PostLoginPage;