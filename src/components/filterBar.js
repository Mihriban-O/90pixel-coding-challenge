import React from "react";

class FilterBar extends React.Component {
  render() {
    return (
      <div class={!this.props.HomePage ? 'search-result-filter' : ''}>
        <div class="filter-bar">
          <div class="container filter-bar-area">
            <div class="row w-100">
              <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <div class="d-flex mb-2">
                  <div class="dropdown">
                    <a
                      class="btn btn-secondary btn-sm dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Year
                    </a>
  
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
  
                  <div class="dropdown">
                    <a
                      class="btn btn-secondary btn-sm dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Type
                    </a>
  
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <input
                    class="form-control search-bar"
                    type="search"
                    placeholder="Enter movie name here"
                    aria-label="Search"
                  />
                  <div class="search-icon">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterBar;
