"use client";

type Book = {
    id: number;
    title: string;
    image: string;
};

const featuredBooks: Book[] = [
    { id: 1, title: "Book 1", image: "/images/book1.jpg" },
    { id: 2, title: "Book 2", image: "/images/book2.jpg" },
    { id: 3, title: "Book 3", image: "/images/book3.jpg" },
    { id: 4, title: "Book 4", image: "/images/book4.jpg" },
    { id: 5, title: "Book 5", image: "/images/book5.jpeg" },
    { id: 6, title: "Book 6", image: "/images/book6.jpg" },
    { id: 7, title: "Book 7", image: "/images/book7.jpg" },
    { id: 8, title: "Book 8", image: "/images/book8.jpg" },
];

const BOOKS_PER_SHELF = 4;

function chunkIntoShelves(books: Book[], size: number): Book[][] {
    const shelves: Book[][] = [];
    for (let i = 0; i < books.length; i += size) {
        shelves.push(books.slice(i, i + size));
    }
    return shelves;
}

const FeaturedBooks = () => {
    const shelves = chunkIntoShelves(featuredBooks, BOOKS_PER_SHELF);

    return (
        <section className="py-20 lg:py-32 bg-[#F7F4E9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section heading */}
                <h2 className="text-black text-6xl text-center font-bold mb-16">
                    Featured Books
                </h2>

                {/* One block per shelf */}
                <div className="flex flex-col items-center gap-12">
                    {shelves.map((shelf, shelfIndex) => (
                        <div
                            key={shelfIndex}
                            className=" relative "
                        >
                            {/* ── Books row ── */}
                            <div className="relative z-20 max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 items-end min-h-[320px]">
                                    {shelf.map((book) => (
                                        <div key={book.id} className="relative z-30 flex justify-center items-end h-[200px]">
                                            <img
                                                src={book.image}
                                                alt={book.title}
                                                className="max-h-[280px] w-auto object-contain -m-10"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* ── Wooden shelf image — full viewport width ── */}
                                <div className="relative z-10 w-screen left-1/2 -translate-x-1/2 -mt-100 ">
                                    <img
                                        src="/images/New-Shelf.png"
                                        alt="wooden shelf"
                                        className="w-full h-auto object-cover "
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedBooks;