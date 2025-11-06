import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Building2, ArrowRight, MapPin, TrendingUp } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const Index = () => {
  const navigate = useNavigate();

  const restaurants = [
    { 
      id: "1", 
      name: "The Golden Spoon", 
      location: "Indiranagar, Bangalore",
      activeDrives: 3,
      status: "active" as const,
      revenue: "₹45K"
    },
    { 
      id: "2", 
      name: "Spice Garden", 
      location: "Koramangala, Bangalore",
      activeDrives: 2,
      status: "active" as const,
      revenue: "₹32K"
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 border border-primary/20">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Welcome to Your KAM Hub
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Manage your restaurant partnerships, track performance, and drive growth all in one place.
              </p>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Restaurants</p>
                    <p className="text-3xl font-bold">{restaurants.length}</p>
                  </div>
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Active Drives</p>
                    <p className="text-3xl font-bold">5</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-[hsl(var(--status-done))]" />
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                    <p className="text-3xl font-bold">₹77K</p>
                  </div>
                  <div className="text-2xl">💰</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Restaurant Cards */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Restaurants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {restaurants.map((restaurant) => (
                <Card 
                  key={restaurant.id} 
                  className="card-hover cursor-pointer group" 
                  onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                >
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Building2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{restaurant.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {restaurant.location}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Active Drives</p>
                        <p className="text-2xl font-bold">{restaurant.activeDrives}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                        <p className="text-2xl font-bold">{restaurant.revenue}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <StatusBadge variant="done">Active</StatusBadge>
                      <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
