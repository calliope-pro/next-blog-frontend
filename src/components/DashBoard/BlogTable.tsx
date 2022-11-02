import type { BlogTableData } from '#src/types';

import dayjs from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Paper,
} from '@mui/material';

// Array.prototype.sort(compareFn?)の引数の関数生成関数
// ソートの仕組みを制定
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

// 降順、昇順のUnion型
type Order = 'asc' | 'desc';

// Array.prototype.sort(compareFn?)の引数用関数
function getComparator<Key extends keyof BlogTableData>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string | Date | boolean },
    b: { [key in Key]: number | string | Date | boolean },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// tableのヘッダー用の型
interface HeadCell {
    id: keyof BlogTableData;
    label: string;
}

// tableヘッダーの生成
const headCells: readonly HeadCell[] = [
    {
        id: 'title',
        label: 'Titles',
    },
    {
        id: 'created_at',
        label: '作成日時',
    },
    {
        id: 'updated_at',
        label: '更新日時',
    },
];

// tableの機能の型(tableヘッダーと組み合わせる)
interface EnhancedTableProps {
    onRequestSort: (
        event: React.MouseEvent,
        property: keyof BlogTableData,
    ) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

// 機能付きtableヘッダーのコンポーネント
const EnhancedTableHead: React.FC<EnhancedTableProps> = (
    props: EnhancedTableProps,
) => {
    const { order, orderBy, onRequestSort } = props;

    // TableSortLabelがclickされたらonRequestSortが呼ばれる
    const createSortHandler =
        (property: keyof BlogTableData) => (event: React.MouseEvent) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export const BlogTable: React.FC<{ rows: BlogTableData[] }> = ({
    rows,
}: {
    rows: BlogTableData[];
}) => {
    // 1ページあたりの行数一覧
    const ROWS_PER_PAGE_OPTIONS = [10, 20, 50, 100];
    // 降順、昇順の指定
    const [order, setOrder] = useState<Order>('desc');
    // ソート列
    const [orderBy, setOrderBy] = useState<keyof BlogTableData>('updated_at');
    // 現在のページ
    const [currentPage, setCurrentPage] = useState(0);
    // 1ページあたりの行数
    const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGE_OPTIONS[0]);

    const handleRequestSort = (
        event: React.MouseEvent,
        property: keyof BlogTableData,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setCurrentPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(0);
    };

    // 空白である行数
    const emptyRows =
        currentPage > 0
            ? Math.max(0, (1 + currentPage) * rowsPerPage - rows.length)
            : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size="medium"
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {rows
                                .slice()
                                .sort(getComparator(order, orderBy))
                                .slice(
                                    currentPage * rowsPerPage,
                                    currentPage * rowsPerPage + rowsPerPage,
                                )
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={index}
                                        >
                                            <TableCell id={labelId}>
                                                <Link
                                                    href={`/admin/${row.uuid}`}
                                                >
                                                    <a
                                                        style={{
                                                            fontSize: 'large',
                                                        }}
                                                    >
                                                        {row.title}
                                                    </a>
                                                </Link>
                                            </TableCell>
                                            <TableCell align="left">
                                                {dayjs
                                                    .unix(row.updated_at)
                                                    .format('YYYY年MM月DD日')}
                                            </TableCell>
                                            <TableCell align="left">
                                                {dayjs
                                                    .unix(row.created_at)
                                                    .format('YYYY年MM月DD日')}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                ></TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={currentPage}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    showFirstButton={true}
                />
            </Paper>
        </Box>
    );
};
