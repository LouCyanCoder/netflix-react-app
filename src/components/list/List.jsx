import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";

import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = () => {
	const listRef = useRef();
	const [slideNr, setSlideNr] = useState(0);
	const [isMoved, setIsMoved] = useState(false);

	const handleClick = (direction) => {
		setIsMoved(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;
		console.log(distance);
		if (direction === "left" && slideNr > 0) {
			setSlideNr(slideNr - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}
		if (direction === "right" && slideNr < 4) {
			setSlideNr(slideNr + 1);
			listRef.current.style.transform = `translateX(${-230 + distance}px)`;
		}
	};

	return (
		<section className="list">
			<span className="listTitle">Continue watching</span>
			<div className="wrapper">
				<ArrowBackIosOutlined
					className="sliderArrow left"
					onClick={() => handleClick("left")}
					style={{ display: !isMoved && "none" }}
				/>
				<article className="container" ref={listRef}>
					<ListItem index={0} />
					<ListItem index={1} />
					<ListItem index={2} />
					<ListItem index={3} />
					<ListItem index={4} />
					<ListItem index={5} />
					<ListItem index={6} />
					<ListItem index={7} />
					<ListItem index={8} />
					<ListItem index={9} />
				</article>
				<ArrowForwardIosOutlined
					className="sliderArrow right"
					onClick={() => handleClick("right")}
				/>
			</div>
		</section>
	);
};

export default List;
