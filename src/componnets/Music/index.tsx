import * as React from 'react';
import Shuffing from './Shuffing';
import RecommendPlaylist from './RecommendPlaylist';
import NewCourier from "./NewCourier";

import "./index.less";

export default function Music() {
    return (
        <div className="Music">
            <Shuffing/>
            <RecommendPlaylist/>
            <NewCourier/>
        </div>
    )
}
