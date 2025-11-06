import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const restaurants = [
    { id: "1", name: "The Golden Spoon", location: "Indiranagar" },
    { id: "2", name: "Spice Garden", location: "Koramangala" },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Zomato Drive Dashboard</h1>
          <p className="text-xl text-muted-foreground">KAM Hub - Select a Restaurant</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="card-hover cursor-pointer" onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    {restaurant.name}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{restaurant.location}</p>
                <Button className="w-full mt-4">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
