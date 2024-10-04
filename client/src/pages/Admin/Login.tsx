import { z } from "zod"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import side from '/polygon-scatter-haikei.svg'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { api } from "@/config/axiosInstance"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { AxiosError } from "axios"

function Login() {
    const navigate = useNavigate()
    const [apiError, setApiError] = useState()
    const FormSchema = z.object({
        email: z.string().nonempty({ message: 'Email is required' }).email({ message: 'Invaild email address' }),
        password: z.string().nonempty({ message: 'Password is required' })
    })

    let form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(formData: z.infer<typeof FormSchema>) {
        try {
            console.log(formData)
            const { data } = await api.post('/login', { data: formData })
            if (data.success) {
                navigate('/admin')
            }
        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError) {
                if (error && error.response && error?.response?.data && error.response.data?.message) {
                    setApiError(error.response.data?.message)
                }
            }
        }
    }

    return (
        <div className="w-full h-screen lg:grid lg:h-screen lg:grid-cols-2 xl:h-screen">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground text-white">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-4  max-md:px-3">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} >
                                <div className="grid gap-2">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Label htmlFor="email">Email</Label>
                                                {
                                                    apiError && (
                                                        <Label htmlFor="error" className="text-red-600"> { "("+ apiError + ')'} </Label>
                                                    )
                                                }
                                                <Input
                                                    id="email"
                                                    // type="email"
                                                    {...field}
                                                    placeholder="m@example.com"
                                                    required
                                                    className="bg-white"
                                                />
                                                <FormMessage className="text-red-600 font-medium tracking-wide " style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid gap-2 ">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Label htmlFor="password">Password</Label>
                                                <Input id="password"
                                                    type="password"
                                                    className="bg-whit"
                                                    {...field}
                                                />
                                                <FormMessage className="text-red-600 font-medium tracking-wide" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button type="submit" className="w-full  max-md:px-3 mt-3">
                                    Login
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <img
                    src={side}
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}

export default Login