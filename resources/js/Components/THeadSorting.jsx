import { memo } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';

export default memo(function THeadSorting({
    sortChanged = () => {},
    sortField = null,
    sortDirection = null,
    sortable = true,
    name,
    children,
}) {
    const isSortedAsc = sortField === name && sortDirection === 'asc';
    const isSortedDesc = sortField === name && sortDirection === 'desc';

    return (
        <th onClick={(e) => sortChanged(name)}>
            <div
                className={`px-3 py-3 ${
                    sortable &&
                    'flex cursor-pointer items-center justify-between gap-1'
                }`}
            >
                {children}
                {sortable && (
                    <div>
                        <ChevronUpIcon
                            className={`w-4 ${
                                isSortedAsc ? 'text-green-500' : 'text-gray-400'
                            }`}
                        />
                        <ChevronDownIcon
                            className={`-mt-2 w-4 ${
                                isSortedDesc
                                    ? 'text-green-500'
                                    : 'text-gray-400'
                            }`}
                        />
                    </div>
                )}
            </div>
        </th>
    );
});
