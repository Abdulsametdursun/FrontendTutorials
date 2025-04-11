function Header() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        Typescript Tutorial
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="#/">
          Mainpage
        </a>
        <a className="p-2 text-dark" href="#/user-list">
          User List
        </a>
      </nav>
      <a className="btn btn-outline-primary" href="#/sign-up">
        Sign up
      </a>
    </div>
  );
}

export default Header;
