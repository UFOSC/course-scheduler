import React, { Component } from 'react';
import SemesterView from './SemesterView.js'

// This displays all the semester and their respective classes
class SemesterListView extends Component
{

	// Create state for search
	constructor()
	{
		super();
		this.state =
			{
				theSearch: ''
			};
	}

	// Update the search and add resitcrtions if neccesry
	updateSearch(event)
	{
		this.setState({theSearch: event.target.value});
	}

	render()
	{
		return (
			<div>
				{/* Add search for names of different courses */}
				<input type="text"
					value={this.state.theSearch}
					onChange={this.updateSearch.bind(this)}
				/>

				<ul>
					{ /* Go through the entire list of semesters */}
					{this.props.semesterList.map((aSemester) =>
						{
							return <SemesterView semesterInfo={aSemester}
								filter={this.state.theSearch}
								key={aSemester.theId}/>
						})
					}
				</ul>
			</div>
		);
	}
}

export default SemesterListView;
