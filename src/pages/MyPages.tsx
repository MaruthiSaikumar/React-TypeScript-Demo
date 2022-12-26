import React, { useRef } from "react";
import { useResponse } from "../hooks/useResponse";
import { IResponse } from "../utils/apiDef";

const MyPages = () => {
	const { response, getNewDate } = useResponse();
  const responseRef = useRef(response)
  const callbackSuccessful = (data: IResponse) => {
    console.log("response is Stale: " + responseRef.current.newDate)
    console.log("should be: " + data.newDate)
  }

  const callbackFail = (data: any) => {

  }

  const handleButton = () => {
    getNewDate(callbackSuccessful,  callbackFail)
  }

	return <div>
    hello world {response.newDate}
  
    <br/>
    <br/>
    <br/>
    <br/>
    <button type="button" onClick={handleButton}>getNewDate</button>
  </div>;
};


export default MyPages;
