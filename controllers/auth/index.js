const { register } = require('./register');

const { login } = require('./login');

const { getCurrent } = require('./currentUser');

const { logout } = require('./logout');

// const { updateSubscription } = require('./updateSubscription');

const {updateAvatar} = require('./updateAvatar')

module.exports = { register, login, getCurrent, logout, updateAvatar };
