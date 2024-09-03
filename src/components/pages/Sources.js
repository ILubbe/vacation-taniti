import React from 'react';
import '../../App.css';
import SourcesTable from '../sources/Sources';
import SourcesData from '../sources/SourcesData';

const tableStyle = {
    border: '1px solid black',
    padding: '5px'
};

const Sources = () => (
    <table>
        <thead>
            <tr>
                <th style={tableStyle}>Page(s) | Location | Description | Classification | Image/Video | Source</th>
            </tr>
        </thead>
        {SourcesData.map((item, index) => (
            <SourcesTable
                key={index}
                page={item.page}
                location={item.location}
                description={item.description}
                classification={item.classification}
                src={item.src}
                apa={item.apa}
                url={item.url}
            />
        ))}
    </table>
);


export default Sources;