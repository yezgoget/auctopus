import React from "react";
import Layout from "@components/common/Layout";
import Category from "@components/search/Category";
import RecentSearches from "@components/search/RecentSearches";
import SearchBar from "@components/search/SearchBar";

export default function SearchPage() {
  return (
    <Layout leftIcon="turtle">
      <SearchBar />
      <Category />
      <RecentSearches />
    </Layout>
  );
}
