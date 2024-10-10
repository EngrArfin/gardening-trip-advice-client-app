import React from "react";
import { Card, CardBody, Image, Button, IconButton } from "desiui"; // Example DesiUI imports
import { HeartIcon } from "../../icons";

export default function Profiles() {
  const [liked, setLiked] = React.useState(false);
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="bg-background rounded-lg shadow-md max-w-md">
      <CardBody className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-4">
          <Image
            src="https://nextui.org/images/album-cover.png"
            alt="Album cover"
            className="rounded-lg shadow-lg object-cover"
            style={{ width: "100%", height: 200 }}
          />
          <div className="flex flex-col justify-between w-full">
            <h3 className="text-lg font-semibold text-foreground">
              Md Samsel Arfin
            </h3>
            <p className="text-sm text-foreground/80">12 Tracks</p>
            <h1 className="text-xl font-medium mt-2">Frontend Radio</h1>
            <div className="flex items-center gap-2 mt-4">
              <IconButton
                icon={<HeartIcon />}
                variant={liked ? "solid" : "outline"}
                color={liked ? "error" : "neutral"}
                onClick={() => setLiked(!liked)}
              />
              <Button
                variant={isFollowed ? "outline" : "solid"}
                color="primary"
                onClick={() => setIsFollowed(!isFollowed)}
              >
                {isFollowed ? "Unfollow" : "Follow"}
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
