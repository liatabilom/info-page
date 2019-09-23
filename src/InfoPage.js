import React, { Component } from 'react';
import Curriculum from './Curriculum';
import Search from './Search';

class InfoPage extends Component {
	render() {
		return (
			<div>
				<div className="header" style={{ padding: 20 }}>
					<header>
						Na'dia
						<br />
						Correia Gonc,alves
					</header>
				</div>
				<br />
				<Search />
				<div className="row">
					<div className="side">
						<Curriculum />
					</div>
				</div>
			</div>
		);
	}
}

export default InfoPage;
