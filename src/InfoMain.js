import React, { Component } from 'react';
import Curriculum from './Curriculum';
import Search from './Search';
import './InfoMain.css';

class InfoPage extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<header>
						<a href="https://www.correiagoncalves.com" style={{ textDecoration: 'none', color: 'black' }}>
							Na'dia
							<br />
							Correia Gonc,alves
						</a>
					</header>
				</div>
				<Search />
				<div className="row">
					<div className="side">
						<h2>
							<Curriculum />
						</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default InfoPage;
