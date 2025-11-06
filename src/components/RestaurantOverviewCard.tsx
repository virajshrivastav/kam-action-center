import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, DollarSign, MapPin, Phone, Mail } from "lucide-react";

interface RestaurantOverviewCardProps {
  restaurantData: {
    id: string;
    name: string;
    adsBudget: string;
    location: string;
    phone: string;
    email: string;
  };
}

export const RestaurantOverviewCard = ({ restaurantData }: RestaurantOverviewCardProps) => {
  const details = [
    { icon: Building2, label: "Res ID", value: restaurantData.id },
    { icon: Building2, label: "Res Name", value: restaurantData.name },
    { icon: DollarSign, label: "Ads Budget", value: restaurantData.adsBudget },
    { icon: MapPin, label: "Location", value: restaurantData.location },
    { icon: Phone, label: "Phone", value: restaurantData.phone },
    { icon: Mail, label: "Email", value: restaurantData.email },
  ];

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Restaurant Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
                <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{detail.label}</p>
                  <p className="font-medium text-foreground truncate">{detail.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
