import axios from "axios";

const getBooks = async (query) => {
    try {
        const res = await axios.get(`https://openlibrary.org/search.json?limit=20&title=${encodeURIComponent(query)}`);
        if (res.status !== 200) {
            throw new Error(`${res.status} has been occurred`);
        }
        return res.data.docs;
    } catch (error) {
        console.log(error);
        return null
    }
}

export default getBooks;