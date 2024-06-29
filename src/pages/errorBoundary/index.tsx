import { useState, useEffect, ReactNode } from "react";
import { grepsr_colors } from "../../theme/color";
import { Box, Button, Text } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "../../routes/routes.constants";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleNavigateToBase = () => {
    window.location.href = NAVIGATION_ROUTES.BASE;
  };

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      console.error("Error occurred:", event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      setHasError(true);
      console.error("Unhandled promise rejection:", event.reason);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  if (hasError) {
    return (
      <Box
        minW={"100%"}
        minH={"100dvh"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        rowGap={4}
      >
        <Box display={"flex"} columnGap={4}>
          <Text fontSize={"30px"} color={grepsr_colors.primary_600} fontWeight={600}>
            Oops! Looks like something went wrong.
          </Text>
        </Box>
        <Button
          variant={"primaryLighter"}
          size={"fit"}
          fontSize={"14px"}
          px={"10px"}
          py={"12px"}
          onClick={handleNavigateToBase}
        >
          Go Back to Dashboard
        </Button>
      </Box>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
