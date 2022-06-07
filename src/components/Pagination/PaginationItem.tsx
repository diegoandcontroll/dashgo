import { Button } from "@chakra-ui/react";

interface PaginationItemsProps {
  isCurrent?: boolean;
  numberPage: number;
}
export const PaginationItem = ({
  numberPage,
  isCurrent = false,
}: PaginationItemsProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: "pink.500",
          cursor: "default",
        }}
      >
        {numberPage}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      bg="gray.700"
      _hover={{
        bgColor: "gray.500",
      }}
    >
      {numberPage}
    </Button>
  );
};
