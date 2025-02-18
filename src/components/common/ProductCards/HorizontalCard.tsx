import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HorizontalCard() {
  return (
    <Card className="w-full  overflow-hidden flex bg-gray-100 ">
      <div className="flex p-1">
        {/* Image container */}
        <div className="relative h-24 w-24  flex-shrink-0 border rounded-lg overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xq1lvu8S8BJQu8tw08eys2tQaj7DDI.png"
            alt="Scenic waterfall in The Bahamas"
            className="h-full w-full object-cover object-left"
          />
          <button className="absolute right-1 top-1 rounded-full bg-primary p-1 backdrop-blur-sm hover:bg-primary/90">
            <Heart className="h-3 w-3 text-white" />
          </button>
        </div>

        {/* Content container */}
        <CardContent className="flex-1 w-full  p-1">
          <div className="flex h-full flex-col justify-between">
            <div className="w-full ">
              <div className="flex items-center gap-1 text-xs">
                <span className="font-medium">4.96</span>
                <span className="text-yellow-500">★</span>
                <span className="text-muted-foreground">(76)</span>
              </div>
              <h3 className="line-clamp-1 text-xs font-semibold">
                The Majestic Bahamas
              </h3>
              <p className="text-xs text-muted-foreground">Vacations</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-semibold">$110</span>
              <span className="text-xs text-muted-foreground">/night</span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
