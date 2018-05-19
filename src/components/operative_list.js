import React from 'react';
import auth from '../hoc/auth';

const opList = props => (
    <div>
        <h1 className='center'>Secret Op List</h1>
        <ol>
            <li>Lil Wayne</li>
            <li>Lil Peep</li>
            <li>Lil Xan</li>
            <li>Lil Skrrt</li>
            <li>Lil Pump</li>
        </ol>
    </div>
)

export default auth (opList);