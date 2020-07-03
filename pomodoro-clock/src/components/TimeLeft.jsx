import React from "react";
import { useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

const TimeLeft = ({sessionDurationInSeconds}) => {
	const [timeLeft] = useState(sessionDurationInSeconds);
	const formattedTimeLeft = moment.duration(timeLeft, "s").format('mm:ss');
	return <p id="time-left">{formattedTimeLeft}</p>;
};

export default TimeLeft;