import React from 'react';
import './index.css';

const SeriesListsItem = ({series}) => (
    <li>
         {series.show.name}
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