import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag"

const LaunchesQuery = gql`
    query LaunchesQuery{
        launches {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success
        }
    }
`;

export class Launches extends Component {
  render() {
    return (
        <div>
            <h1 className="title">
                Luanches :)
            </h1>
            
            <Query query={LaunchesQuery}>
                
                {({ loading, error, data }) => {
                    if (loading) return <h2 className="subtitle">Loading...</h2>;
                    if (error){ console.log(error); return <h2 className="subtitle">Error :(</h2>;}
                
                    return data.launches.map(({ mission_name, launch_year }) => (
                        <div>
                            <h2 className="subtitle">
                                data :)
                            </h2>
                            <div key={mission_name}>
                            <p>{`${mission_name}: ${launch_year}`}</p>
                            </div>
                        </div>
                    ));
                }}

            </Query>

        </div>
    )
  }
}

export default Launches;