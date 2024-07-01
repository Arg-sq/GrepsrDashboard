import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Image,
  Spinner,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { svgs } from '@grepsr/assets/svgs';
import { grepsr_colors } from '@grepsr/theme/Color';

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getSortedRowModel,
  GroupingState,
  SortingState,
  useReactTable
} from '@tanstack/react-table';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export type DataTableProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<any, any>[];
  isLoading?: boolean;
  pinColumnAccess?: boolean;
  filter?: {
    columnFilters?: ColumnFiltersState;
    setColumnFilters?: Dispatch<SetStateAction<ColumnFiltersState>>;
  };
  sortingColumn?: string;
  setTable?: (table: unknown) => void;
};

export function DataTable({
  data,
  columns,
  isLoading,
  setTable,
  filter,
  sortingColumn
}: DataTableProps) {
  const [grouping, setGrouping] = useState<GroupingState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [stickyColumn, setStickyColumn] = useState<null | number>(null);

  useEffect(() => {
    if (sortingColumn) {
      setSorting([{ id: sortingColumn, desc: false }]);
    }
  }, [sortingColumn]);

  const table = useReactTable({
    columns,
    data,
    state: {
      columnFilters: filter?.columnFilters,
      grouping,
      sorting
    },
    getFilteredRowModel: getFilteredRowModel(),
    onGroupingChange: setGrouping,
    getGroupedRowModel: getGroupedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: filter?.setColumnFilters
  });

  useEffect(() => {
    setTable?.(table);
  }, [table]);

  useEffect(() => {
    table.getHeaderGroups().map((headerGroup) =>
      headerGroup.headers.map(({ index }) => {
        columns[index]?.enablePinning && setStickyColumn(index + 1);
      })
    );
  }, [columns, data, table]);

  return (
    <>
      {!isLoading && data.length === 0 ? (
        <Box backgroundColor="white" ml={0} mr={0} borderRadius={8} width={'100%'}>
          <Box
            backgroundColor="gray.50"
            borderTopLeftRadius={8}
            borderTopRightRadius={8}
            borderBottom="1px solid"
            borderBottomColor="gray.200"
            height="40px"
          />
          <Stack justifyContent="center" alignItems="center" spacing={2} p={16} borderRadius={8}>
            <Heading size="md" color={grepsr_colors.gray_400}>
              Looks like there are no available data
            </Heading>
          </Stack>
        </Box>
      ) : (
        <Box overflowX={isLoading ? 'hidden' : 'auto'} pb={2} width={'100%'} borderRadius={8}>
          <Table bg={grepsr_colors.white} fontSize={'13px'}>
            <Thead bgColor="#EDF2F7" fill="solid" bg={grepsr_colors.gray_100}>
              {table?.getHeaderGroups()?.map((headerGroup) => (
                <Tr
                  key={headerGroup.id}
                  css={{
                    [`th:nth-of-type(${stickyColumn})`]: {
                      position: 'sticky',
                      left: '-1px',
                      right: '-1px',
                      zIndex: 40,
                      boxShadow: 'inset 1px 0 0 white,inset -1px 0 0 white'
                    }
                  }}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Th
                        key={header.id}
                        colSpan={header.colSpan}
                        textTransform="capitalize"
                        whiteSpace="nowrap"
                        style={{
                          backgroundColor: grepsr_colors.primary_200,
                          width: header.getSize(),
                          textAlign:
                            header.id == 'Actions' || header.id == 'Action' || header.colSpan > 1
                              ? 'center'
                              : 'left'
                        }}
                        onClick={header.column.getToggleSortingHandler()}>
                        <HStack justifyContent={'space-between'} cursor={'pointer'}>
                          <Text
                            flex={1}
                            color={grepsr_colors.black}
                            fontSize="14px"
                            fontWeight={700}>
                            {{
                              asc: (
                                <span>
                                  <u>A</u> &nbsp;
                                </span>
                              ),
                              desc: (
                                <span>
                                  <u>Z</u> &nbsp;
                                </span>
                              )
                            }[header.column.getIsSorted() as string] ?? ''}
                            {header.isPlaceholder
                              ? null
                              : flexRender(header.column.columnDef.header, header.getContext())}
                          </Text>
                          <Image src={svgs.Filter} />
                        </HStack>
                      </Th>
                    );
                  })}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {isLoading ? (
                <Tr>
                  <Td colSpan={table.getHeaderGroups()[0].headers.length}>
                    <HStack justifyContent="center" pb={'144px'}>
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                      />
                    </HStack>
                  </Td>
                </Tr>
              ) : (
                table?.getRowModel()?.rows.map((row, index) => (
                  <Tr
                    key={row.id}
                    backgroundColor={
                      index % 2 === 0 ? grepsr_colors.background : grepsr_colors.white
                    }
                    css={{
                      [`td:nth-of-type(${stickyColumn})`]: {
                        position: 'sticky',
                        right: '-1px',
                        left: '-1px',
                        zIndex: 40,
                        boxShadow: 'inset 1px 0 0 #edf2f7,inset -1px 0 0 #edf2f7'
                      },
                      [`td:nth-of-type(${stickyColumn}) , td:not(:last-child)`]: {
                        boxShadow: 'inset 1px 0 0 #edf2f7'
                      }
                    }}>
                    {row?.getVisibleCells()?.map((cell) => {
                      return (
                        <Td
                          key={cell.id}
                          pl={6}
                          fontWeight={500}
                          fontSize={'14px'}
                          color={grepsr_colors.black}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </Td>
                      );
                    })}
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </Box>
      )}
    </>
  );
}
