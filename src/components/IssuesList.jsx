
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./IssuesList.css";
class IssuesList extends Component {
    state = {
      issueData: [],
      
    };


    async componentDidMount() {
        try {
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await response.json();
        console.log("DATA IS ", data);
        this.setState({
          issueData: data,
        });
        } catch (error) {
            return error.message;
        }
      }
      render() {
      const { issueData } = this.state;

    return (
        <>
            <div className="allposts">
          
                {
                    issueData.map((issue, index) => (
                    <div className="posts">
                        <ul>
                            <li>{issue.title}</li>
                            <li>{issue.body}</li>
                            <li>{issue.url}</li>
                        </ul>
                    </div>

                    ))
                }
           

            </div>
        </>
    )

    }
    
};






export default IssuesList;