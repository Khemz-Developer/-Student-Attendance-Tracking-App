// "use client";
// import React, { useEffect } from "react";
// import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
// import { useState } from "react";
// function StudentListTable(studentList) {
//   const [colDefs, setColDefs] = useState([
//     { field: "id", filter: true },
//     { field: "name", filter: true },
//     { field: "address", filter: true },
//     { field: "contact", filter: true },
//   ]);

//   const [rowData, setRowData] = useState([]);

//   useEffect(() => {
//     if (studentList) {
//       setRowData(studentList);
//     }
//   }, [studentList]);
//   return (
//     <div>
//       <div
//         className="ag-theme-quartz" // applying the Data Grid theme
//         style={{ height: 500 }} // the Data Grid will fill the size of the parent container
//       >
//         <AgGridReact rowData={rowData} columnDefs={colDefs} />
//       </div>
//     </div>
//   );
// }

// export default StudentListTable;
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Button } from "@/components/ui/button";
import { Search, Trash } from "lucide-react";

function StudentListTable({ studentList }) {
  const [rowData, setRowData] = useState([]);
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [8, 16, 100];
  const [searchInput, setSearchInput] = useState("");
  
  const CustomButtons = (props) => {
    return (
      <Button variant="destructive">
        <Trash />
      </Button>
    );
  };
  const [colDefs] = useState([
    { field: "id", filter: true },
    { field: "name", filter: true },
    { field: "address", filter: true },
    { field: "contact", filter: true },
    { field: "action", cellRenderer: CustomButtons },
  ]);

  useEffect(() => {
    if (studentList) {
      setRowData(studentList);
    }
  }, [studentList]);

  return (
    <div className="m-10">
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <div className="flex gap-2 p-2 mb-2 border rounded-lg shadow-sm">
            <Search className="mt-2"/>
            <input onChange={(event)=>setSearchInput(event.target.value)} type="text" placeholder="Search" className="w-full p-2 border-2 border-gray-200 rounded-md"/>
        </div>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          quickFilterText={searchInput}
        />
      </div>
    </div>
  );
}

export default StudentListTable;
