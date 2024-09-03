import React from 'react';

function SourcesTable ({ page, location, description, classification, src, apa, url }) {

    const imageStyle = {
        maxWidth: '100px',
        maxHeight: '100px'
    };

    const tableStyle = {
        border: '1px solid black',
        padding: '5px'
    };

    return (
        <table>
            <tbody>
                <tr>
                    <td style={tableStyle}>{page}</td>
                    <td style={tableStyle}>{location}</td>
                    <td style={tableStyle}>{description}</td>
                    <td style={tableStyle}>{classification}</td>
                    <td style={tableStyle}><img src={src} alt="" style={imageStyle}></img></td>
                    <td style={tableStyle}>{apa} <a href={url} target="_blank">{url}</a></td>
                </tr>
            </tbody>
        </table>
    );
}

export default SourcesTable;