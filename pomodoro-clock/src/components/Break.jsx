import React from "react";
import moment from "moment";

const Break = ({breakDurationInSeconds, incrementBreakDurationByOneMinute, decrementBreakDurationByOneMinute}) => {
	const breakDurationInMinutes = moment.duration(breakDurationInSeconds, "s").minutes();

	return (
		<div>
			<p id="break-label">Break</p>
			<p id="break-length">{breakDurationInMinutes}</p>
			<button id="break-decrement" onClick={decrementBreakDurationByOneMinute}>-</button>
			<button id="break-increment" onClick={incrementBreakDurationByOneMinute}>+</button>
		</div>
	);

	
};

export default Break;
