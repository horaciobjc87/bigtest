import { useState } from "react";
import { useScanner} from "../ScannerContext"

export const useTable = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTracking, setSelectedTracking] = useState(null);


  const handleTrackingClick = (tracking) => {
    setSelectedTracking(tracking);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const {tableData, newItems} = useScanner();

  return({
    tableData,
    newItems,
    isModalOpen,
    selectedTracking,
    handleTrackingClick,
    handleCloseModal
  });
}