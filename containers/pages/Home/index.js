import { DropDown } from "../../../component";
import React, { Fragment } from "react";
import { Header } from "../../../component";
import './Home.scss';

class Home extends React.Component {
  render() {
      return (
        <div className="container">
            <Header />
            <DropDown />
            <hr />
            {
                <Fragment>
                    <div className="card-content">
                        <p className="title">Title</p>
                        <p className="date">12-12-2002</p>
                        <p className="content">content</p>
                    </div>
                </Fragment>
            }
        </div>
      )
  }
}

export default Home;

