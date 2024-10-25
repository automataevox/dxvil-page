import { Card, CardBody, Image, Skeleton } from "@nextui-org/react";
import { FC } from "react";

interface NewReleaseCardProps {
  newReleaseData: any[];
  isLoading: boolean;
}

const NewReleaseCard: FC<NewReleaseCardProps> = ({ newReleaseData, isLoading }) => {
  const releasesToShow = isLoading ? Array(3).fill(null) : newReleaseData.slice(0, 3);

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {releasesToShow.map((item, index) => (
        <Card
          key={item?.id || index}
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-full"
          shadow="sm"
        >
          <CardBody>
            <div className="flex gap-3">
              {isLoading ? (
                <Skeleton className="aspect-square w-[75] h-[75]"/>
              ) : (
                <Image
                  alt="Album cover"
                  className="object-cover aspect-square"
                  height={item?.images[0].height / 4}
                  width={item?.images[0].width / 4}
                  shadow="md"
                  src={item?.images[0].url}
                />
              )}
              <div className="flex flex-col justify-between text-foreground-600">
                {isLoading ? (
                  <Skeleton className={"w-[120] h-[20]"} />
                ) : (
                  <>
                    <h5 className="w-font text-xl">{item?.name}</h5>
                    <h5 className="m-font text-xl">
                      {item?.artists.map((artist: any) => artist.name).join(", ")}
                    </h5>
                  </>
                )}
                <h5 className="m-font text-md">
                  {isLoading ? <Skeleton className={"w-[80] h-[16]"} /> : item?.release_date}
                </h5>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default NewReleaseCard;
