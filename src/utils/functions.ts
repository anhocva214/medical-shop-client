export const getFromEpoch = (epoch: number) => {
    let d = new Date(epoch);

    let textDDMMYYYY = d.getDate() + "/" + (d.getMonth() + 1).toString() + "/" + d.getFullYear();

    return {
        textDDMMYYYY,
        date: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear()
    }
}