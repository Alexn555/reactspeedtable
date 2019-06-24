import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './contact-list.scss';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

export default function ContactList({contacts, loading, errors}){

    const loadingMessage = (
      <div className="icon-info">
        <div className="message-content">
           <h3> Loading...</h3>
		   <p>Please wait.</p>
       </div>
      </div>
  )

  const emptyMessage = (
      <div className="icon-warning">
        <div className="message-content">
            <h3> No Employees Found</h3>
            <p>No data found</p>
        </div>
      </div>
  )

  const timeoutMessage = (
      <div className="icon-error">
        <div className="message-content">
            <h3> {errors.global}</h3>
        <p>Is the backend server running?</p>
        </div>
     </div>
  )

  const cards = () => {
      const formatPoster = (cell, row) => {
          return(
              <span>
			  <img src={"https://image.tmdb.org/t/p/original/" + cell}
                   alt="Poster loading..."
                   width="100" height="80" />
			</span>
          )
      };

      const formatReleaseDate = (cell, row) => {
          return(
              <span>{cell}</span>
          )
      };

      let columns = [{
          dataField: 'id',
          text: 'ID'
      }, {
          dataField: 'title',
          text: 'Title',
          filter: textFilter(),
          sort: true,
      }, {
          dataField: 'poster_path',
          text: 'Poster',
          formatter: formatPoster
      }, {
          dataField: 'popularity',
          text: 'Popularity',
          sort: true
      }, {
          dataField: 'release_date',
          text: 'Release date',
          formatter: formatReleaseDate,
          sort: true
      }];

      contacts = contacts ? contacts : [];
      return (
          <BootstrapTable keyField='id'
                          data={ contacts }
                          columns={ columns }
                          headerClasses='header-class'
                          filter={ filterFactory() }
          />
    )
  }

  const contactList = (
    <div>
      { cards() }
    </div>
  )

  return (
    <div>
      { loading && loadingMessage }
      { contacts.length === 0 && !loading  && !errors.global && emptyMessage }
      { errors.global && timeoutMessage }
      { contacts.length > 0 && contactList }
    </div>
  )
}
