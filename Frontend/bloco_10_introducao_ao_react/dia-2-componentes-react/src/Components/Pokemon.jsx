import { Component } from "react";
import PropTypes from 'prop-types';
import '../styles/Pokemon.css'

class Pokemon extends Component{
  render(){
    console.log(Component);

    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    const { value, measurementUnit} = averageWeight

    return(
    <div className="pokemon">
      <div className="poke">
        <p> Name: <strong>{name}</strong></p>
        <p>Type: <strong>{type}</strong></p>
        <p>Avarage Weigth: <strong>{value}{measurementUnit}</strong></p>
      </div>
      <img src={image} alt={name}/>
    </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

Pokemon.defaultProps = {
  pokemon: {},
}

export default Pokemon;
