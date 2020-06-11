import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

//document.getElementById('query').value
export default class Paginate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            perPage: 10,
            lastPage: 1,
            query: ''
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    getPage(str, text) {
      var main = str.search('=');
      var end = str.search('&');
      return Number(str.substring(main + 1, end));
    }



    receivedData(page) {
      let getPage = this.getPage;
        axios
            .get(`/events?_page=${page || 1 }&q=${this.state.query}`)
            .then(res => {
                const data = res.data;
                const postData = data.map(pd => <React.Fragment>
                    <div>
                      <b>{pd.category2 || pd.category1}</b>
                      <br />
                      <text>{pd.date}</text>
                      <p>{pd.description}</p>
                    </div>
                </React.Fragment>)
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    postData,
                    lastPage: getPage(res.headers.link.split(',')[res.headers.link.split(',').length - 1])
                })
            });
    }

    handlePageClick(e) {
        const selectedPage = e.selected;

        this.setState({
            currentPage: selectedPage,
        }, () => {
            this.receivedData(selectedPage + 1);
        });

    };

  handleButtonClick() {
    console.log("Searching", document.getElementById('query').value);
    this.setState({
      query: document.getElementById('query').value
    }, () => {
      this.receivedData(1);
    });
  }

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div>
              <p>Enter text to search</p>
              <input type="text" id="query" name="query" /><br></br>
              <button onClick={this.handleButtonClick.bind(this)}>Search</button>
              <br />
              <br />
              <div>
                {this.state.postData}
                <br></br>
                  <ReactPaginate
                      previousLabel={"prev"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={this.state.lastPage}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={this.handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}/>
              </div>
            </div>
        )
    }
}