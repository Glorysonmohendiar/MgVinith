module.exports.registerUser = function(username) {
    if(!username) throw new Error('User name is required.');
    return{id: new Date().getTime(), username: username}
}