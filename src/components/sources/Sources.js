import React from 'react';

function SourcesTable ({ page, location, description, classification, src, apa, url }) {

    const mediaStyle = {
        maxWidth: '80px',
        maxHeight: '80px',
        width: '80px',
        height: '80px',
        display: 'block',
        objectFit: 'cover'
    };

    const tableStyle = {
        border: '1px solid black',
        padding: '5px',
        width: '100px',
        height: '100px',
        fontSize: '12px'
    };

    const sourceStyle = {
        border: '1px solid black',
        padding: '5px',
        width: '400px',
        height: '100px',
        fontSize: '12px'
    };

    const mediaElement = classification === 'img' ? (
        <img src={src} alt="" style={mediaStyle} />
    ) : (
        <p>{src}</p>
    );
    
    const sourceElement = (
        <div>
          {apa} <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        </div>
    );

    return (
        <table>
            <tbody>
                <tr>
                    <td style={tableStyle}>{page}</td>
                    <td style={tableStyle}>{location}</td>
                    <td style={tableStyle}>{description}</td>
                    <td style={tableStyle}>{classification}</td>
                    <td style={tableStyle}>{mediaElement}</td>
                    <td style={sourceStyle}>{sourceElement}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default SourcesTable;
