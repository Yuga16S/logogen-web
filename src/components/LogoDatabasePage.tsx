import React, { useState, useEffect } from 'react';
import config from '../../config.json';


const LogoDatabasePage = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Number of items per page

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        try {
            // Fetch data from your database API, you can use libraries like Axios or fetch
            const response = await fetch(`${config.serverUrl}/api/displayLogoDetails?page=${currentPage}&limit=${itemsPerPage}`);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the indexes of the current items being displayed
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    interface Item {
        id: number;
        company_name: string;
        domain: string;
        url: string;
      }

      
    // Render the table rows
    const renderTableRows = () => {
        return currentItems.map((item: Item, index: number) => (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.company_name}</td>
                <td>{item.domain}</td>
                <td>{item.url}</td>
            </tr>
        ));
    };

    // Render pagination buttons
    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => handleClick(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>company_name</th>
                        <th>domain</th>
                        <th>url</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableRows()}
                </tbody>
            </table>
            {renderPagination()}
        </div>
    );
};

export default LogoDatabasePage;