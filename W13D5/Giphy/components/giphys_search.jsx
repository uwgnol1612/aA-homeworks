import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../components/root'

import GiphysIndex from './giphys_index';
import configureStore from '../store/store'

// import fetchSearchGiphys from '../util/api_util'
import { receiveSearchGiphys, fetchSearchGiphys} from '../actions/giphy_actions'

// const store = configureStore();

// window.store = store;
// window.fetchSearchGiphys = fetchSearchGiphys;
// window.receiveSearchGiphys = receiveSearchGiphys;

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById('root')

    ReactDOM.render(<Root store={store} />, root)
})


class GiphysSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = { searchTerm: "samoyed" }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchSearchGiphys('samoyed');
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchSearchGiphys(searchTerm);
    }

    handleChange(e) {
        this.setState({ searchTerm: e.target.value })
    }

    render() {
        return (
            <div>
            <form className="search-form">
            <input
                type="text"
                onChange={this.handleChange}
                value={this.state.searchTerm} />
 
            <button type= "submit" onClick= {this.handleSubmit}>Search</button>
        </form>
            <GiphysIndex giphys={this.props.giphys}/>
        </div>
        ) 
    }
}

export default GiphysSearch;





