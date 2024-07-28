// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true,
    },
    age: { 
        type: Number, 
        required: true,
        min: 0,
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
    registerDate: { 
        type: Date, 
        default: Date.now,
    },
});

// Middleware para hashear la contraseña antes de guardarla
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
