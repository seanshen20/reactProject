export default (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
}