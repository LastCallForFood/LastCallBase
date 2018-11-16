import React, { Component } from 'react';

export class GetSupplierData extends Component {
    displayName = GetSupplierData.name

  constructor(props) {
      super(props);
      this.state = { localdata: null, loading: true, error: null };

      fetch('api/SupplierServices/GetSupplierData')
          .then(response => response.json())
          .then(data => {
              if (data.error.errorCode !== 0)
                  throw data.error;
              this.setState({ localdata: data.information, loading: false });
          })
          .catch((servererror) => {
              this.setState({ error: servererror, loading: false });
          });
  }

    renderData() {
        if (this.state.error !== null) {
            return <div>{this.state.error.errorMessage}</div>
        }

        // No error, display the data
        return (
          <div>
                {this.state.localdata}
          </div>
    );
  }
     
  render() {
    let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderData();

    return (
        <div>
            {contents}
        </div>
    );
  }

}

