import Airtable from 'airtable'
import React, { useEffect } from 'react'

const base = new Airtable({ apiKey: "tbl1y9raaRv5dhj2x" }).base('appyuqTygK8j1XnGL')

const App = () => {
    useEffect(() => {
        base("goals")
            .select({ view: "Grid view" })
            .eachPage(
                (records, fetchNextPage) => {
                    console.log(records);
                    fetchNextPage();
                });
    }, []);

    return (
        <div>App</div>
    )
}

export default App