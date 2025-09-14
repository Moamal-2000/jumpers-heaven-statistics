import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredMaps, setSortBy } from "@/Redux/slices/mapsSlice";
import s from "./FiltersSection.module.scss";
import SortSection from "./SortSection/SortSection";

const FiltersSection = ({ setPaginationNumber }) => {
  const dispatch = useDispatch();
  const { mapsData, searchTerm } = useSelector((s) => s.maps);
  const searchParams = useSearchParams();
  const currentType = searchParams.get("type") || "jump";

  const handleTypeChange = (type) => {
    // Update URL parameters
    const newParams = new URLSearchParams(searchParams);
    newParams.set("type", type);
    window.history.replaceState({}, '', `${window.location.pathname}?${newParams.toString()}`);
    
    // The Maps component will detect the URL change and re-fetch data
    setPaginationNumber(1);
  };

  const typeOptions = [
    { value: "all", label: "All Maps" },
    { value: "jump", label: "Jump" },
    { value: "defrag", label: "Defrag" },
    { value: "surf", label: "Surf" },
  ];

  return (
    <div className={s.filtersSection}>
      <div className={s.filtersContainer}>
        <div className={s.filterGroup}>
          <label className={s.filterLabel}>Map Type</label>
          <div className={s.filterButtons}>
            {typeOptions.map((option) => (
              <button
                key={option.value}
                className={`${s.filterButton} ${currentType === option.value ? s.active : ""}`}
                onClick={() => handleTypeChange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        
        <SortSection setPaginationNumber={setPaginationNumber} />
      </div>
    </div>
  );
};

export default FiltersSection;
