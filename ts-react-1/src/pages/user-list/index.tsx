import Header from "../../components/Header";
import { Fragment } from "react";

function UserList() {
  return (
    <Fragment>
      <Header />

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">User List</h1>
        <p className="lead">User List project main page.</p>
      </div>
    </Fragment>
  );
}

export default UserList;
