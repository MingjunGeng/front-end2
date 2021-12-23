import React from 'react';

import { Link } from 'react-router-dom';

const BookListSession = (props) => {
    // const { class_id, class_name, intensity_level,class_date, start_time, class_duration, instructor, class_location} = props.session;
    // const {id, } = props
    console.log("BookListSession props", props)
    return(        
        <tr key={props.book.id}>
            <td>{props.book.volumeInfo.title}</td>

            <td>
                <a target="_blank" href={props.book.volumeInfo.previewLink}>
                    <img src={props.book.volumeInfo.imageLinks.thumbnail} />
                </a>
            </td>
            <td>{props.book.volumeInfo.authors[0]}</td>
            <td>{props.book.volumeInfo.categories[0]}</td>
            <td>{props.book.volumeInfo.language}</td>        
            <td>
            <Link to={`/classes/${props.book.id}`} className="view">
                <input type="button" className="btn btn-secondary" value="View"/>
            </Link>
            </td>

        </tr>
    )
}

export default BookListSession;