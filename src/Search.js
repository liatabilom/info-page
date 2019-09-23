import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

class Search extends Component {
	render() {
		return (
			<div className="searchBar">
				<h1>
					<form>
						<div className="clearfix">
							<input className="emailInput float-left" type="text" placeholder="Email" />
							<span className="infoIcon float-left ml-3">
								<a href="https://ecstatic-elion-03955f.netlify.com/">
									<FontAwesomeIcon icon={faInfoCircle} size="1x" />
								</a>
							</span>
							<span className="avocadoIcon float-left ml-3" role="img" aria-label="Avocado">
								<a href="https://nadiacoralves.tumblr.com/" style={{ textDecoration: 'none' }}>
									🥑
								</a>
							</span>
						</div>
					</form>
				</h1>
			</div>
		);
	}
}

export default Search;
