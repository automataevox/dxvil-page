import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { FC } from "react";

interface NewReleaseCardProps {
  newReleaseData: any[];
  upcomingId: string; // ID for the surprise item
}

const NewReleaseCard: FC<NewReleaseCardProps> = ({
  newReleaseData,
  upcomingId,
}) => {
  // Get first two items
  const firstTwoReleases = newReleaseData.slice(0, 2);
  // Find the surprise item by upcomingId
  const surpriseItem = newReleaseData.find(
    (item) => item?.id === upcomingId
  );

  // Final array of cards (including placeholder if surpriseItem doesn't exist)
  const releasesToShow = [surpriseItem || "placeholder", ...firstTwoReleases ];

  return (
    <div className="gap-8 grid grid-cols-3">
      {releasesToShow.map((item, index) => {
        if (item === "placeholder") {
          // Render a locked/placeholder card
          return (
            <Card
              key={`placeholder-${index}`}
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
              shadow="sm"
            >
              <CardBody className="flex flex-col items-center justify-center">
                <div className="justify-center text-center flex flex-col items-center">
                  <Image
                    alt="Locked content"
                    src="/Locked.png"
                    width={75}
                    height={75}
                  />
                  <h5 className="w-font text-xl">Locked</h5>
                  <p className="m-font text-md">Coming Soon</p>
                </div>
              </CardBody>
            </Card>
          );
        } else {
          // Render the normal release card
          return (
            <Card
              key={item?.id || index}
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
              shadow="sm"
            >
              <CardBody>
                <div className="flex gap-3">
                  <div>
                    <Image
                      alt="Album cover"
                      className="object-cover aspect-square"
                      height={item?.images[0].height / 4}
                      width={item?.images[0].width / 4}
                      shadow="md"
                      src={item?.images[0].url}
                    />
                  </div>
                  <div className="flex flex-row">
                    <div className="text-foreground-600 flex flex-col justify-between">
                      <div>
                        <h5 className="w-font text-xl">{item?.name}</h5>
                        <h5 className="m-font text-xl">
                          {item?.artists
                            .map((artist: any) => artist.name)
                            .join(", ")}
                        </h5>
                      </div>
                      <h5 className="m-font text-md">{item?.release_date}</h5>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default NewReleaseCard;
