// filterSelectors.ts
import { createSelector } from "reselect";
import { RootState } from "./store";
import { JdList } from "../typings/types";
import { FilterState } from "./filterSlice";

const selectFilterState = (state: RootState) => state.filter;

const selectJdList = (state: RootState) => state.data.jdList;

export const selectFilteredJdList = createSelector(
  [selectFilterState, selectJdList],
  (filterState: FilterState, jdList: JdList[]) => {
   
    return jdList.filter((item: JdList) => {
      if (
        filterState.minExperience &&
        item.minExp < filterState.minExperience
      ) {
        return false; 
      }

      if (filterState.companyName && item?.company !== filterState.companyName) {
        return false;
      }

      if (
        filterState.location.toLocaleLowerCase() &&
        item.location.toLocaleLowerCase() !==
          filterState.location.toLocaleLowerCase()
      ) {
        return false;
      }

      if (
        filterState.remoteOnsite &&
        filterState.remoteOnsite.length > 0 &&
        !filterState.remoteOnsite.includes(item.location)
      ) {
        return false;
      }

      if (
        filterState.techStack &&
        filterState.techStack.length > 0 &&
        !filterState.techStack.some((stack) => item.jobRole.includes(stack))
      ) {
        return false;
      }

      if (filterState.role && item?.role?.toLocaleLowerCase() !== filterState.role.toLocaleLowerCase()) {
        return false;
      }

      if (filterState.minBasePay && item.minJdSalary < parseFloat(filterState.minBasePay.toString())) {
        return false; 
      }

      return true;
    });
  }
);
