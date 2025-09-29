"use client";
import React, { useCallback } from "react";
import { useLeague } from "@/app/contexts/LeagueProvider/LeagueProvider";
import Select from "@/design-system/Select/Select";
import Input from "@/design-system/Input/Input";

const LeagueFiltersComponent = () => {
  const { categories, category, searchValue, setSearchValue, setCategory } =
    useLeague();

  const handleSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setSearchValue?.(e.target.value),
    [setSearchValue]
  );
  const handleCategory = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const sport = e.target.value;
      setCategory?.(sport);
    },
    [setCategory]
  );
  return (
    <section className="w-full">
      <form className="w-full rounded-lg bg-secondary-container text-on-secondary-container p-4 md:p-6 shadow-sm">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="md:col-span-2">
            <Input
              label="Recherche"
              defaultValue={searchValue}
              placeholder="Tapez votre recherche ici"
              onChange={handleSearchValue}
            />
          </div>
          {categories && categories.length ? (
            <Select
              label="Sport"
              defaultValue={category}
              onChange={handleCategory}
            >
              <option value="">Aucun</option>
              {categories.map((league) => (
                <option key={league} value={league}>
                  {league}
                </option>
              ))}
            </Select>
          ) : null}
        </div>
      </form>
    </section>
  );
};

export const LeagueFilters = React.memo(LeagueFiltersComponent);
