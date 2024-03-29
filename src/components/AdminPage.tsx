import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Logo {
    id: number;
    companyName: string;
    domain: string;
    url: string;
}

const AdminPage: React.FC = () => {
    const [logos, setLogos] = useState<Logo[]>([]);

    useEffect(() => {
        fetchLogos();
    }, []);

    const fetchLogos = async (): Promise<void> => {
        try {
            const response = await axios.get<Logo[]>('/api/logosPendingApproval');
            setLogos(response.data);
        } catch (error) {
            console.error('Error fetching logos:', error);
        }
    };

    const approveLogo = async (id: number): Promise<void> => {
        try {
            await axios.post(`/api/approveLogo/${id}`);
            fetchLogos(); // Refresh logos after approval
        } catch (error) {
            console.error('Error approving logo:', error);
        }
    };

    return (
        <div>
            <h1>Logos Pending Approval</h1>
            <ul>
                {logos.map((logo: Logo) => (
                    <li key={logo.id}>
                        {logo.companyName} - {logo.domain} - {logo.url}
                        <button onClick={() => approveLogo(logo.id)}>Approve</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;