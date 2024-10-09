import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { api } from "@/config/axiosInstance"
import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { ChevronDown, LoaderCircle } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"
import DropDown from "../DropDown"
import countiresJSON from '../../data/countries.json'
import { useSubmitedContext } from "@/context/Submited"
import { useNavigate } from "react-router-dom"

type Action = {
    loading: boolean,
    dropDown: boolean
}

function SurveyFormSection() {
    const [action, setAction] = useState<Action>({
        loading: false,
        dropDown: false
    })
    const navigate = useNavigate()
    const { setSubmited } = useSubmitedContext()
    const FormSchema = z.object({
        username: z.string({ required_error: 'Name is required' }).nonempty({ message: 'Name is required' }),
        email: z.string().nonempty({ message: 'Email is required' }).email({ message: 'Invaild email address' }),
        phone: z.string().nonempty({ message: 'Phone is required' }).min(10, { message: "min 10 length" }).regex(/^\d{10}$/, { message: 'invalid number' }),
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
        setAction((prev: Action) => ({ ...prev, loading: true }))
        try {
            const { data } = await api.post('/create', { data: formData })
            console.log(data)
            if (data?.success) {
                setSubmited(true)
                return navigate('/success')
            }
        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError) {
                if (error && error.response && error?.response?.data && error.response.data?.message) {
                    toast.error(error.response.data?.message, { position: 'top-center' })
                    return
                }
            }
        } finally {
            setAction((prev: Action) => ({ ...prev, loading: false }))
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex max-md:flex-col  md:justify-between gap-3 max-md:gap-0 space-y-2">
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
                            <FormItem className="pb-0  m-0">
                                <FormLabel className="capitalize font-semibold text-slate-700">Your Phone Number</FormLabel>
                                <FormMessage className="p-0 m-0" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                <FormControl style={{ margin: '0px 0px' }}>
                                    <Input placeholder="+91" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nationality"
                        render={({ field }) => (
                            <FormItem className="m-0 relative pb-0" style={{ zIndex: 9 }}>
                                <FormLabel className="capitalize font-semibold text-slate-700">Your nationality</FormLabel>
                                <FormMessage className="p-0 m-0" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                <FormControl style={{ margin: '1px 0px', zIndex: 99 }} >
                                    <div style={{ zIndex: 99 }} onClick={() => setAction((prev) => ({ ...prev, dropDown: !prev.dropDown }))} className="z-50 w-full h-9 px-3 rounded-md  shadow-sm border" >
                                        <div className="flex justify-between items-center">
                                            <h1> {field.value || ''} </h1>
                                            {
                                                action.dropDown && (
                                                    <DropDown countiresJSON={countiresJSON} setValue={form.setValue} />
                                                )
                                            }
                                            <ChevronDown style={{ zIndex: 90 }} className={`float-end mt-1.5 text-gray-600 ${action.dropDown ? 'icon' : ''} `} />
                                        </div>
                                    </div>
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
                            <FormItem className="p-0 m-0" style={{ padding: "0px 0px", marginTop: '0px' }}>
                                <FormLabel className="capitalize font-semibold text-slate-700">Your Address</FormLabel>
                                <FormMessage className="p-0 m-0" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                <FormControl style={{ margin: '0px 0px' }}>
                                    <Input placeholder="Your address" {...field} />
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
                            <FormItem className="m-0" style={{ padding: "0px 0px", marginTop: '4px' }}>
                                <FormLabel className="capitalize font-semibold text-slate-700">Your message</FormLabel>
                                <FormMessage className="p-0 m-0" style={{ padding: '0px 0px', margin: '0px 0px' }} />
                                <FormControl style={{ margin: '0px 0px' }}>
                                    <textarea placeholder="Your message" {...field} className="shadow-sm text-base w-full border border-solid rounded  px-1 focus:border-black focus:ring-0.5 focus:ring-black  focus:outline-none tracking-tight" style={{ height: '98px', fontWeight: '400' }} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    {
                        action.loading ? (
                            <>
                                <button style={{ paddingInline: '54.5px' }} type="button" className="bg-[#34a265] flex gap-2 py-1.5 rounded-md font-medium text-white capitalize tracking-tighter shadow-sm shadow-gray-600 border border-solid border-gray-400 float-end mt-1">

                                    <LoaderCircle className="animate-spin" />
                                </button>
                            </>
                        ) : (
                            <button type="submit" className="bg-[#34a265] px-6 py-1.5 rounded-md font-medium text-white capitalize tracking-tighter shadow-sm shadow-gray-600 border border-solid border-gray-400 float-end mt-1">Submit form</button>
                        )
                    }
                </div>
            </form>
            <hr style={{ height: '2px' }} className="bg-[#34a265] mt-2" />
        </Form >
    )
}

export default SurveyFormSection