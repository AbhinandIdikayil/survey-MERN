import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

function Login() {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <Card className="mx-auto max-w-sm shadow-md shadow-gray-600">
                <CardHeader>
                    <CardTitle className="text-3xl font-semibold text-slate-700 tracking-tighter">Login</CardTitle>
                    <CardDescription style={{ fontWeight: '500' }} className="capitalize tracking-tight text-sm max-md:text-xs text-slate-600">
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-slate-700">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password" className="text-slate-700">Password</Label>
                                <span className="ml-auto inline-block text-sm underline">
                                    Forgot your password?
                                </span>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <span className="underline">
                            Sign up
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login