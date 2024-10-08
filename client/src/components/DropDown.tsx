import { Country } from "@/types"


function DropDown({ countiresJSON, setValue }: { countiresJSON: any[], setValue: any }) {
    function handleNationality(data: any) {
        setValue('nationality', data?.name?.common)
    }
    return (
        <div style={{ zIndex: '' }} className="w-full bg-slate-50  h-48 absolute bottom-8 left-0 rounded-md drop-down border overflow-y-scroll">
            <ul>
                {
                    countiresJSON?.map((data:Country, ind: number) => (
                        <li onClick={() => handleNationality(data)} key={data.name.common + ind} className="px-4 h-10 border-b border-solid">
                            <div className="flex w-full justify-between items-center">
                                <h1 className="font-medium text-sm"> {data?.name?.common} </h1>
                                <img src={data?.flags?.svg} className="float-right h-8 mt-1 rounded" />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DropDown