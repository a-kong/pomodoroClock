import React from 'react';
import './App.css';
import { useState } from "react";
import Break from "./components/Break.jsx";
import Session from "./components/Session.jsx";
import TimeLeft from "./components/TimeLeft.jsx";

function App() {
// SESSION COMPONENT LIFT
  const [
		sessionDurationInSeconds,
		setSessionDurationInSeconds
  ] = useState(60 * 25);
  
  const decrementSessionDurationByOneMinute = () => {
		const newSessionDuration = sessionDurationInSeconds - 60;
		
		if(newSessionDuration < 0) {
			setSessionDurationInSeconds(0);
		} else {
			setSessionDurationInSeconds(newSessionDuration);
		}
	}

	const incrementSessionDurationByOneMinute = () => {
		setSessionDurationInSeconds(sessionDurationInSeconds + 60);
  };
  
// BREAK COMPONENT LIFT
  const [ 
		breakDurationInSeconds, 
		setBreakDurationInSeconds
	] = useState(300);

	const decrementBreakDurationByOneMinute = () => {
		const newBreakDuration = breakDurationInSeconds - 60;

		if(newBreakDuration < 0) {
			setBreakDurationInSeconds(0);
		} else {
			setBreakDurationInSeconds(newBreakDuration);
		}
	};

	const incrementBreakDurationByOneMinute = () => {
		setBreakDurationInSeconds(breakDurationInSeconds + 60);
	};


  return (
    <div className="App">
      <Break 
        breakDurationInSeconds = {breakDurationInSeconds}
        incrementBreakDurationByOneMinute = {incrementBreakDurationByOneMinute}
        decrementBreakDurationByOneMinute = {decrementBreakDurationByOneMinute} />
      <TimeLeft 
        sessionDurationInSeconds = {sessionDurationInSeconds} />  
      <Session 
        sessionDurationInSeconds = {sessionDurationInSeconds}
        incrementSessionDurationByOneMinute = {incrementSessionDurationByOneMinute}
        decrementSessionDurationByOneMinute = {decrementSessionDurationByOneMinute} />
    </div>
  );
}

export default App;
