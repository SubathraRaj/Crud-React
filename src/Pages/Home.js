import React from "react";
import ViewUser from "../Forms/ViewApp";
class App extends React.Component {
    render () {
        return(
            <div>
                <h1 className="text-center"> Home </h1>
                <ViewUser/>
            </div>
        );
    }
}
export default App;
