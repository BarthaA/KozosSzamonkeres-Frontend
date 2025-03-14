import { addKoncert } from "../utils/api";

const AddPage = () => {
    return (
        <>
            <div className="heading flex justify-center items-center w-screen h-auto absolute top-24">
                <h1 className="text-black text-4xl font-bold">Add new concert</h1>
            </div>
            <div className="wrapper flex justify-center items-center w-screen h-screen">
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        await addKoncert({
                            artist: e.currentTarget.artist.value,
                            start: new Date(e.currentTarget.start.value),
                            duration: parseInt(e.currentTarget.duration.value),
                            cancelled: false
                        });
                        e.currentTarget.reset();
                    }}
                    className="flex flex-col gap-4 bg-gray-200 p-4 rounded"
                >
                    <label>
                        Artist <br />
                        <input
                            name="artist"
                            type="text"
                            required
                            className="p-2 rounded w-full bg-white"
                        />
                    </label>
                    <label>
                        Start <br />
                        <input
                            name="start"
                            type="datetime-local"
                            required
                            className="p-2 rounded w-full bg-white"
                        />
                    </label>
                    <label>
                        Duration <br />
                        <input
                            name="duration"
                            type="number"
                            required
                            className="p-2 rounded w-full bg-white"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Add concert
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddPage;
