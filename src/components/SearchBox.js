import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite, faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = (props) => (
    <div className="content">
        <div>
            <FontAwesomeIcon style={{ fontSize:'7rem'} } icon={faCookieBite} />
            <h2 className="content__title">Nutri Food</h2>
        </div>
        
        <div className="content__subtitle">
            <p>Discover your favorite foods info.</p>
            <form className="search" onSubmit={props.handleSearchName}>
            
                <div className="search">
                    <input className="search__input" type="text" name="search"/>
                    <button className="search__button"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </form>
        </div>
    </div>
);

export default SearchBox;