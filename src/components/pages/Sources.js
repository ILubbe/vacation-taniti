import React from 'react';
import '../../App.css';
import SourcesTable from '../sources/Sources';
import SourcesData from '../sources/SourcesData';

const Sources = () => (
    <div>
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
    </div>
);


export default Sources;
