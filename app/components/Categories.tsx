"use client";

import { section } from "motion/react-client";

type Categories = {
    title: string,
    image: string
}

const Categories = () => {
    return (
        <section className="bg-[#F7F4E9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-black text-6xl text-center font-bold mb-16">Categories</h1>
            </div>

            {/* books categories */}
            <div className="grid grid-cols-5 gap-0 mt-30">

                <div >
                    <img src="/images/categories-images/Fiction.png" alt="fiction" />
                    {/* Fiction */}
                </div>
                <div>
                    <img src="/images/categories-images/thriller.png" alt="Thriller" />
                    {/* Thriller */}
                </div>
                <div>
                    <img src="/images/categories-images/horror.png" alt="Herror" />
                    {/* Horror */}
                </div>
                <div>
                    <img src="/images/categories-images/Science.png" alt="science" />
                    {/* Science */}
                </div>
                <div>
                    <img src="/images/categories-images/romance.png" alt="Romance" />
                    {/* Romance */}
                </div>

            </div>
        </section>
    )
}

export default Categories