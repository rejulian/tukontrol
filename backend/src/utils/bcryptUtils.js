import bcrypt from 'bcrypt';

export const hashPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password,12);
    return hashedPassword
}

export const comparePassword = (password, hashedPassword) => {
    const isMatch = bcrypt.compareSync(password, hashedPassword)
    return isMatch
}