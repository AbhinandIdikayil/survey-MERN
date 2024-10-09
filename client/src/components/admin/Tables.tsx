
import { Eye } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { SurveyCardSectionProps } from './SurveyCard'

function Tables({ data, setModalData }: SurveyCardSectionProps) {
    return (
        <Card x-chunk="A list of products in a table with actions. Each row has an image, name, status, price, total sales, created at and actions.">
            <CardHeader className='max-md:px-4 max-md:pt-4'>
                <CardTitle>Surveys</CardTitle>
                <CardDescription>
                    Check users surveys
                </CardDescription>
            </CardHeader>
            <CardContent className='max-md:px-4'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="hidden md:table-cell">
                                Price
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Total Sales
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                Created at
                            </TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">
                                Laser Lemonade Machine
                            </TableCell>
                            <TableCell>
                                <span>Draft</span>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                $499.99
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                25
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                2023-07-12 10:42 AM
                            </TableCell>
                            <TableCell>
                                <Button size="sm" variant="outline" className="h-8 gap-1" onClick={() => setModalData(data)}>
                                    <Eye className="h-3.5 w-3.5" />
                                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap capitalize">
                                        See survey
                                    </span>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                </div>
            </CardFooter>
        </Card>
    )
}

export default Tables