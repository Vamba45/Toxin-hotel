import React, { FC } from "react";
import ContentLoader from "react-content-loader";

const RoomSkeleton: FC = () => {
    return (<>
                <ContentLoader
                    speed={0.75}
                    width={300}
                    height={250}
                    viewBox="0 0 280 250"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">

                    <rect x="0" rx="10%" y="0" width="280" height="250"/>
                </ContentLoader>
            </>)
}

export default RoomSkeleton;