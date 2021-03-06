import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import {Link} from 'react-router-dom';
const SeriesListsItem = ({series}) => (
    <li>
        <Link to={`/series/${series.show.id}`}>
         {series.show.name}
        </Link>
    </li>
)

const SeriesList = (props) => {
    return(
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                <SeriesListsItem series ={series} key={series.show.id}/>
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;