/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./CustomerList.module.css";
import SearchBar from "./SearchBar";
import FilterOptions from "./FilterOptions";
import CustomerTable from "./CustomerTable";
import Pagination from "./Pagination";

function CustomerList() {
  return (
    <main className={styles.customerList}>
      <section className={styles.listContainer}>
        <header className={styles.listHeader}>
          <h1 className={styles.title}>Customer List</h1>
          <div className={styles.controlsWrapper}>
            <SearchBar />
            <FilterOptions />
          </div>
        </header>
        <CustomerTable />
        <Pagination />
      </section>
    </main>
  );
}

export default CustomerList;
