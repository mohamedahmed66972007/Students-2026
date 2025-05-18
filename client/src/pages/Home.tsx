
import React, { useReducer } from "react";
import HeroBanner from "@/components/HeroBanner";
import FileFilters from "@/components/FileFilters";
import FileGrid from "@/components/FileGrid";
import SubjectTabs from "@/components/SubjectTabs";
import { useFiles } from "@/hooks/use-files";
import { FiltersAction, FiltersState } from "@/lib/types";

const initialFilters: FiltersState = {
  subject: null,
  grade: null,
  semester: null,
  search: null
};

function filtersReducer(state: FiltersState, action: { type: FiltersAction; payload?: any }) {
  switch (action.type) {
    case FiltersAction.SET_SUBJECT:
      return { ...state, subject: action.payload };
    case FiltersAction.SET_GRADE:
      return { ...state, grade: action.payload };
    case FiltersAction.SET_SEMESTER:
      return { ...state, semester: action.payload };
    case FiltersAction.SET_SEARCH:
      return { ...state, search: action.payload };
    case FiltersAction.RESET:
      return initialFilters;
    default:
      return state;
  }
}

export default function HomePage() {
  const [filters, dispatch] = useReducer(filtersReducer, initialFilters);
  
  const { files, isLoading } = useFiles({
    subject: filters.subject,
    grade: filters.grade,
    semester: filters.semester,
    search: filters.search,
    page: 1,
    pageSize: 10
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroBanner />
      <div className="mt-8 space-y-6">
        <SubjectTabs activeSubject={filters.subject} onSelectSubject={(subject) => 
          dispatch({ type: FiltersAction.SET_SUBJECT, payload: subject })} 
        />
        <FileFilters filters={filters} dispatch={dispatch} />
        <FileGrid files={files || []} isLoading={isLoading} isAdmin={false} />
      </div>
    </div>
  );
}
