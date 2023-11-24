export const getBlogList = async () => {
    return await fetch(
        "https://notion-api.splitbee.io/v1/table/1d30a536b01f4145a60127c2ebe829aa",
    )
        .then((res) => res.json())
        .then((result) => result);
};

export const getBlogDetail = async (id) => {
    return await fetch(`https://notion-api.splitbee.io/v1/page/${id}`)
        .then((res) => res.json())
        .then((result) => result);
};