import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

	
	  
	maptoPizzaComponent =(singlepizza)=>{
		
		return <Pizza key={singlepizza.id} pizzadata = {singlepizza} />
	}

	render() {
		return (
		<table className="table table-striped">
			<thead>
			<tr>
				<th scope="col">Topping</th>
				<th scope="col">Size</th>
				<th scope="col">Vegetarian?</th>
				<th scope="col">Edit</th>
			</tr>
			</thead>
			<article>testing the react article attribute</article>
			<details>testing the react details attribute</details>
			<tbody>
			
				{this.props.allPizzaData.map((singlepizza)=>this.maptoPizzaComponent(singlepizza))}
				
			</tbody>
		</table>
		);
	}

}

export default PizzaList;
