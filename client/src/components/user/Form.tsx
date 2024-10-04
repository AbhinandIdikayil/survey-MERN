import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { api } from "@/config/axiosInstance"
import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"
type SurveyFormSectionProps = {
    setSubmited: Dispatch<SetStateAction<boolean>>;
}

function SurveyFormSection({ setSubmited }: SurveyFormSectionProps) {
    const FormSchema = z.object({
        username: z.string({ required_error: 'Name is required' }).nonempty({ message: 'Name is required' }),
        email: z.string().nonempty({ message: 'Email is required' }).email({ message: 'Invaild email address' }),
        phone: z.string().nonempty({ message: 'Phone is required' }).min(10, { message: "min 10 length" }),
        nationality: z.string().nonempty({ message: 'Nationality is required' }).min(1, { message: 'Nationality is required' }),
        address: z.string().nonempty({ message: 'Address is required' }),
        message: z.string().nonempty({ message: 'Message is required' }),
        gender: z.enum(['Male', 'Female', 'Other'], {
            required_error: 'Gender is required',  // Custom required error message
            invalid_type_error: 'Gender is required',
        }),
    })

    let form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: "",
            nationality: '',
            address: '',
            message: '',
        },
    })

    async function onSubmit(formData: z.infer<typeof FormSchema>) {
        console.log(formData)

        try {
            const { data } = await api.post('/create', { data: formData })
            console.log(data)
            if (data?.success) {
                setSubmited(true)
            }
        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError) {
                if (error && error.response && error?.response?.data && error.response.data?.message) {
                    toast.error(error.response.data?.message, { position: 'top-center' })
                    return
                }
            }
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex max-md:flex-col  md:justify-between gap-3 space-y-2">
                <div className="w-1/2 max-md:w-full">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize font-semibold text-slate-700">Your name</FormLabel>
                                <FormMessage className="p-0 m-0" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                <FormControl style={{ margin: '2px 0px' }}>
                                    <Input placeholder="John doe" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize font-semibold text-slate-700">Your Email address</FormLabel>
                                <FormMessage className="p-0 m-0" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                <FormControl style={{ margin: '2px 0px' }}>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize font-semibold text-slate-700">Your Phone Number</FormLabel>
                                <FormMessage className="p-0 m-0" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                <FormControl style={{ margin: '2px 0px' }}>
                                    <Input placeholder="+91" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nationality"
                        render={({ field }) => (
                            <FormItem className="pb-3 m-0" >
                                <FormLabel className="capitalize font-semibold text-slate-700">Your nationality</FormLabel>
                                <FormMessage className="p-0 m-0" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                <FormControl style={{ margin: '0px 0px' }}>
                                    <Input placeholder="India" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-1/2 max-md:w-full" style={{ padding: '0px 0px', margin: '0px 0px', marginTop: '2px' }}>
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem className="p-0" >
                                <FormLabel className="capitalize font-semibold text-slate-700">Your Address</FormLabel>
                                <FormMessage className="p-0 m-0" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                <FormControl style={{ margin: '0px 0px' }}>
                                    <Input placeholder="+91" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem className="m-0" style={{ padding: "0px 0px", marginTop: '10px' }}>
                                <FormControl style={{ margin: '1px 0px' }}>
                                    <div className="flex-col" style={{ padding: "0px 0px", margin: '0px 0px', marginTop: '5px' }}>
                                        <label htmlFor="" className="capitalize font-semibold text-slate-700 text-sm">your Gender</label>
                                        <FormMessage className="p-0 m-0" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                        <div className="flex gap-2 pt-2">
                                            <div className="radio-wrapper-4">
                                                <input id="example-4"
                                                    type="radio"
                                                    {...field}
                                                    value="Male"
                                                    name="radio-examples"
                                                />
                                                <label htmlFor="example-4"> Male </label>
                                            </div>
                                            <div className="radio-wrapper-4">
                                                <input
                                                    id="example-4"
                                                    type="radio"
                                                    {...field}
                                                    value={'Female'}
                                                    name="radio-examples"
                                                />
                                                <label htmlFor="example-4"> Female</label>
                                            </div>
                                            <div className="radio-wrapper-4">
                                                <input
                                                    id="example-4"
                                                    type="radio"
                                                    {...field}
                                                    value={'Other'}
                                                    name="radio-examples"
                                                />
                                                <label htmlFor="example-4">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="m-0" style={{ padding: "0px 0px", marginTop: '6px' }}>
                                <FormLabel className="capitalize font-semibold text-slate-700">Your message</FormLabel>
                                <FormMessage className="p-0 m-0" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                <FormControl style={{ margin: '0px 0px' }}>
                                    <textarea placeholder="+91" {...field} className="shadow-sm text-base w-full border border-solid rounded  px-1 focus:border-black focus:ring-0.5 focus:ring-black  focus:outline-none tracking-tight" style={{ height: '98px', fontWeight: '400' }} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <button type="submit" className="bg-[#34a265] px-6 py-1.5 rounded-md font-medium text-white capitalize tracking-tighter shadow-sm shadow-gray-600 border border-solid border-gray-400 float-end mt-1">Submit form</button>
                </div>
            </form>
            <hr style={{ height: '2px' }} className="bg-[#34a265] mt-2" />
        </Form>
    )
}

export default SurveyFormSection