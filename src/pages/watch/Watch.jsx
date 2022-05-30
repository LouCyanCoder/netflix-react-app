import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

const Watch = () => {
	return (
		<section className="watch">
			<div className="back">
				<ArrowBackOutlined />
				Home
			</div>
			<video
				src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
				type="video/mp4"
				className="video"
				autoPlay
				progress
				controls
			/>
		</section>
	);
};

export default Watch;
