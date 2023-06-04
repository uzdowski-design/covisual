import {
    countriesSortByActiveCases,
    removeIncorrectActiveCases
} from '@utils/statsData';

const Sidebar = ({ globalStats }) => {
    const isVisible = true;
    const right = isVisible ? 'right-0' : '-right-[100vw]';

    const countriesSortedByActiveCases = globalStats.response.sort(
        countriesSortByActiveCases
    );
    console.log(countriesSortedByActiveCases);
    return (
        <div
            className={`fixed h-[90vh] w-[80vw] text-center vertical_light_gradient ${right} top-[5vh] z-[100] overflow-scroll rounded-l-lg transition-all`}
        >
            <h2>World info</h2>
            <ul className="">
                <div className="flex flex-row justify-between mx-4 border-b-sky-300 border-b-2">
                    <p>
                        <strong>Region</strong>
                    </p>
                    <p>
                        <strong>Active Cases</strong>
                    </p>
                </div>
                {countriesSortedByActiveCases.map((entry, index) => (
                    <div
                        className="flex flex-row justify-between mx-4 border-b-sky-200 border-b-2"
                        key={index}
                    >
                        <p>{entry.country}</p>
                        <p>
                            {removeIncorrectActiveCases(
                                entry.cases.active
                            ).toLocaleString('pl-PL')}
                        </p>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
