import React from 'react';

const UserSurveys = (props) => {

    const links = [];

    for (let i = 0; i < props.surveys.length; i++){
        links.push(<div>{props.surveys[i]}</div>);
    }

    return (
        <div className='modal'>
            <div className='header'>My surveys:</div>
            <button id='exitBtn' onClick={props.exit}>x</button>
            {links}
        </div>
    );
}

export default UserSurveys;