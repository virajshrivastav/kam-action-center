import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";
import { Zap } from "lucide-react";

interface ActiveDrivesCardProps {
  drives: string[];
}

export const ActiveDrivesCard = ({ drives }: ActiveDrivesCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          Active Drives
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {drives.map((drive, index) => (
            <StatusBadge key={index} variant="info">
              {drive}
            </StatusBadge>
          ))}
        </div>
        {drives.length === 0 && (
          <p className="text-muted-foreground text-sm">No active drives</p>
        )}
      </CardContent>
    </Card>
  );
};
