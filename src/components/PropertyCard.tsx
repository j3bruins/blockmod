import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PropertyCardProps {
  title: string;
  price: string;
  image: string;
  location: string;
  specs: {
    beds: number;
    baths: number;
    sqft: number;
  };
}

export const PropertyCard = ({ title, price, image, location, specs }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn">
      <CardHeader className="p-0 relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute bottom-4 right-4">
          <Button variant="secondary" className="bg-secondary text-white hover:bg-secondary/90">
            Buy Now
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <p className="text-2xl font-bold text-primary mb-2">{price}</p>
        <p className="text-gray-600 mb-4">{location}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{specs.beds} Beds</span>
          <span>{specs.baths} Baths</span>
          <span>{specs.sqft} sqft</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-secondary text-white hover:bg-secondary/90">View Details</Button>
      </CardFooter>
    </Card>
  );
};