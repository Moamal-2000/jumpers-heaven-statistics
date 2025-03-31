"use client";

import FilterCard from "@/Components/Shared/Cards/FilterCard/FilterCard";
import { FILTERS_COMPONENTS_DATA } from "@/Data/filters";
import FilterButtons from "./FilterButtons/FilterButtons";
import s from "./FiltersSection.module.scss";

const FiltersSection = () => {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const router = useRouter();

  // useEffect(() => {
  //   const paramsSession = sessionStorage.getItem("homeSearchParams") || "{}";
  //   console.log("paramsSession", paramsSession);
  //   const paramsSessionObject = JSON.parse(paramsSession);
  //   const isEmptyParamsSession = isEmptyObj(paramsSessionObject);
  //   const urlParams = new URLSearchParams(paramsSessionObject);

  //   if (!isEmptyParamsSession) {
  //     // router.push(`${pathname}/${urlParams.toString()}`, {
  //     //   scroll: false,
  //     // });
  //     return;
  //   }

  //   const paramsObject = Object.fromEntries(searchParams.entries());
  //   const paramsObjectString = JSON.stringify(paramsObject);

  //   sessionStorage.setItem("homeSearchParams", paramsObjectString);
  // }, [searchParams]);

  return (
    <section className={s.filtersSection}>
      {FILTERS_COMPONENTS_DATA.map(
        ({
          title,
          queryName,
          defaultUrlQuery,
          filtersData,
          id,
          filtersComponent,
        }) => {
          if (filtersComponent)
            return (
              <FilterCard key={id} title={title}>
                {filtersComponent}
              </FilterCard>
            );

          return (
            <FilterCard key={id} title={title}>
              <FilterButtons
                queryName={queryName.toLowerCase()}
                defaultUrlQuery={defaultUrlQuery.toLowerCase()}
                filtersData={filtersData}
              />
            </FilterCard>
          );
        }
      )}
    </section>
  );
};

export default FiltersSection;
