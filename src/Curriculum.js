import React, { Component } from 'react';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import './Curriculum.css';

class AllCards extends Component {
	render() {
		return (
			<div>
				<div className="container mt-1 mainCards">
					<h1 className="jobTitle">Product Designer</h1>
					<div className="row">
						<div className="card-body p-0 col-md-4 border-top border-dark ">
							<Experience />
						</div>
						<div className="card-body p-0 col-md-4 border-top border-dark">
							<Education />
						</div>
						<div className="card-body p-0 col-md-4 border-top border-dark">
							<Contact />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AllCards;
