import React from "react";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    const years = [];
    for (let i = new Date().getFullYear(); i >= 1970; i--) {
      years.push(i);
    }

    this.state = {
      years,
      types: ["movie", "series", "episode"],
      title: "",
    };
  }

  _search = (e) => {
    if (e.key !== "Enter") return;

    if (!this.state.selectedYear) return alert("Please select year");
    if (!this.state.selectedType) return alert("Please select type");
    if (this.state.title.length < 3)
      return alert("Movie name should be at least 3 length");

    window.location.href = `/search/${this.state.selectedYear}/${this.state.selectedType}/${this.state.title}`;
  };

  render() {
    return (
      <div className={!this.props.HomePage ? "search-result-filter" : ""}>
        <div className="filter-bar">
          <div className="container filter-bar-area">
            <div className="row w-100">
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <div className="d-flex mb-2">
                  <div className="dropdown">
                    <a
                      className="btn btn-secondary btn-sm dropdown-toggle"
                      role="button"
                      href="javascript:void(0)"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.state.selectedYear || "Year"}
                    </a>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      {this.state.years.map((year) => (
                        <a
                          className="dropdown-item"
                          onClick={() => this.setState({ selectedYear: year })}
                          key={year}
                        >
                          {year}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="dropdown">
                    <a
                      className="btn btn-secondary btn-sm dropdown-toggle"
                      href="javascript:void(0)"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.state.selectedType || "Type"}
                    </a>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      {this.state.types.map((type) => (
                        <a
                          className="dropdown-item"
                          onClick={() => this.setState({ selectedType: type })}
                          key={type}
                        >
                          {type}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                  <input
                    className="form-control search-bar"
                    type="search"
                    placeholder="Enter movie name here"
                    aria-label="Search"
                    onChange={(e) => this.setState({ title: e.target.value })}
                    onKeyDown={this._search}
                  />
                  <div className="search-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
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
