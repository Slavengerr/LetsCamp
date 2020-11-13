import React, {Component} from "react";
import "./SubmitRequest.less";

class SubmitRequest extends Component {
  static create(request) {
      console.log(request);
      return fetch("https://letscamp-4b6c8.firebaseio.com/camp.json", {
          method: "POST",
          body: JSON.stringify(request),
          headers: {
              "Content-Type": "application/json"
          }
      })
          .then(response => response.json())
          .then(response => {
              request.id = response.name
              return request
          })
  }
}

export default SubmitRequest;