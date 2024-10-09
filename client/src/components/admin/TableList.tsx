import { TableCell, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import { Eye } from 'lucide-react'
import { SurveyCardSectionProps } from './SurveyCard'
import { formatDate } from '@/lib/date'

function TableList({ data, setModalData }: SurveyCardSectionProps) {
    return (
        <TableRow>
            <TableCell className="font-medium">
                {data?.username}
            </TableCell>
            <TableCell>
                <span>{data?.email}</span>
            </TableCell>
            <TableCell className="hidden md:table-cell">
                {data?.nationality}
            </TableCell>
            <TableCell className="hidden md:table-cell">
                {data?.gender}
            </TableCell>
            <TableCell className="hidden md:table-cell">
                {
                    formatDate(data?.createdAt)
                }
            </TableCell>
            <TableCell>
                <Button size="sm" variant="outline" className="h-8 gap-1"
                    onClick={() => setModalData(data)}
                >
                    <Eye className="h-3.5 w-3.5" />
                    <span className="lg:sr-only max-md:sr-only xl:not-sr-only xl:whitespace-nowrap capitalize">
                        See survey
                    </span>
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default TableList