'use client'

import { CardC } from "@/utils/Helper"

const Polities = () => {
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-10  px-2 md:px-10">
            {
                Array(20).fill(0).map((_, index) => (
                    <CardC key={index} />
                ))
            }
        </div>
    )
}

export default Polities
