import { SidebarState } from "@grepsr/hooks/useSidebarContext";
import { useContext } from "react";

const GetSidebarState=()=> {
    const sidebarOpen = useContext(SidebarState);
    return sidebarOpen as {
      showSidebar: boolean;
      setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    };
  }
  export default GetSidebarState