function compareArrays(arr1, arr2) {
    debugger;
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter((user) => user.gender === gender);
    if (filteredUsers.length === 0) {
        return 0;
    }
    return filteredUsers.map((user) => user.age).reduce((sum, age) => sum + age, 0) / filteredUsers.length;
}