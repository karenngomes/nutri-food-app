import React, {Component} from 'react';
import axios from 'axios';
import FoodModal from './FoodModal';

export default class Search extends Component {
   state = {
        selectedFood: [],
        isOpen: undefined,
        foods: []
    };

    handleSelectedFood(index) {
        this.setState((prevState) => ({
            selectedFood: prevState.foods[index],
            isOpen: true
        }));
    }

    handleCloseModal = () => {
        this.setState(() => ({
            isOpen: undefined
        }));
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.input !== this.props.input) {
            this.searchOnAPI(nextProps.input);
        }
    }

    componentDidMount() {
        this.searchOnAPI(this.props.input);
    }

    searchOnAPI(search) {
        const config = { headers: {'content-type':'application/json','x-app-id': 'e70835bd', 'x-app-key':'41c686d618b2c4267d4ccaad781e71bd'}};
        const query = 'https://apibeta.nutritionix.com/v2/search?q=' + search + '&limit=10&offset=0';
        
        axios.get(query, config)
          .then(res => {
            this.setState({ foods: res.data.results });
          });
    }

    render() {
        return (
            <div className="search-content">
                <h2 className="search-content__title">Search for: {this.props.input}</h2>
                <ul>
                {this.state.foods.map((food, index)=> (
                    <div id={index} key={index}>
                        <li className="food" onClick={this.handleSelectedFood.bind(this, index)} >
                            <img className="food__img" src={food.thumbnail}></img>
                            <h4 className="food__name">{food.item_name}</h4>                       
                        </li>
                    </div> 
                ))}</ul>
                
                <FoodModal 
                    isOpen={this.state.isOpen}
                    closeModal={this.handleCloseModal}
                    selectedFood={this.state.selectedFood}
                />
            </div>
            
        );
    }

}
