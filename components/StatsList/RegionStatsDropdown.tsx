import {NewRegion} from '@utils/statsData';

type RegionStatsDropdownProps = {
  sortedRegions: NewRegion[];
  region: NewRegion,
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RegionStatsDropdown = ({ sortedRegions, region, handleChange }: RegionStatsDropdownProps) => {
  return (
    <div className="mb-3">
      <label className="mr-2" htmlFor="region">
        Województwo:{' '}
      </label>
      <select
        className="border-solid border-2 border-sky-500 rounded-md p-2 shadow-md bg-sky-100"
        id="region"
        onChange={handleChange}
        value={region.name}
      >
        {sortedRegions.map((region) => (
          <option key={region.name} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionStatsDropdown;
