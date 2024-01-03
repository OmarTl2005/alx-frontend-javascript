export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        const istrue = {
           status: 200,
           body: "success"
        };

        if (success) {
            resolve(istrue);
        } else {
            reject(Error("The fake API is not working currently"));
        }
    });
}
