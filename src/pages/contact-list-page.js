import React, { Component } from 'react';
import ContactList from '../components/contact-list';
import MoviesClient from '../client';

const MAXIMUM_SCROLL_PAGES = 3;

export default class ContactListPage extends Component {

  movieClient;

  state = {
      currentPage: 1,
      contacts: [],
      loading: false,
      errors: {}
  };

  constructor(props) {
      super(props);
      this.movieClient = new MoviesClient();
  }

  componentDidMount() {
      document.addEventListener('scroll', this.trackScrolling);
      this.getData(this.state.currentPage);
  }

  componentWillUnmount() {
      document.removeEventListener('scroll', this.trackScrolling);
  }

  render() {
    return (
      <div>
        <ContactList contacts={this.state.contacts}
		loading={this.state.loading}
		errors={this.state.errors}
		/>
      </div>
    )
  }

  isBottom(el) {
      return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('mainContainer');
    if (this.isBottom(wrappedElement)) {
        if (this.state.currentPage > MAXIMUM_SCROLL_PAGES) {
           return document.removeEventListener('scroll', this.trackScrolling);
        }
        this.setState({ currentPage: this.state.currentPage + 1 });
        this.getData(this.state.currentPage);
    }
  }

  async getData(page = 1) {
    this.setState({ loading: true });
    const currentData = this.state.contacts;
    const rowData = await this.movieClient.getData(page);
    const newRows = rowData && rowData.data && rowData.data.results ? rowData.data.results : [];
    if (newRows && newRows.length > 0) {
        const newArr = [...currentData, ...newRows];
        this.setState({ loading: false, contacts: newArr});
    } else {
        this.setState({ loading: false, error: {global: 'No data received'}});
    }
  }

}
