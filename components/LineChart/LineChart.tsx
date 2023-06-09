'use client';
import { useAppContext } from '@context/state';
import { StructuredEntry } from '@utils/statsData';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

type LineChartProps = {
    stats: StructuredEntry[];
    statsGroup: string;
};

const LineChart = ({ stats, statsGroup }: LineChartProps) => {
    const daysToDisplay = 30;

    const [state, setState] = useAppContext();

    let statsToDisplay = stats.slice(-daysToDisplay);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const
            },
            title: {
                display: false
            }
        }
    };

    const labels = statsToDisplay.map((stat) =>
        stat.statsDay.slice(0, 5).replace('-', '.')
    );

    const data = {
        labels,
        datasets: [
            {
                label: 'Zainfekowani',
                data: statsToDisplay.map(
                    (stat) => stat.daily.dailyTotalInfected
                ),
                borderColor: 'rgb(96, 165, 250)',
                backgroundColor: 'rgba(96, 165, 250, .5)'
            },
            {
                label: 'Zgony',
                data: statsToDisplay.map((stat) => stat.daily.dailyDeceased),
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: 'rgba(99, 102, 241, .5)'
            }
        ]
    };

    // different datasets for regions
    if (statsGroup === 'regions') {
        data.datasets[0].data = statsToDisplay.map(
            (stat) =>
                stat.regions.find((region) => region.name === state.region.name)
                    .totalInfected
        );
        data.datasets[1].data = statsToDisplay.map(
            (stat) =>
                stat.regions.find((region) => region.name === state.region.name)
                    .deceased
        );
    }

    return (
        <div className="my-5">
            <Line options={options} data={data} />
        </div>
    );
};

export default LineChart;
