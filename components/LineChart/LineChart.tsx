'use client';
import { useAppContext } from '@context/state';
import {
    GlobalStatsRegion,
    StructuredEntry,
    getCountryHistoricaldata,
    removeEmptyNumbers
} from '@utils/statsData';
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
    stats: StructuredEntry[] | GlobalStatsRegion[];
    statsGroup: string;
    historicalData?: GlobalStatsRegion[];
};

const LineChart = ({ stats, statsGroup, historicalData }: LineChartProps) => {
    const daysToDisplay = 30;

    const [state, setState] = useAppContext();

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
    let statsToDisplay = [];
    let infectedData = [];
    let deceasedData = [];
    let labels = [];

    if (['total', 'daily', 'regions'].includes(statsGroup)) {
        statsToDisplay = stats.slice(-daysToDisplay);

        labels = statsToDisplay.map((stat) =>
            stat.statsDay.slice(0, 5).replace('-', '.')
        );

        if (statsGroup === 'regions') {
            infectedData = statsToDisplay.map(
                (stat) =>
                    stat.regions.find(
                        (region) => region.name === state.region.name
                    ).totalInfected
            );
            deceasedData = statsToDisplay.map(
                (stat) =>
                    stat.regions.find(
                        (region) => region.name === state.region.name
                    ).deceased
            );
        } else {
            infectedData = statsToDisplay.map(
                (stat) => stat.daily.dailyTotalInfected
            );
            deceasedData = statsToDisplay.map(
                (stat) => stat.daily.dailyDeceased
            );
        }
    } else if (statsGroup === 'country') {
        const filteredData = filterSameDays(historicalData);

        statsToDisplay = filteredData.slice(0, daysToDisplay).reverse();
        labels = statsToDisplay.map((stat) => changeDateFormat(stat.day));

        infectedData = statsToDisplay.map((stat) =>
            removeEmptyNumbers(stat.cases.new)
        );
        deceasedData = statsToDisplay.map((stat) =>
            removeEmptyNumbers(stat.deaths.new)
        );
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Zainfekowani',
                data: infectedData,
                borderColor: 'rgb(96, 165, 250)',
                backgroundColor: 'rgba(96, 165, 250, .5)'
            },
            {
                label: 'Zgony',
                data: deceasedData,
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: 'rgba(99, 102, 241, .5)'
            }
        ]
    };

    function changeDateFormat(date) {
        const str = date.slice(5);
        return str;
    }

    function filterSameDays(data) {
        const newDataArray = [];
        data.forEach((entry) => {
            if (!newDataArray.find((stat) => stat.day === entry.day)) {
                newDataArray.push(entry);
            }
        });
        return newDataArray;
    }

    return (
        <div className="my-5">
            <Line options={options} data={data} />
        </div>
    );
};

export default LineChart;
