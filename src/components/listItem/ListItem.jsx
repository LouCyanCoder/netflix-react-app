import "./listItem.scss";

import React from "react";
import {
	Add,
	PlayArrow,
	ThumbDownAltOutlined,
	ThumbUpAltOutlined,
} from "@mui/icons-material";

const ListItem = () => {
	return (
		<div className="listItem">
			<img
				src="https://searchengineland.com/wp-content/seloads/2015/08/movie-film-video-production-ss-1920-800x450.jpg"
				alt=""
			/>
			<div className="itemInfo">
				<div className="icons">
					<PlayArrow />
					<Add />
					<ThumbUpAltOutlined />
					<ThumbDownAltOutlined />
				</div>
				<div className="itemInfoTop">
					<span>1 hr 14 mins</span>
					<span className="limit">+16</span>
					<span>1996</span>
				</div>
				<div className="desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi
					velit quas ab eius ratione, soluta, hic praesentium temporibus
					adipisci voluptatum iste debitis ad sapiente dolorem natus repellendus
					nostrum quae.
				</div>
				<div className="genre">Action</div>
			</div>
		</div>
	);
};

export default ListItem;
