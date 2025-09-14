"use client";

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setFilteredMaps, clearSearch } from "@/Redux/slices/mapsSlice";
import s from "./SearchSection.module.scss";

const SearchSection = () => {
  const dispatch = useDispatch();
  const { mapsData, searchTerm, filteredMaps } = useSelector((state) => state.maps);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);
  const searchTimeoutRef = useRef(null);

  const performSearch = (searchValue) => {
    if (!searchValue.trim()) {
      dispatch(clearSearch());
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Small delay to show loading state
    setTimeout(() => {
      const searchLower = searchValue.toLowerCase();
      // Search through maps by name
      const filtered = mapsData.filter(map => 
        map.Name?.toLowerCase().includes(searchLower)
      );
      dispatch(setFilteredMaps(filtered));
      dispatch(setSearchTerm(searchValue));
      setIsSearching(false);
    }, 100);
  };

  const handleSearchInput = (e) => {
    const inputValue = e.target.value;
    
    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Set new timeout for debounced search
    searchTimeoutRef.current = setTimeout(() => {
      performSearch(inputValue);
    }, 300); // 300ms delay
  };

  const handleClearSearch = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear input immediately
    }
    
    // Clear any pending search timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    dispatch(clearSearch());
    setIsSearching(false);
  };

  // Cleanup search timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={s.searchSection}>
      <div className={s.searchContainer}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search maps by name..."
          onChange={handleSearchInput}
          className={s.searchInput}
        />
        {isSearching && (
          <div className={s.searchLoadingIndicator}>
            <div className={s.searchSpinner}></div>
          </div>
        )}
        <button
          onClick={handleClearSearch}
          className={s.clearButton}
          title="Clear search"
        >
          ×
        </button>
      </div>
      
      <div className={s.searchResults}>
        <p className={s.resultsText}>
          {searchTerm 
            ? `${filteredMaps.length} map${filteredMaps.length !== 1 ? 's' : ''} found`
            : `${mapsData.length} map${mapsData.length !== 1 ? 's' : ''} available`
          }
        </p>
      </div>
    </div>
  );
};

export default SearchSection;
