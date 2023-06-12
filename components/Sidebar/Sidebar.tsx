'use client';
import {
    countriesSortByActiveCases,
    removeEmptyNumbers
} from '@utils/statsData';
import Link from 'next/link';
import { useAppContext } from '@context/state';
import { GlobalStats } from '@utils/statsData';

type SidebarProps = {
    globalStats: GlobalStats;
};

const Sidebar = ({ globalStats }: SidebarProps) => {
    const [state, setState] = useAppContext();
    const right = state.isSidebarVisible ? 'right-0' : '-right-[100vw]';

    const countriesSortedByActiveCases = globalStats.response.sort(
        countriesSortByActiveCases
    );

    return (
        <div
            className={`fixed h-[90vh] w-[80vw] text-center vertical_light_gradient ${right} top-[5vh] z-[100] overflow-scroll rounded-l-lg transition-all shadow-lg`}
        >
            <h2 className="text-xl">World Info</h2>
            <ul className="">
                <div className="flex flex-row justify-between mx-4 border-b-sky-300 border-b-2">
                    <p>
                        <strong>Region</strong>
                    </p>
                    <p>
                        <strong>Active Cases</strong>
                    </p>
                </div>
                {countriesSortedByActiveCases?.map((entry, index) => (
                    <Link
                        key={index}
                        href={`/stats/${entry.country}`
                            .replace(/\s+/g, '-')
                            .toLowerCase()}
                        onClick={() =>
                            setState((prev) => ({
                                ...prev,
                                isSidebarVisible: !prev.isSidebarVisible
                            }))
                        }
                    >
                        <li className="flex flex-row justify-between mx-4 border-b-sky-200 border-b-2">
                            <p>{entry.country}</p>
                            <p>
                                {removeEmptyNumbers(
                                    entry.cases.active
                                ).toLocaleString('pl-PL')}
                            </p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
