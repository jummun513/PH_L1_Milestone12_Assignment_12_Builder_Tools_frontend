import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                data: [45, 48.05, 41.03, 56.2, 55.38, 59.01],
                fill: false,
                borderColor: '#F17626',
                backgroundColor: 'rgba(75,192,192,0.2)',
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                position: "bottom",
                text: 'Revenue(in million) vs last 6 months graphical view',
            },
        },
    };

    return <div className='w-full flex justify-center items-center md:items-end mb-8 sm:mb-12 md:mb-0'><Line data={data} options={options} /></div>;
};

export default LineChart;