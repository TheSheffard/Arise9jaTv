'use client'



export const CardA = () => {
    return (
        <section className=" h-fit p-2">
            <div className="rounded-md h-[170px] overflow-hidden w-full bg-teal-500">

            </div>
            <p className="font-semibold">date</p>
            <p className="text-[17px] font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

        </section>
    )
}

export const CardB = () => {
    return (
        <section className=" h-fit p-2">
            <div className="rounded-md h-[400px] overflow-hidden w-full bg-teal-500">

            </div>
            <p className="font-semibold">date</p>
            <p className="text-[20px] font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

        </section>
    )
}

export const SmallCard = () => {
    return (
        <section className="flex gap-2  items-center">
            <p className="font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            <div className="h-[150px] md:h-[100px] w-[250px] bg-teal-400 rounded-md overflow-hidden">

            </div>

        </section>
    )
}


export const CardC = () => {
    return (
        <section className="flex gap-2  items-center">
            <div className="h-[150px] md:h-[150px] flex flex-1 bg-teal-400 rounded-md overflow-hidden">
            </div>
            <div className="flex flex-1 flex-col">

                <p className="font-semibold">Date</p>
                <p className="md:text-lg font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>

        </section>
    )
}
