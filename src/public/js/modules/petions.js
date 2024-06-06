
export const  getBooks =  async () => {
    let {data}= await axios({
        method: 'get',
        url: 'http://localhost:3000/showBooks',
    });
    let dataGetBooks = await data.rows;
    return dataGetBooks;
}