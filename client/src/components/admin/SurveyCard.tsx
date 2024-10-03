import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Truck } from "lucide-react"

function SurveyCard() {
    return (
        <div className="px-3">
            <Card
                className="overflow-hidden "
                x-chunk="An order details card with order details, shipping information, customer information and payment information."
            >
                <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                            Order Oe31b70H
                            <Button
                                size="icon"
                                variant="outline"
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                            >
                                <Copy className="h-3 w-3" />
                                <span className="sr-only">Copy Order ID</span>
                            </Button>
                        </CardTitle>
                        <CardDescription>Date: November 23, 2023</CardDescription>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                        <Button size="sm" variant="outline" className="h-8 gap-1">
                            <Truck className="h-3.5 w-3.5" />
                            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                Track Order
                            </span>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                        <div className="font-semibold">Order Details</div>
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Glimmer Lamps x <span>2</span>
                                </span>
                                <span>$250.00</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Aqua Filters x <span>1</span>
                                </span>
                                <span>$49.00</span>
                            </li>
                        </ul>
                        <hr />
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>$299.00</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>$5.00</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Tax</span>
                                <span>$25.00</span>
                            </li>
                            <li className="flex items-center justify-between font-semibold">
                                <span className="text-muted-foreground">Total</span>
                                <span>$329.00</span>
                            </li>
                        </ul>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                    <div className="text-xs text-muted-foreground">
                        Updated <time dateTime="2023-11-23">November 23, 2023</time>
                    </div>

                </CardFooter>
            </Card>
        </div>
    )
}

export default SurveyCard