import { Card, CardBody, CardFooter, Image, Skeleton } from "@nextui-org/react";
import { FC } from "react";

interface NewReleaseCardProps {
  newReleaseData: any[];
}

const NewReleaseCard: FC<NewReleaseCardProps> = ({ newReleaseData }) => {
  return (
    <div className="gap-2 grid grid-cols-3">
      {[...Array(2)].map((_, index) => {
        const item = newReleaseData?.[index];

        return (
          <Card
            key={index}
            isPressable={!!item}
            shadow="sm"
            className="flex-row"
            onPress={() =>
              item && window.open(item.external_urls.spotify, "_blank")
            } // Open in new tab
          >
            <CardBody className="overflow-visible p-0">
              {item ? (
                <Image
                  alt={item.name}
                  className="w-full aspect-square object-cover"
                  radius="lg"
                  shadow="sm"
                  src={item.images?.[0]?.url}
                />
              ) : (
                <Skeleton className="w-48 aspect-square object-cover rounded-lg" />
              )}
            </CardBody>
            <CardFooter className="text-small flex flex-col items-start">
              {item ? (
                <>
                  <h3 className="font-bold">{item.name}</h3>
                  <div className="flex justify-between w-full">
                    <p className="text-default-500">
                      {item.artists
                        .map((artist: any) => artist.name)
                        .join(", ")}
                    </p>
                    <p className="text-default-500">
                      {item.release_date.slice(0, 4)}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <Skeleton className="h-5 w-24 rounded-md" />
                  <div className="flex justify-between w-full">
                    <Skeleton className="h-5 w-20 rounded-md" />
                    <Skeleton className="h-5 w-16 rounded-md" />
                  </div>
                </>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default NewReleaseCard;
