import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comment from "./Comment";
type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <img
            src={reviewInfo.image}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-"
        </div>
      </CardHeader>
    </Card>
  );
}

export default ReviewCard;
