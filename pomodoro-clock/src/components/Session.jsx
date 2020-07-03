import React from "react";
import moment from "moment";
import styled from "styled-components";

const Session = ({sessionDurationInSeconds, incrementSessionDurationByOneMinute, decrementSessionDurationByOneMinute}) => {
	const sessionDurationInMinutes = moment.duration(sessionDurationInSeconds, "s").minutes();

	return(
		<div>
			<p id="session-label">Session</p>
			<p id="session-length"> {sessionDurationInMinutes}</p>
			<button id="session-decrement" onClick={decrementSessionDurationByOneMinute}>-</button>
			<button id="session-increment" onClick={incrementSessionDurationByOneMinute}>+</button>
		</div>
	);
};

export default Session;