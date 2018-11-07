import React, {Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component{
    state = {
        show: null
    }
    componentDidMount(){
        const {id} = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ show: json }));

    }
    render(){
        const {show} = this.state;
        console.log(show);
        return(
            <div >
              {show === null && <Loader/>}
              {
                show !== null
                &&
                <div className="card card-body">
                    <ul className=" list-group">
                        <li className="list-group-item">
                            <h3>{show.name}</h3>
                        </li>
                        <li className="list-group-item">  
                          <img alt="show" src={show.image.medium}/>
                        </li>
                  
                        <li className="list-group-item">Premiado - {show.premiered}</li>
                        <li className="list-group-item">Classificação - {show.rating.average}</li>
                        <li className="list-group-item">Episódios - {show._embedded.episodes.length}</li>
                    </ul>
                </div>
              }
            </div>
        )
    }
}

export default SingleSeries;