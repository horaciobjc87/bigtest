import React from "react";
import { ScannerProvider } from "../ScannerContext";
import TableComponent from "../components/TableComponent";
import ScannerComponent from "../components/ScannerComponent";

function App() {
  return (
    <ScannerProvider>
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScannerComponent />
          <TableComponent />
        </div>
      </div>
    </ScannerProvider>
  );
}

export default App;
