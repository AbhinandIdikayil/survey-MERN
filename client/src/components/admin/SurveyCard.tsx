import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye } from "lucide-react"

function SurveyCard() {
    return (
        <div className="px-3 card pb-4">
            <Card
                className="overflow-hidden "
                x-chunk="An order details card with order details, shipping information, customer information and payment information."
            >
                <CardHeader className="flex flex-row items-start  bg-muted/50 pb-2 pt-3">
                    <div className="grid gap-0.5 ">
                        <CardTitle className="group flex items-center justify-center gap-2 text-lg">
                            Username
                        </CardTitle>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                        <Button size="sm" variant="outline" className="h-8 gap-1">
                            <Eye className="h-3.5 w-3.5" />
                            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap capitalize">
                                See survey
                            </span>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                    <div className="grid gap-3 tracking-tight">
                        <div className="font-semibold capitalize ">Survey Details</div>
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Email
                                </span>
                                <span>example@gmail.com</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Phone
                                </span>
                                <span>2323232323</span>
                            </li>
                        </ul>
                        <hr />
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Gender</span>
                                <span>$299.00</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Nationality</span>
                                <span>India</span>
                            </li>
                            <li className="flex items-center justify-between font-semibold">
                                <span className="text-muted-foreground">Message</span>
                                <h1 className="w-28 text-ellipsis whitespace-nowrap overflow-hidden">hasf asdf asdf asdf asdf asdf sdf</h1>
                            </li>
                        </ul>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                    <div className="text-xs text-muted-foreground">
                        Submitted <time dateTime="2023-11-23">November 23, 2023</time>
                    </div>

                </CardFooter>
            </Card>
        </div>
    )
}

export default SurveyCard