import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";

const Featured = ({ type }) => {
	return (
		<section className="featured">
			{type && (
				<div className="category">
					<span>{type === "movie" ? "Movies" : "Series"}</span>
					<select name="genre" id="genre">
						<option>Genre</option>
						<option value="animation">Animationdrama</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
						<option value="fantasy">Fantasy</option>
						<option value="historical">Historical</option>
						<option value="horror">Horror</option>
						<option value="romance">Romance</option>
						<option value="sci-fi">Sci-fi</option>
						<option value="thriller">Thriller</option>
						<option value="western">Western</option>
						<option value="drama">Drama</option>
						<option value="documentary">Documentary</option>
					</select>
				</div>
			)}
			<img
				src="https://media-exp1.licdn.com/dms/image/D4D35AQFSmL9V0khEHQ/profile-framedphoto-shrink_200_200/0/1650209314622?e=1654524000&v=beta&t=2udrRFQ7HE7iYR6yjHxYFEF-R-DotqMlExPLTecxUTM"
				alt=""
			/>
			<div className="info">
				<img
					src="https://media-exp1.licdn.com/dms/image/D4D35AQFSmL9V0khEHQ/profile-framedphoto-shrink_200_200/0/1650209314622?e=1654524000&v=beta&t=2udrRFQ7HE7iYR6yjHxYFEF-R-DotqMlExPLTecxUTM"
					alt=""
				/>
				<span className="desc">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
					beatae unde vel rem similique ad doloribus aut voluptas illum dolores
					delectus ipsam aspernatur id nostrum itaque aliquam, voluptatem nihil
					recusandae?
				</span>
				<div className="buttons">
					<button className="play">
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className="more">
						<InfoOutlined />
						<span>Info</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Featured;
